import React from 'react'
import { FaReact } from 'react-icons/fa';

import { motion } from 'framer-motion'
interface Props {
    
}

const ExperienceCard = (props: Props) => {
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

            alt='logo' src="free.svg" className='w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center ' ></motion.img>
            <div className="px-0  md:px-10">
                <h4 className='text-3xl  font-light'>Freelance</h4>
                <p className='font-bold text-2xl mt-1' >Interior Company</p>
                <div className="tech flex space-x-2 my-2"> 
                    <FaReact  className='w-7 h-7 text-blue-400/90 rounded-full' />
                </div>
                <p className='uppercase py-5 text-gray-300'>April 2023</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                   
                </ul>
            </div>
       
       
        </article>
    )
}

export default ExperienceCard
