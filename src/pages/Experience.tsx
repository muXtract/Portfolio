import React from 'react'
import Navbar from '../components/Navbar'
import {motion} from "framer-motion"
import ExperienceCard from "../components/ExperienceCard"


const Experience = () => {
  return (
    
        <div className= "bg-[rgb(36,36,36)]   text-white h-screen snap-y snap-mandatory overflow-hidden z-0 ">
            <Navbar/>
            
            <section className='snap-center ' id='experience'>
                <motion.div 
                initial={{
                
                    opacity:0
                }}
                animate={{
                    
                    opacity:1
                }}
                transition={{
                    duration:2
                }}
                className="  flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
                    <h3 className=' tracking-[20px] uppercase absolute top-5 pl-5 text-gray-500 text-xl '>Experience</h3>
                    <div className='w-full flex space-x-5 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-scroll p-10 snap-x snap-mandatory'>
                        <ExperienceCard/>
                        <ExperienceCard/>
                        <ExperienceCard/>
                        <ExperienceCard/>
                    </div>
                
                </motion.div>
            </section>




            <script src="https://cdn.tailwindcss.com"></script>
        </div>
  )
}

export default Experience
