import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion';
import React from 'react'




interface Props {
    
}

const Projects = (props: Props) => {
    const projects=[1,2,3,4,5];
    return (

        <div className="project  bg-[rgb(36,36,36)] scrollbar scrollbar-track-gray-400/20 text-white h-screen snap-y snap-mandatory overflow-y-hidden z-0 ">
                 <Navbar/>
                <section id="projects">
                    <div className=' h-screen  relative flex overflow-hidden text-left md:flex-row max-w-full justify-evenly items-center z-0'>
                        <h3 className=" mx-auto absolute top-0 pl-5 uppercase tracking-[20px] text-gray-500 text-2xl ">Projects</h3>
                        <div className="overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 absolute top-32 md:top-5 w-full flex overflow-y-hidden snap-x snap-mandaotry z-20">
                            { projects.map((project,i)=>(
                               
                                    <div key={i} className="w-screen  flex-shrink-0  snap-center flex flex-col space-y-3 items-center  justify-center p-20 md:p-44 ">
                                         < motion.img 
                                         initial={{opacity:0,y:-300}}
                                         whileInView={{opacity:1,y:0}}
                                         transition={{duration:1.2}}
                                         viewport={{once:true}}
                                         
                                         src="free.svg" className='w-80 md:w-72 '>
                                            
                                        </motion.img>     
                                        <div>
                                            <h4>project{i+1}</h4>
                                        </div>
                                    </div>
                                
                             )) }
                        </div>
                        <div className="w-full absolute top-[20%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12 "></div>
                    </div>


                </section>









                 <script src="https://cdn.tailwindcss.com"></script>
        </div>



    )
}

export default Projects
