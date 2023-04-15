import React from 'react'
import { FaHtml5,FaJs,FaCss3 } from 'react-icons/fa';
import Image from 'next/image';


import { motion } from 'framer-motion'
interface Props {
    
}

const ExperienceCard1 = (props: Props) => {
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

            alt='logo' src="free.svg" className='w-28 h-28  rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center ' ></motion.img>
            <div className="px-0  md:px-10">
                <h4 className='text-3xl  font-light'>Freelance</h4>
                <p className='font-bold text-2xl mt-1' >Interior Company</p>
                <div className="tech flex space-x-2 my-2"> 
                    <Image alt='logo' width={24} height={24} src="/tailwind.png" className=' text-blue-400 rounded-full' />
                    <FaHtml5  className='w-7 h-7 text-orange-500 rounded-full' />
                    <FaCss3  className='w-7 h-7 text-blue-400 rounded-full' />
                    <FaJs  className='w-7 h-7 text-yellow-400 rounded-full' />
                    
                </div>
                <p className='uppercase py-5 text-gray-300'>April 2023</p>
                <ul className='list-disc space-y-4  text-lg max-w-[250px] md:max-w:2xl '>
                Developed a modern, responsive website for an interior design company
                
                   
                </ul>
            </div>
       
       
        </article>
    )
}

export default ExperienceCard1
