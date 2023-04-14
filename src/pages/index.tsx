import Head from 'next/head'
import Navbar from '@/components/Navbar'


import Hero from '@/components/Hero'

// scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80




export default function Home() {
 
  return (
    <div className='main bg-[rgb(36,36,36)]  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80  overflow-x-hidden text-white h-screen xl:items-center snap-y snap-mandatory overflow-y-scroll z-0 ' >
      <Head>
        <title className='title'>Portfolio</title>
      </Head>
      <Navbar/>
      {/* HERO SECTION  */}
      <section id="Hero" className='snap-center'><Hero/></section>
      


      <script src="https://cdn.tailwindcss.com"></script>
     
    </div>
  )
}
