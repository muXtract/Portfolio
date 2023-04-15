import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import Tilt from "react-parallax-tilt"



interface Props {
    
}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
    words:["Hi,I'm Vijay","And I like to Code"],loop:true,delaySpeed:1500
    });
    return(
         <Tilt  gyroscope={false} trackOnWindow={false} >
            <div className='h-[50vh] md:h-screen flex flex-col mt-10 items-center justify-center text-center overflow-y-scrollbar'>
                <BackgroundCircles/>
                <Image src="/coder.svg" width={80} height={80} alt='pfp'></Image>
                <div className="z-20">
                    <h2 className='text-sm pl-4 tracking-[15px] uppercase text-gray-500 pb-2'>Web Developer</h2>
                    <h1 className="text-4xl md:text-6xl">
                        <span className=''>{text}</span>
                        <Cursor cursorColor='#F7AB0A'/>
                    </h1>
                    <div className="mx-auto mt-2 max-w-[300px]">
                        <Link href="/About">
                        <button className='px-2 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 ' >About</button>
                        </Link>
                        <Link href="/Experience">
                        <button className='px-2 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 ' >Experience</button>
                        </Link>
                        <Link href="/Skills">
                        <button className='px-2 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 ' >Skills</button>
                        </Link>
                        
                        <Link href="/Projects">
                        <button className='px-2 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 ' >Projects</button>
                        </Link>
                        <Link href="/Contact">
                        <button className='px-2 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 ' >Contact</button>
                        </Link>
                    
                    </div>

                </div>
                <script async src="https://cdn.tailwindcss.com"></script>
            </div>
        </Tilt>
    )
}

export default Hero
