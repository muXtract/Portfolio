import React from 'react';
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";


interface Props {
    
}

const Navbar = (props: Props) => {
    return (
        <nav className='flex sticky xl:items-center items-start z-20 mx-auto max-w-7xl top-0 justify-between p-5'>
            <motion.div className="left"
            initial={{
                x:-500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5
            }}
            >
                <SocialIcon url='https://www.instagram.com/vijay_181/'
                bgColor='transparent'
                fgColor='gray'/>
                <SocialIcon url="https://www.linkedin.com/in/vijay-narayanan-8034a424a/"
                bgColor="transparent"
                fgColor='gray'
                />
                <SocialIcon url='https://github.com/muXtract'
                bgColor='transparent'
                fgColor='gray'/>
                
            </motion.div>
            

            <motion.div className="right "
            initial={{
                x:500,
                opacity:0,
                scale:0.5
            }}
            animate={{ 
                opacity:1,
                scale:1,
                x:0
            }}
            transition={{
                duration:1.5
            }}
            >
               
                    <SocialIcon 
                    network='linktree'
                    bgColor='transparent'
                    fgColor='gray'
                    url='/'>
                    </SocialIcon>
                    
                   
                
            </motion.div>
            
            

        </nav>
    )
}

export default Navbar

