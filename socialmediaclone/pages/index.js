import Head from 'next/head'
import Header from '@/components/Header'
/* import { getSession } from 'next-auth/react'
 */import Login from '@/components/Login'
import { useSession } from 'next-auth/react'
import Sidebar from '@/components/Sidebar';
import Feed from "@/components/Feed"

export default function Home() {
  const { data: session } = useSession();

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
      </main>
    </div>
  )
}

/* export async function getServerSideProps(context){
const session = await getSession(context)
return{
  props:{
    session
  }
} */
