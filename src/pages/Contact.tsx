import Navbar from '@/components/Navbar'
import React from 'react'
import { FaPhone,FaWhatsapp,FaEnvelope } from 'react-icons/fa'
import { useForm, SubmitHandler } from "react-hook-form";
interface Props {
    
}
type Inputs = {
    Name:string,
    Email:string,
    Subject:string,
    Message:String
    
  };

const Contact = (props: Props) => {

    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData =>window.location.href=`mailto:nvijay461@gmail?Subject=${formData.Subject}&body=${formData.Message}  `;
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-hidden z-0 ">
            <Navbar/>
            <div className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <h3 className="absolute top-5 pl-5 uppercase tracking-[20px] text-gray-500 text-2xl ">Contact</h3>
                <div className=" flex-col space-y-8 items-center w-full flex justify-center">
                    <h4 className='absolute top-16 text-3xl font-semibold text-center '>
                        Let's talk
                    </h4>
                    <div className="relative flex-col  space-y-5">
                        
                        <div className="flex  items-center  mt-24 space-x-5">
                            <FaWhatsapp className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                            <p className='text-2xl'>+919650772007</p>
                        </div>
                        <div className="flex  items-center space-x-5">
                            <FaEnvelope className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                            <p className='text-2xl'>nvijay461@gmail.com</p>
                        </div>

                    </div>
                    <form  onSubmit={handleSubmit((onSubmit))} className='flex flex-col space-y-2   '>
                        <div className="flex space-x-2">
                            <input {...register('Name')}  placeholder='Name' className=' w-32 sm:w-52  contactInfo bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 focus-border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40  hover:border-[#F7AB0A]/40 ' type="text" />
                            <input {...register("Email")} type="email" placeholder='Email' className=' w-32  sm:w-52 contactInfo bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 focus-border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40  ' />
                        </div>
                        <input {...register("Subject")} placeholder='Subject'className='contactInfo bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' type="text" />
                        <textarea {...register("Message")} placeholder='Message' className='contactInfo bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40  hover:border-[#F7AB0A]/40 ' />
                        <button type='submit'
                        className='bg-[#F7AB0A] py-5 px-8 rounded-md text-black font-bold text-lg hover:bg-[rgb(253,188,47)]'>Submit</button>
                    </form>
                </div>

            </div>

       
       
       
       
            <script src="https://cdn.tailwindcss.com"></script>
        </div>

    )
}

export default Contact
