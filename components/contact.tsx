"use client"
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from "framer-motion"
import {sendEmail} from "@/lib/actions/sendEmail"

export default function Contact() {

  
    
  return (
    <motion.section 
        id="contact" 
        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1,
        }}
        transition={{
            duration:1
        }}>
        <h1 className='mb-8 font-semibold text-center text-5xl text-slate-700 md:text-5xl xl:text-7xl'>Contact</h1>
        <p className='text-gray-700'>Please contact me directly at {""} 
            <a className='underline' href="mailto:corpuz52@gmail.com">
                corpuz52@gmail.com
            </a> {""}
            or through this form.
        </p>

        <form 
            className='mt-10 flex flex-col'
            action={ async (formData) =>{
                await sendEmail(formData);                
            }}>
            <input 
                type="email" 
                className='h-14 px-4 rounded-lg border-2 border-black'
                placeholder="Your email"
                name="senderEmail"
                required
                maxLength={500} />

            <textarea 
                className='h-52 p-4 my-3 rounded-lg border-2 border-black '
                placeholder="Your message"
                name="message"
                required
                maxLength={500}/>

            <button type="submit"  className=" group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
                focus:scale-105
                hover:scale-110
                active:scale-105
                hover:bg-gray-950">
                Submit <FaPaperPlane className='text-xs  opacity-70 transition-all
                group-hover:translate-x-1
                '/>
            </button>
     


        </form>
        
              
    </motion.section>
  )
}
