import React from 'react'
import {SocialIcon} from "react-social-icons";
import { motion } from "framer-motion";
const Navbar = ( ) => {
  return (
    <nav className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
        <motion.div >
          <SocialIcon url="https://instagram.com/vijay_181" 
          fgColor='gray'
          bgColor='transparent'/>
          <SocialIcon url="https://www.linkedin.com/in/vijay-narayanan-8034a424a/" 
          fgColor='gray'
          bgColor='transparent'/>
          
          <SocialIcon url="https://github.com/muXtract" 
          fgColor='gray'
          bgColor='transparent'/>
         
        </motion.div>
        {/* <div className='flex items-center  text-gray-300 cursor-pointer '>
          <SocialIcon network='email'
          className='cursor-pointer'
          fgColor='gray'
          bgColor='transparent'/>
          <p className=" uppercase hidden md:inline-flex text-sm text-gray-400 ">Get in touch</p>

        </div> */}
    </nav>
  )
}

export default Navbar
