import React from 'react'

import contactBgImg from "../../assets/contact-background.jpg"
import Materials from '../home/Meterials'
import Testimonials from '../home/Testimonials'

const Contact = () => {
  return (
    <section> 
    {/* banner */}
    <div
       className="w-full h-[400px]  bg-no-repeat bg-cover bg-center   flex items-center justify-center text-white"
       style={{ backgroundImage: `url(${contactBgImg})` }}
     >
       <div className='text-5xl font-bold underline'>
       <h1 className="text-5xl font-bold">Contact</h1>
       </div>
     </div>
     <Materials/>
     <Testimonials/>
   </section>
  )
}

export default Contact;