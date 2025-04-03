"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import generalInsuranceIcon from "../../../public/icons/Flaticons/genreralInsurance.png";
import lifeInsuranceIcon from "../../../public/icons/Flaticons/lifeInsurance.png";
import healthInsuranceIcon from "../../../public/icons/Flaticons/healthInsurance.png";
import groupInsuranceIcon from "../../../public/icons/Flaticons/groupInsurance.png";
import financialInsuranceIcon from "../../../public/icons/Flaticons/financialInsurance.png";
import wealthInsuranceIcon from "../../../public/icons/Flaticons/wealthInsurance.png";
import puzzleIcon from "../../../public/icons/Flaticons/puzzle.png";
import goalIcon from "../../../public/icons/Flaticons/goal.png";
import starIcon from "../../../public/icons/Flaticons/star.png";
import { GrNext } from "react-icons/gr";
import { MdArrowBackIosNew } from "react-icons/md";
import Banner1 from "../../../public/images/banner/banner4.png";
import Banner2 from "../../../public/images/banner/banner2.png";
import Banner3 from "../../../public/images/banner/banner3.png";
import Banner4 from "../../../public/images/banner/banner1.png";
import handShakeIcon from "../../../public/icons/handshake.png";
import coupleIcon from "../../../public/images/couple.png";
import Banner1BG from "../../../public/images/banner/banner1/banner1BG.png"
import Banner1Family from "../../../public/images/banner/banner1/family1.png"
import Banner1Man from "../../../public/images/banner/banner1/man.png"
import BestPriceIcon from "../../../public/images/banner/banner1/bestPrice.png"
import InstantIcon from "../../../public/images/banner/banner1/Instant.png"
import TrustIcon from "../../../public/images/banner/banner1/Trust.png"
import Link from "next/link";
import Family from "../../../public/illustrations/family6.png"

