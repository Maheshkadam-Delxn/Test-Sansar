"use client";
import React, { useRef, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import man from "../../../public/icons/Flaticons/man.png"
import women from "../../../public/icons/Flaticons/woman.png"
import Image from "next/image";


const testimonials = [
  { icon:man, date:"18 Aug 2024" , name: "Rahul Jori", text: "Policy Sansar made my insurance buying experience so smooth! I found the perfect term plan in just minutes and got it approved on the same day." },
  { icon:women,date:"11 Mar 2024", name: "Neha Verma", text: "I was confused about choosing the right health insurance, but their expert advice and transparent comparison helped me make an informed decision. Great service!" },
  { icon:man,date:"13 Jul 2024" , name: "Amit Gupta", text: "Amazing platform! I renewed my car insurance in just a few clicks. Their seamless interface and great customer support are worth praising." },
  { icon:women, date:"9 Feb 2024" , name: "Priya Singh", text: "Thanks to Policy Sansar, I finally understood the benefits of term plans and picked the right one for my family. Highly trustworthy platform!" },
  { icon:women,date:"25 Mar 2024" , name: " Nishi Jadhav", text: "They helped me compare multiple health insurance policies side by side, making my decision quick and easy. Great experience!" },
  { icon:women,date:"27 May 2024" , name: "Ananya Roy", text: "Buying travel insurance was never this easy. Thanks to Policy Sansar for their hassle-free process and great recommendations." },
  { icon:man,date:"3 Jan 2024" , name: "Ravi Kumar", text: "Their customer service is top-notch. I had questions about life insurance, and their team provided all the answers I needed. Great job!" },
  { icon:women,date:"5 Oct 2024" , name: "Sneha Shitole", text: "The platform is very user-friendly, and I loved how transparent they are about policy details. Highly recommend Policy Sansar!" },
  { icon:man,date:"24 Nov 2024" , name: "Aditya Patel", text: "I saved a lot of time and effort by buying my home insurance through Policy Sansar. Their team is very professional and helpful." },
];

const Customers = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const animateTestimonials = async () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = containerRef.current.scrollWidth;

        if (contentWidth > containerWidth) { // Only animate if content overflows
          await controls.start({
            x: [0, -(contentWidth - containerWidth)], 
            transition: { duration: 60, ease: "linear", repeat: Infinity }
          });
                  }
      }
    };

    animateTestimonials();
  }, []);
  
  return (
    <div className="w-full  bg-[#E6ECFF] h-[500px]   flex flex-col items-center justify-start gap-4 "> {/* overflow-hidden hides scrollbar */}
      <h2 className="text-2xl font-bold text-center text-black mt-12   ">Customer's Say !!</h2>
      <div className="relative w-full " ref={containerRef}> {/* Added relative positioning */}
        <motion.div
          className="inline-flex gap-6 px-6 absolute left-0 top-0" // Absolute positioning for animation
          style={{ width: "fit-content" }} // Important: Set width to fit content
          animate={controls}
        >
          {testimonials.map((testimonial, index) => 
          (
            
          <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md w-96 shrink-0"
              style={{ minWidth: "24rem" }} // set min width so it doesn't shrink on smaller screens
            >
              <MessageSquare className="text-blue-500 mb-4 h-8 w-8" />
              <p className="text-base mb-4">{testimonial.text}</p>
              
              <div className="flex flex-col justify-between bgorange-900 items-center">
                <div className="">
                <Image src={testimonial.icon} alt={testimonial.name} width={50} height={50} className="w-16 h-16 rounded-full  mx-auto" />
                </div>
                <div className="">
                <span className="font-semibold text-sm">{` ${testimonial.name}`}</span>

                </div>
              </div>
          </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Customers;