import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
    
}

const Project3 = (props: Props) => {
    return (
        
            <div  className="w-screen  flex-shrink-0  snap-center flex flex-col space-y-3 items-center  justify-center p-10  ">
                 <div className="2xl:hidden">
                        <motion.img   
                            initial={{opacity:0,y:-300}}
                            animate={{opacity:1,y:0}}
                            transition={{duration:1.2}}
                            viewport={{once:true}}
                                                
                            src="meme.png" className='w-80 cursor-pointer'>
                                                    
                         </motion.img>     
                </div> 
                <div className="2xl:block hidden">
                <motion.img   
                            initial={{opacity:0,y:-300}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:1.2}}
                            viewport={{once:true}}
                                                
                            src="meme.png" className='w-80 cursor-pointer'>
                                                    
                         </motion.img>      
                </div>
                <div>
                     <Link href="https://meme-generator-rose.vercel.app/" className='text-lg font-semibold underline hover:text-violet-500 2xl:text-2xl  text-center md:text-left'>Customizable Meme Generator </Link>
                </div>
                
            </div>
      
    )
}

export default Project3
