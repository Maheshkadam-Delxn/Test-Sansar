"use client";
import React from "react";
import Image from "next/image";
import Promote from "../../../public/insurance/promote.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Unique = () => {
  // Separate useInView hooks for each section
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  
  const { ref: card4Ref, inView: card4InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  
  const { ref: card5Ref, inView: card5InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="w-full h-auto flex flex-col items-center gap-14">
      <div className="w-full bg-white flex flex-col lg:flex-row items-center justify-between p-5 gap-10">
        <div className="flex flex-col items-start gap-14 w-full lg:w-2/4">
          {/* Title and Divider */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: titleInView ? 1 : 0, x: titleInView ? 0 : -100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-3"
          >
            <h1 className="text-3xl lg:text-4xl font-extrabold">What makes us Different?</h1>
            <hr className="w-96 h-0.5 bg-slate-200" />
          </motion.div>

          {/* Cards Section */}
          <div className="flex flex-col items-start gap-4 w-full p-5">
            {/* Card 1 */}
            <motion.div
              ref={card1Ref}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: card1InView ? 1 : 0, x: card1InView ? 0 : -100 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full lg:w-96 desktop3xl:w-1/2 h-32 desktop3xl:h-44 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center tablet:justify-start phone:justify-start hover:bg-[#000f23] transition-all ease-in-out duration-700 hover:text-white p-3 phone:h-36"
            >
              <div className="flex items-start justify-start gap-6 p-3  ">
              <div className="bg-[#0040FF] w-10 h-10 p-4 rounded-full flex items-center justify-center text-white font-bold phone:p-4">1</div>
                <div className="flex flex-col items-start gap-3 w-full">
                  <h1 className="text-lg font-bold">Real-Solutions</h1>
                  <p className="text-sm font-medium">Seamless support and claim assistance.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <div className="w-full flex items-end justify-end  ">
            <motion.div
              ref={card2Ref}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: card2InView ? 1 : 0, x: card2InView ? 0 : 100 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full lg:w-96 h-32 desktop3xl:w-1/2 desktop3xl:h-44 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center phone:justify-start tablet:justify-start hover:bg-[#000f23] transition-all ease-in-out duration-700 hover:text-white p-3 phone:h-36"
            >
              <div className="flex items-start justify-start gap-6 p-3 ">
              <div className="bg-[#0040FF] w-10 h-10 rounded-full p-4 flex items-center justify-center text-white font-bold phone:p-4">2</div>
                <div className="flex flex-col items-start gap-3">
                  <h1 className="text-lg font-bold">Diverse Insurance Products</h1>
                  <p className="text-sm font-medium">Comprehensive coverage options .</p>
                </div>
              </div>
            </motion.div>
            </div>

            {/* Card 3 */}
            <motion.div
              ref={card3Ref}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: card3InView ? 1 : 0, x: card3InView ? 0 : -100 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full lg:w-96 h-32 desktop3xl:w-1/2 desktop3xl:h-44 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center tablet:justify-start phone:justify-start hover:bg-[#000f23] transition-all ease-in-out duration-700 hover:text-white p-3 phone:h-36"
            >
              <div className="flex items-start gap-6 p-3 justify-center ">
              <div className="bg-[#0040FF] w-10 h-10 rounded-full p-4 flex items-center justify-center text-white font-bold phone:p-4">3</div>
                <div className="flex flex-col items-start gap-3">
                  <h1 className="text-lg font-bold">Local Experts</h1>
                  <p className="text-sm font-medium">Knowledgeable team providing  care.  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
          <div className="flex w-full items-end justify-end">
          <motion.div
              ref={card4Ref}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: card4InView ? 1 : 0, x: card4InView ? 0 : 100 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full lg:w-96 h-32 desktop3xl:w-1/2 desktop3xl:h-44 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center tablet:justify-start phone:justify-start hover:bg-[#000f23] transition-all ease-in-out duration-700 hover:text-white p-3 phone:h-36"
            >
              <div className="flex items-start gap-6 p-3 justify-center ">
              <div className="bg-[#0040FF] w-10 h-10 rounded-full p-4 flex items-center justify-center text-white font-bold phone:p-4">4</div>
                <div className="flex flex-col items-start gap-3">
                  <h1 className="text-lg font-bold">Flexible Plans</h1>
                  <p className="text-sm font-medium">Customized plans to meet   needs.</p>
                </div>
              </div>
            </motion.div>
          </div>

            {/* Card 5 */}
            <motion.div
              ref={card5Ref}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: card5InView ? 1 : 0, x: card5InView ? 0 : -100 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full lg:w-96 h-32 desktop3xl:w-1/2 desktop3xl:h-44 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center tablet:justify-start phone:justify-start hover:bg-[#000f23] transition-all ease-in-out duration-700 hover:text-white p-3 phone:h-36"
            >
              <div className="flex items-start gap-6 p-3 justify-center ">
              <div className="bg-[#0040FF] w-10 h-10 rounded-full p-4 flex items-center justify-center text-white font-bold phone:p-4">5</div>
                <div className="flex flex-col items-start gap-3">
                  <h1 className="text-lg font-bold">24/7 Customer Support</h1>
                  <p className="text-sm font-medium">Round-the-clock support for  issues.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Section with Slide In Animation */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : 100 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-3/5 h-96 lg:h-3/4"
        >
          <Image
            src={Promote}
            width={7680}
            height={4320}
            alt="promote Image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Unique;
