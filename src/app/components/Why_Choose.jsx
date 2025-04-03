"use client";
import React from "react";
import bgShape from "../../../public/icons/bgImages/benefitBgImg.png";
import callIcon from "../../../public/icons/Flaticons/callIcon.png";
import quickQuoteIcon from "../../../public/icons/Flaticons/quickQuote.png";
import sheildIcon from "../../../public/icons/Flaticons/shield.png";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Why_Choose = () => {
  return (
    <div className="w-full min-h-[600px]  bg-white relative flex flex-col items-center justify-evenly xl:justify-center xl:gap-5   overflow-hidden">
      {/* Content Section */}
      <div className="p-8">
        <h1 className="lg:text-3xl font-medium text-center phone:text-xl">
          Benefits of <span className="text-blue-700">Policy Sansar</span>
        </h1>
      </div>

      {/* Cards Section */}
      <div className="w-full lg:flex-row items-center gap-5 justify-center z-10 phone:flex phone:flex-wrap  md:flex phone:p-5 xs:flex phone:gap-4 ">
        <div className="bg-white lg:w-1/4 shadow-2xl h-80 phone:h-80  rounded-2xl border border-slate-200 flex flex-col items-center justify-evenly p-5 phone:w-3/4 xs:w-2/3 md:w-2/3">
          <Image src={callIcon} width={90} height={90} alt="callIcon" />
          <div className="flex flex-col items-center gap-2">
            <h1 className="lg:text-2xl xs:text-xl  ">24/7 Assistance</h1>
            <p className="lg:text-md  text-center text-slate-500">
              We&apos;re always here for you. Whether it&apos;s a query or support
              with claims, our team is just a call or message away, anytime.
            </p>
          </div>
        </div>

        <div className="bg-white lg:w-1/4 shadow-2xl h-80 phone:h-80  rounded-2xl border border-slate-200 flex flex-col items-center justify-evenly p-5 phone:w-3/4 xs:w-2/3 md:w-2/3">
          <Image src={sheildIcon} width={90} height={90} alt="sheildIcon" />
          <div className="flex flex-col items-center gap-2">
            <h1 className="lg:text-2xl xs:text-xl text-center">Quick Quotations</h1>
            <p className="text-md text-center text-slate-500">
              Discover the best insurance plans for you. Compare premiums and
              get accurate quotations in just a few clicks.
            </p>
          </div>
        </div>

        <div className="bg-white lg:w-1/4 shadow-2xl h-80 phone:h-80  rounded-2xl border border-slate-200 flex flex-col items-center justify-evenly p-5 phone:w-3/4 xs:w-2/3 md:w-2/3">
          <Image 
            src={quickQuoteIcon}
            width={90}
            height={90}
            alt="quickQuoteIcon"
          />
          <div className="flex flex-col items-center gap-2">
            <h1 className="lg:text-2xl xs:text-xl text-center">
              Instant Policy Approval
            </h1>
            <p className="text-md text-center text-slate-500">
              Why wait? Get your insurance policy approved in just 5 minutes.
              Quick, easy, and hassle-free.
            </p>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute -bottom-10 left-0 w-full h-full bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${bgShape.src})` }}
      ></div>
    </div>
  );
};

export default Why_Choose;
