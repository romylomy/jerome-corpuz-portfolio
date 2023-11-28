import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className='mb-20 sm:mb-28 w-[min(100%,38rem)]'>
        <h1 className='mb-8 font-semibold text-center text-5xl text-slate-700 md:text-5xl xl:text-7xl'>Contact</h1>
        <p className='text-gray-700'>Please contact me directly at {""} 
            <a className='underline' href="corpuz52@gmail.com">
                corpuz52@gmail.com
            </a> {""}
            or through this form.
        </p>

        <form className='mt-10 flex flex-col'>
            <input type="email" className='h-14 rounded-lg border-2 border-black' />
            <textarea className='h-52 my-3 rounded-lg border-2 border-black'/>
            <button type="submit">
                Submit <FaPaperPlane/>
            </button>


        </form>
        
              
    </section>
  )
}
