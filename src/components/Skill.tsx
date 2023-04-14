import React from "react"
import { motion } from "framer-motion"
import { FaReact, FaHtml5 } from 'react-icons/fa';
type Props={
    directionLeft?:boolean;

};
function Skill({directionLeft}:Props){
    return(
        <div className='group relative justify-center flex cursor-pointer'>
            <motion.div
            initial={{
                opacity:0,
                x:directionLeft?-200:200
            }}
            animate={{x:0,opacity:1}}
            transition={{
                duration:1
            }}
            >
                 <FaReact className=' filter text-blue-500 hover:grayscale transition duration-300 ease-in-out xl:w-20 xl:h-20  w-12 h-12 rounded-full border border-gray-500 object-cover ' />
                 
            
            
            </motion.div>
        </div>
    )
}
export default Skill