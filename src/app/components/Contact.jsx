import React from 'react'
import Image from 'next/image';
import mailicon from "../../../public/icons/mail.png";
import callicon from "../../../public/icons/call.png"
import AnimatedHeader from './AnimatedHeader';
const Contact = () => {
  return (
    <div name="contact" className='mt-12 h-[120vh]  flex  flex-col items-center justify-center gap-12 p-10 bg-white'>
     <AnimatedHeader text="Contact Us"/>
      {/* parent div */}
      <div className="flex w-full  justify-between gap-3">

            {/* map section */}

      <div className=" w-1/2 h-[80vh] bg-blue-300 rounded-2xl p-10 flex flex-col items-start justify-between  ">
        <div className='text-white'>
        <p className='text-3xl font-bold' >Contact-Us</p>
        <p className='font-semibold text-sm pt-4 '>Let's Build a convesation -Contact Us Today.</p>
        </div>
        {/* email and monileno */}
        <div className="  flex items-center  justify-between w-full">
          <div className="flex item-center justify-center gap-2 ">   
                     <Image
                          width={25}
                          height={25}
                          src={mailicon}
                          alt={"mail"}
                          className="w-full h-full  rounded-lg  object-contain"
                        />       
                        <p>po.policysansar.com
                        </p>
          </div>
          <div className="flex item-center justify-center gap-2">   
                     <Image
                          width={25}
                          height={25}
                          src={callicon}
                          alt={"mail"}
                          className="w-full h-full  rounded-lg  object-contain"
                        />       
                        <p>+91_9922949596</p>
          </div>
        </div>
        {/* map location of thane */}
        <div className='  w-full h-4/6'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8225589217414!2d72.97050121490196!3d19.08693748708432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90f0eeb62eb%3A0xc2d676bcb110db4d!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1632846857241!5m2!1sen!2sin'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              className='w-full h-full rounded-2xl'
            ></iframe>
          </div>
      </div>
      {/* form section */}
      <div className='bg-white w-1/2 h-[80vh] p-8 flex flex-col items-start justify-center gap-12 rounded-2xl border border-x border-slate-500'>
           <p className='text-2xl font-bold  mb-4'>Get in Touch</p>
           <form className='flex flex-col  gap-4 w-full'>
             <input type='text' placeholder='Your Name' className='p-3 rounded-2xl border border-x border-slate-500  outline-none' required />
             <input type='email' placeholder='Your Email' className='p-3 rounded-2xl border border-x border-slate-500  outline-none' required />
             <input type='number' placeholder='Your Mobile No' className='p-3 rounded-2xl border border-x border-slate-500  outline-none' required />

             <textarea placeholder='Your Message' className='p-3 rounded-2xl border border-x border-slate-500  outline-none' rows='5' required></textarea>
             <button type='submit' className=' bg-blue-500   font-bold p-3 rounded-2xl border-x-2 border-y-2 border-blue-500 hover:border-x-2 hover:border-y-2 hover:border-blue-500 hover:text-black transition-all ease-in-out duration-700  cursor-pointer'>Send Message</button>
           </form>
         </div>
      </div>
    </div>
  )
}

export default Contact;
