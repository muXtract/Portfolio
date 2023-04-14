import Navbar from "../components/Navbar"
import {motion} from "framer-motion"
import { useCollapse } from 'react-collapsed'



const About=() => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
   
    return (

        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-hidden z-0 ">
           <Navbar/>
           <div className="  flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                    <h3 className="about absolute pl-5 top-0 uppercase tracking-[20px] text-gray-500   text-2xl">About</h3>
                    <motion.img className="mt-12 md:mt-16 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px] "
                    initial={{
                        x:-200,
                        opacity:0
                    }}
                    animate={{
                        x:0,
                        opacity:1
                    }}
                    transition={{
                        duration:1.2
                    }}
                    src="/snow.jpg"/>
                <div className="px-0  md:px-10 mt-2">
                    <h4 className="text-4xl lg:tracking-wide font-semibold">Here is a {" "}
                        <span className=" text-[#F7AB0A]/90">lil {" "}</span>background
                        <p className="text-base  mt-2">Hi ,I'm Vijay, a student at DTU. I'm an avid coder and spend most of my free time exploring new technologies and honing my skills ( still learning how to make a better snowman ) . I also have a passion for basketball and you can often find me at the local courts. </p>
                        <div className=" text-base hidden lg:block">
                            <button className="text-lg text-gray-500 animate-pulse tracking-widest"
                            {...getToggleProps()}>
                                {isExpanded ? 'Collapse' : 'Expand'}
                            </button>
                            <section {...getCollapseProps()}>I'm known among my peers for my strong work ethic and dedication to achieving my goals. I firmly believe in putting in the hard work required to succeed in whatever I do.Apart from my academic and athletic pursuits, I love traveling and exploring new places. I find that traveling and experiencing new cultures and perspectives is a great way to broaden one's horizons and learn new things..</section>
                        </div>
                    
                    </h4>
                 </div>
           </div>
          
           <script src="https://cdn.tailwindcss.com"></script>
        </div>
    )
}

export default About
