import Head from 'next/head'
import Header from '@/components/Header'

import Sidebar from '@/components/Sidebar';
import Feed from "@/components/Feed"
import Widgets from '@/components/Widgets';



export default function Home() {
 
  
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


