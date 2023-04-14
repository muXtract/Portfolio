import React from 'react';
import { motion } from 'framer-motion';


interface Props {
    
}

const BackgroundCircles = (props: Props) => {
    return (
       <motion.div className='relative mt-5 flex justify-center items-center '
       initial={{
        opacity:0
       }}
       animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1],
        borderRadius:["20%","20%","50%","80%","20%"]
       }}
       transition={{
        duration:2
       }}
       >
        <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping "></div>
        <div className=" md:hidden border border-[#F7AB0A] animate-pulse rounded-full h-[320px] w-[320px] mt-52 absolute "></div>
        <div className="hidden md:block border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 absolute "></div>
        <div className="rounded-full hidden md:block border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute animate-pulse mt-52 "></div>

       </motion.div>
    )
}

export default BackgroundCircles
