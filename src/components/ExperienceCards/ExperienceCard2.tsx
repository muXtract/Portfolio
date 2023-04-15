import React from 'react'

import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';


import { motion } from 'framer-motion'
interface Props {
    
}

const ExperienceCard2 = (props: Props) => {
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

            alt='logo' src="/rt.jpg" className='w-28 h-28  rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center ' ></motion.img>
            <div className="px-0  md:px-10">
                <h4 className='text-3xl  font-light'>College Society</h4>
                <p className='font-bold text-2xl mt-1' >Roundtable</p>
                <div className="tech flex space-x-2 my-2"> 
                    <img src="/tailwind.png" className='w-7 h-7 text-blue-400 rounded-full' />
                    <FaHtml5  className='w-7 h-7 text-orange-500 rounded-full' />
                    <FaCss3  className='w-7 h-7 text-blue-400 rounded-full' />
                    <FaJs  className='w-7 h-7 text-yellow-400 rounded-full' />
                    
                </div>
                <p className='uppercase py-5 text-gray-300'>Jan 2023</p>
                <ul className='list-disc space-y-4 text-lg max-w-[250px] md:max-w:2xl '>
                
                <p>Led a team of 4 to create an intuitive and user-friendly interface </p>
                   
                </ul>
            </div>
       
       
        </article>
    )
}

export default ExperienceCard2
