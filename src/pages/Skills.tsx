import Navbar from '@/components/Navbar'
import React from 'react'
import {motion} from "framer-motion"
import Skill from '@/components/Skill'

interface Props {
    
}

const Skills = (props: Props) => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-hidden z-0 ">
         <Navbar/>
         <section id='skills'>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.5}}
            
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center ">
                <h3 className="absolute top-5 uppercase tracking-[20px] text-gray-500 text-2xl   pl-5  ">skills</h3>
                <h3 className="absolute text-gray-500 text-sm top-16 tracking-[3px]    ">Hover over a skill</h3>
                <div className="grid absolute top-36 grid-cols-4 gap-20 xl:gap-x-32 ">
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </motion.div>
         </section>


         <script src="https://cdn.tailwindcss.com"></script>
        </div>
    )
}

export default Skills
