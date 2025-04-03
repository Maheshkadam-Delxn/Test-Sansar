"use client";
import React from "react";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { MdPeopleOutline } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Importing useInView
import { TiStarOutline } from "react-icons/ti";
import { motion } from "framer-motion";

const Features = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <div className="w-full bg-[#000f23] py-16 px-6 flex flex-col items-center justify-center gap-10">
      <h1 className="text-white text-3xl font-bold phone:text-lg xs:text-lg sm:text-lg">Our Achievements</h1>
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4">
        {/* Card 1 */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : -50 }}
          transition={{ duration: 1 }}
          className="w-full sm:w-1/4 flex items-center justify-center p-6  rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-center gap-3 text-white">
            <HiOutlineClipboardDocumentCheck className="text-5xl font-bold phone:text-2xl xs:text-2xl sm:text-2xl" />
            <h1 className="text-4xl font-extrabold phone:text-2xl xs:text-2xl sm:text-2xl">
              {inView1 && <CountUp start={0} end={100} duration={2.5} suffix="+" />}
            </h1>
            <h1 className="font-bold phone:text-sm xs:text-sm sm:text-sm text-center">Diverse Insurance Plans</h1>
          </div>
        </motion.div>

       
        {/* Card 2 */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : -50 }}
          transition={{ duration: 1 }}
          className="w-full sm:w-1/4 flex items-center justify-center p-6  rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-center gap-3 text-white">
            <MdPeopleOutline className="text-5xl font-bold phone:text-2xl xs:text-2xl sm:text-2xl" />
            <h1 className="text-4xl font-extrabold phone:text-2xl xs:text-2xl sm:text-2xl">
              {inView2 && <CountUp start={0} end={100000} duration={2.5} separator="," suffix="+" />}
            </h1>
            <h1 className="font-bold phone:text-sm xs:text-sm sm:text-sm text-center">Happy Customers</h1>
          </div>
        </motion.div>

        
      

        {/* Card 3 */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : -50 }}
          transition={{ duration: 1 }}
          className="w-full sm:w-1/4 flex items-center justify-center p-6  rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-center gap-3 text-white">
            <SlGraph className="text-5xl font-bold phone:text-2xl xs:text-2xl sm:text-2xl" />
            <h1 className="text-4xl font-extrabold phone:text-2xl xs:text-2xl sm:text-2xl">
              {inView3 && <CountUp start={0} end={100} duration={2.5} suffix="%" />}
            </h1>
            <h1 className="font-bold phone:text-sm xs:text-sm sm:text-sm text-center">Achievement Percentage</h1>
          </div>
        </motion.div>

       

        {/* Card 4 (Optional) */}
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : -50 }}
          transition={{ duration: 1 }}
          className="w-full sm:w-1/4 flex items-center justify-center p-6  rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-center gap-3 text-white">
            <TiStarOutline className="text-5xl font-bold phone:text-2xl xs:text-2xl sm:text-2xl" />
            <h1 className="text-4xl font-extrabold phone:text-2xl xs:text-2xl sm:text-2xl">
              {inView4 && <CountUp start={0} end={4.9} duration={2.5} decimals={1} />}
            </h1>
            <h1 className="font-bold phone:text-sm xs:text-sm sm:text-sm text-center">Customer Ratings</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
