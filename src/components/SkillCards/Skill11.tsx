import React from 'react'
import { motion } from 'framer-motion'
import { type } from 'os';

type Props= {
    directionLeft?:boolean;
    
};

function Skill11({directionLeft}: Props){
    return (
       <div className="group animate-pulse relative flex cursor-pointer">
        <motion.img
        initial={{
            y:500,
            opacity:0
        }}
        transition={{duration:1}}
        animate={{y:0,opacity:1}}
        src="/c++.jpg"
        className='rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition  duration-100 ease-in-out '
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0 h-16 w-16 xl:w-20 xl:h-20">
            <div className="flex items-center justify-center h-full ">
                <p className='text-2xl font-bold text-black opacity-100 '>C++</p>
            </div>
        </div>
       </div>
    )
}

export default Skill11
