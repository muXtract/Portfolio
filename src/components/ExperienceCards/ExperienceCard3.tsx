import React from 'react'

import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';


import { motion } from 'framer-motion'
interface Props {
    
}

const ExperienceCard3 = (props: Props) => {
    return (
        <article className=' mt-12 2xl:opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden snap-center bg-[#292929] p-10 flex flex-col rounded-lg items-center space-y-7  flex-shrink-0 w-[450px] h-[450px]  '>
            <motion.img
                initial={{
                    y:-100,
                    opacity:0.4
                }}
                animate={{
                    opacity:1,
                    y:0,
                    
                }}
                transition={{
                    duration:1.2,
                }}

            alt='logo' src="/dx.png" className='w-28 h-28  rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center ' ></motion.img>
            <div className="px-0  md:px-10">
                <h4 className='text-3xl  font-light'>Tech Club</h4>
                <p className='font-bold text-2xl mt-1' >Dynamix</p>
               
                <p className='uppercase py-5 text-gray-300'>Dec 2021</p>
                <ul className='list-disc space-y-4  text-lg max-w-[250px] md:max-w:2xl '>
                
                <p>I was the vice president of my school's tech club and participated in various `capture the flag` events </p>
                   
                </ul>
            </div>
       
       
        </article>
    )
}

export default ExperienceCard3
