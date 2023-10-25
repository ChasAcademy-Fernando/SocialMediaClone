import Head from 'next/head'
import Header from '@/components/Header'
import Login from '@/components/Login'
import { useSession } from 'next-auth/react'
import Sidebar from '@/components/Sidebar';
import Feed from "@/components/Feed"
import Widgets from '@/components/Widgets';

export default function Home() {
  const { data: session } = useSession();
  if(session) console.log("this is the user", session.user.image, session.user.name)

  if(!session) return <Login/>;
  
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>TreeHouse</title>
      </Head>
      <Header/>
      <main className='flex'>
      <Sidebar/>
      <Feed/>
      <Widgets/>
      </main>
    </div>
  )
}


