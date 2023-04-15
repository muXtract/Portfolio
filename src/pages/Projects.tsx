import Navbar from '@/components/Navbar'
import React from 'react'
import Project1 from "../components/ProjectsCards/Project1"
import Project2 from '@/components/ProjectsCards/Project2'
import Project3 from '@/components/ProjectsCards/Project3'
import Project4 from '@/components/ProjectsCards/Project4'




interface Props {
    
}

const Projects = (props: Props) => {
   
    return (

        <div className="project  bg-[rgb(36,36,36)] scrollbar scrollbar-track-gray-400/20 text-white h-screen snap-y snap-mandatory snap-center overflow-y-hidden z-0 ">
                 <Navbar/>
                <section id="projects">
                    <div className=' h-screen  relative flex overflow-hidden text-left md:flex-row max-w-full justify-evenly items-center z-0'>
                        <h3 className=" mx-auto absolute top-0 pl-5 uppercase tracking-[20px] text-gray-500 text-2xl ">Projects</h3>
                        <div className="overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 absolute top-32 md:top-5 w-full flex overflow-y-hidden snap-x snap-mandaotry z-20">
                            <Project1/>
                            <Project2/>
                            <Project3/>
                            <Project4/>
                        </div>
                        <div className="w-full  absolute top-[20%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12 "></div>
                    </div>


                </section>









                 <script async src="https://cdn.tailwindcss.com"></script>
        </div>



    )
}

export default Projects
