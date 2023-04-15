import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import{motion} from "framer-motion"
import Skill1 from '@/components/SkillCards/Skill1'
import Skill2 from '@/components/SkillCards/Skill2'
import Skill3 from '@/components/SkillCards/Skill3'
import Skill4 from '@/components/SkillCards/Skill4'
import Skill5 from '@/components/SkillCards/Skill5'
import Skill6 from '@/components/SkillCards/Skill6'
import Skill7 from '@/components/SkillCards/Skill7'
import Skill8 from '@/components/SkillCards/Skill8'
import Skill9 from '@/components/SkillCards/Skill9'
import Skill10 from '@/components/SkillCards/Skill10'
import Skill11 from '@/components/SkillCards/Skill11'
import Skill12 from '@/components/SkillCards/Skill12'

interface Props {
    
}

const Skills = (props: Props) => {
    return (
            <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-hidden z-0 ">
                <Navbar/>
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.5}}
                
                className='flex relative h-[70vh] flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:p-10 justify-center xl:space-y-0 mx-auto items-center '>
                    <h3 className='absolute top-5 pl-5 uppercase tracking-[20px] text-gray-500 text-2xl '>
                        Skills
                    </h3>
                    
                    <div className="grid grid-cols-4  gap-5 ">
                           <Skill1/>
                           <Skill2/>
                           <Skill3/>
                           <Skill4/>
                           <Skill5/>
                           <Skill6/>
                           <Skill7/>
                           <Skill8/>
                           <Skill9/>
                           <Skill10/>
                           <Skill11/>
                           <Skill12/>
                           
                           
                            


                             
                             
                    </div>
                    
                       
                            
                        
                
                    
               
           
           
           
           
                        </motion.div>
           <script async src="https://cdn.tailwindcss.com"></script>
        </div>
        
    )
}

export default Skills