const Homee = () => {
  const banners = [Banner1, Banner2, Banner3, Banner4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-move the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [banners.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };
  function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="w-full phone:h-[92vh] tablet:min-h-[96vh]  tablet:p-2 laptop:min-h-[125vh] desktopxl:min-h-[100vh] desktop2xl:h-[100vh]  desktopxl:p-2  flex flex-col items-center justify-evenly phone:justify-start   gap-2  laptop:p-3  phone:p-2   ">
      {/* Moving Advertisement */}
      <div
  className="relative laptop:w-5/6 desktop3xl:w-5/6 laptop:h-40 tablet:h-40 tablet:w-5/6 desktopxl:h-40 desktop3xl:h-40 desktop2xl:h-56  desktop2xl:w-5/6 desktopxl:w-5/6 phone:h-1/4 rounded-2xl overflow-hidden phone:w-full bg-cover bg-center"
  style={{ backgroundImage: `url(${Banner1BG.src})` }}
>

  <Image
    src={Banner1Family}
    width={1920}
    height={1080}
    className="absolute w-44 h-44 top-0 left-3  object-contain phone:hidden tablet:w-32 tablet:h-32 tablet:bottom-0 tablet:top-auto desktop2xl:w-64 desktop2xl:h-64"
  />
   <Image
    src={Banner1Man}
    width={1920}
    height={1080}
    className="absolute w-44 h-44 top-0 right-3  object-contain phone:w-36 phone:h-36 phone:top-auto phone:bottom-0 phone:right-0 tablet:right-0 desktop2xl:bottom-0 desktop2xl:top-auto desktop2xl:w-56 desktop2xl:h-56"
  />
 
 <h1 className="text-white text-2xl font-extrabold absolute top-3 left-56 phone:text-sm phone:left-2 phone:top-5 tablet:text-lg desktop2xl:text-3xl desktop2xl:top-10 desktop2xl:left-72   tablet:left-40">Save Big on Insurance! Compare Plans<br/> &  
 Get the Best Deal!</h1>
  
  <div className="flex items-center gap-6 absolute bottom-2 right-52 phone:right-auto phone:left-5 phone:bottom-3 tablet:left-48 desktop2xl:right-60 ">
    <div className="flex flex-col items-center gap-1 phone:hidden">
      <Image src={BestPriceIcon} width={1920} height={1080} className="w-12 h-12 phone:w-6 phone:h-6 tablet:w-8 tablet:h-8 desktop2xl:w-24 desktop2xl:h-24"/>
      <h1 className="text-sm font-bold phone:text-xs tablet:text-xs desktop2xl:text-2xl">Best Prices</h1>
    </div>
    <div className="flex flex-col items-center gap-1 phone:hidden">
    <Image src={InstantIcon} width={1920} height={1080} className="w-12 h-12 phone:w-6 phone:h-6 tablet:w-8 tablet:h-8 desktop2xl:w-24 desktop2xl:h-24"/>
      <h1 className="text-sm font-bold phone:text-xs tablet:text-xs desktop2xl:text-2xl">Instant Quotes</h1>
    </div>
    <div className="flex flex-col items-center gap-1 phone:hidden">
    <Image src={TrustIcon} width={1920} height={1080} className="w-12 h-12 phone:w-6 phone:h-6 tablet:w-8 tablet:h-8 desktop2xl:w-24 desktop2xl:h-24"/>
      <h1 className="text-sm font-bold phone:text-xs tablet:text-xs desktop2xl:text-2xl">Trusted Insurer</h1>
    </div>
    <button className="bg-[#5383FE] p-3 text-white font-bold rounded-lg  phone:text-sm phone:p-2 tablet:p-2 tablet:text-xs desktop2xl:text-2xl ">Get Quotes Now</button>
  </div>
 
</div>

      
<div className="w-5/6   bg-white flex flex-col justify-evenly   desktop2xl:h-4/5  tablet:h-3/4  phone:justify-evenly phone:h-2/3   phone:w-full rounded-2xl shadow-lg border border-slate-200  p-5 laptop:h-3/4  xxs:h-full xs:h-full  xxs:justify-center xs:justify-start xs:gap-10 xxs:w-full  lg:w-5/6 xs:w-full  ">
<div className="flex flex-col items-center  gap-1 ">
          <h1 className="text-blue-600 font-bold lg:text-5xl xxs:text-2xl xxs:text-center xs:text-3xl desktop2xl:text-7xl phone:text-2xl">
            The Insurance Partner
          </h1>
          <div className="flex items-center gap-2 font-semibold lg:text-lg xxs:text-sm  desktop2xl:text-2xl">
            <p>You can</p>
            <Image
              src={handShakeIcon}
              width={60}
              height={60}
              alt="handshakeIcon xxs:w-12 xxs:h-12"
            />
            <p>Rely On</p>
          </div>
          <p className="font-semibold text-xs text-slate-500 text-center desktop2xl:text-xl">
            Your One-Stop Insurance Shop for Life's Essentials
          </p>
        </div>
        <div className="w-full flex items-center justify-center   laptop:h-2/3  desktopxl:h-2/3    h-full phone:h-1/2 ">
        <div className="w-1/3 h-full  laptop:h-full tablet:hidden  phone:hidden lg:block xs:hidden desktopxl:h-full ">
            <Image
              src={Family}
              width={1920}
              height={1080}
              alt="couple"
              className="w-full h-full object-contain "
            />
          </div>
          <div className="w-1/2 h-96 desktop2xl:h-full desktopxl:h-full tablet:w-full tablet:h-full  laptop:h-full    phone:h-56   xxs:h-64 xs:h-96 phone:w-full lg:w-1/2 xs:w-full flex flex-col items-center  ">

            <div className="w-full  rounded-2xl h-full flex items-center flex-wrap  tablet:gap-10 tablet:justify-center  ">
              {[
                { icon: generalInsuranceIcon, title: "General" },
                { icon: healthInsuranceIcon, title: "Health" },
                { icon: lifeInsuranceIcon, title: "Life" },
                { icon: groupInsuranceIcon, title: "group" },
                { icon: financialInsuranceIcon, title: "financial" },
                { icon: wealthInsuranceIcon, title: "wealth" },
              ].map(({ icon, title }, idx) => (
                <Link
                  href={`/insurances/${title}`}
                  key={idx}
                  className="flex flex-col laptop:w-1/3 desktopxl:w-1/3 phone:w-1/3 tablet:w-1/3 items-center gap-2  hover:bg-blue-50 hover:scale-90 transition-all ease-in-out duration-500 cursor-pointer p-3 rounded-2xl desktop2xl:p-10"
                >
                   <Image
                    src={icon}
                    width={1920}
                    height={1080}
                    alt={`${title} Insurance`}
                    className="lg:w-10 lg:h-10 phone:w-7 phone:h-7 xs:w-9 xs:h-9   desktop2xl:w-28 desktop2xl:h-28 tablet:w-8 tablet:h-8"
                  />
                  <div className="flex flex-col items-center">
                    <h1 className="lg:text-lg xxs:text-xs xs:text-sm desktopxl:text-xl desktop2xl:text-3xl">{capitalizeFirstLetter(title)}</h1>
                    <p className="text-xs text-slate-500  desktop2xl:text-xl">Insurance</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full flex items-center justify-center lg:gap-10 phone:gap-3 lg:flex  phone:hidden  tablet:gap-10   ">
        {[{ icon: puzzleIcon, value: "100+", label: "Diverse Variety" },
          { icon: goalIcon, value: "100%", label: "Achievement Rate" },
          { icon: starIcon, value: "4.9", label: "Customer Rating" }
        ].map(({ icon, value, label }, idx) => (
          <div key={idx} className="flex items-center gap-3  border border-slate-300 flex-grow h-16 rounded-lg p-3 desktopxl:w-1/3 laptop:w-1/3 phone:flex-col  phone:items-center lg:flex-row">
            <Image src={icon} width={25} height={25} alt={label} className="xxs:w-5 desktop2xl:w-14" />
            <div className="flex flex-col items-start phone:items-center ">
              <h1 className="text-sm font-bold xxs:text-sm xs:text-xs sm:text-sm">{value}</h1>
              <p className="text-xs font-normal xxs:text-xs xs:text-xs sm:text-xs phone:text-center desktopxl:text-xs">{label}</p>
            </div>
          </div>
        ))}
      </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Homee;
