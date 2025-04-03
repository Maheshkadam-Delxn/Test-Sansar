"use client";
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../public/insurance/logo.png";
import Link1 from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import generalInsuranceIcon from "../../../public/icons/Flaticons/genreralInsurance.png";
import lifeInsuranceIcon from "../../../public/icons/Flaticons/lifeInsurance.png";
import healthInsuranceIcon from "../../../public/icons/Flaticons/healthInsurance.png";
import groupInsuranceIcon from "../../../public/icons/Flaticons/groupInsurance.png";
import financialInsuranceIcon from "../../../public/icons/Flaticons/financialInsurance.png";
import wealthInsuranceIcon from "../../../public/icons/Flaticons/wealthInsurance.png";
import policy from "../../../public/tagline/policy.png"
 

import tagLine7 from "../../../public/tagline/final.png"
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const [logoSize, setLogoSize] = useState(120); // Initial logo size in px
  const [showLoginModal,setShowLoginModal] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state for large screens
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // Submenu state for mobile

  const menuRef = useRef(null); // Ref for mobile menu
  const dropdownRef = useRef(null); // Ref for dropdown menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);

  // Close the menu if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) && // Check if the click is outside the mobile menu
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) // Check if the click is outside the dropdown menu
      ) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
        setIsSubmenuOpen(false);
      } else if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Ensures the mobile menu closes if clicked outside
      } else if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false); // Ensures the dropdown menu closes if clicked outside
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        if (scrollPosition > 2) {
          setLogoSize(Math.max(50, 130 - scrollPosition));
        } else {
          setLogoSize(120);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 }, // Slightly offset initially
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: {
        duration: 0.2, // Quick transition
        ease: [0.165, 0.84, 0.44, 1], // Smooth and slightly bouncy easing
      },
    },
  };
  const handleCloseModal = ()=>{
    setShowLoginModal(false)
  }
  const handleMobileBtnClick = ()=>{
    setIsMenuOpen(false)
    setShowLoginModal(true)
  }
  return (
    <div className="w-full sticky top-0 z-20 bg-white lg:h-[13vh] xxs:h-[8vh] ">
        {showLoginModal && (
              <div
                className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 xxs:p-5"
                
              >
                <motion.div
                  initial={{ opacity: 0, y: -100 }} // Start above the screen
                  animate={{ opacity: 1, y: 0 }} // Animate to its final position
                  exit={{  y: 100,opacity:0 }} // Exit animation
                  transition={{ duration: 0.5 }} // Duration of the animation
                className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-start gap-6 w-full max-w-2xl">
                 <div className="w-full flex items-start justify-between">
                            <div className="flex flex-col items-start gap-3">
                            <h1 className="lg:text-2xl font-semibold xxs:text-xl">Login to Policy Sansar</h1>
                            <hr className="w-64"/>
                            </div>
                            <button className="text-red-500 text-xl font-extrabold" onClick={handleCloseModal}><RxCross1 /></button>
                            </div>
                 <form className="w-full flex flex-col gap-4 items-end">
                  <input
                    placeholder="Enter Mobile Number"
                    className="lg:p-5 border border-slate-300 w-full rounded-lg outline-none xxs:p-3"
                  />
                  <input
                    type="submit"
                    value="Login"
                    className="lg:p-5 bg-blue-700 text-white w-1/3 rounded-lg cursor-pointer xxs:p-3"
                  />
                 </form>
                </motion.div>
              </div>
            )}
      <div className="w-full h-full flex items-center justify-between px-4 py-2 lg:py-1 text-lg font-medium shadow-[0_4px_10px_rgba(0,0,0,0.1)] border-b border-gray-200">
        {/* Logo Section */}
        <Link1
          href={"/"}
          className="text-2xl font-bold text-black tracking-wide flex items-center gap-1 lg:w-1/3 xxs:w-3/4"
        >
          <Image
            src={Logo}
            width={1920}
            height={1080}
            alt="Logo"
            className="transition-all laptop:p-1 tablet:p-1 laptop:w-16 desktopxl:w-20 desktopxl:h-20 laptop:h-16 w-24 h-24 phone:w-16 phone:h-16 ease-in-out duration-300 xxs:w-12 lg:w-24 xs:w-12 desktop:w-24 tablet:w-16 tablet:h-16"
          />
          <div className="flex flex-col items-start justify-start  gap-1 w-full  ">
          <Image src={policy} width={1920} height={1080} className="w-1/2 lg:h-8 object-contain xxs:h- 5"/>

          {/* <h1 className="lg:text-2xl text-blue-700 xxs:text-sm xs:text-sm ">Policy Sansar</h1> */}
               {/* <h1 className="text-sm xxs:text-xs text-wrap">आपके संसार की सुरक्षा का भरोसा-पॉलिसी संसार</h1> */}
          <Image src={tagLine7} width={1920} height={1080} className="w-1/2  lg:h-4 object-contain xxs:h-5"/>
          </div>
        </Link1>

        {/* Hamburger or Back Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-black focus:outline-none"
        >
          {isMenuOpen ? (
            <IoIosArrowForward className="text-2xl font-extrabold" />
          ) : (
            <RxHamburgerMenu className="text-2xl font-extrabold" />
          )}
        </button>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-8  items-center">
          <Link1
            href="/"
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 tablet:text-sm"
          >
            Home
          </Link1>
          <div
            className="relative cursor-pointer text-black group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 tablet:text-sm">
              Products
            </span>
            {isDropdownOpen && (
              <motion.div
              ref={dropdownRef}
              className="absolute top-full mt-0 bg-white shadow-lg border rounded-md py-2 w-72"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
            >
                {/* Links with Icons */}
                <Link1
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/General"
                  className="block px-4 py-3 text-black relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 tablet:text-sm"
                >
                  <div className="flex items-center">
                  <Image src={generalInsuranceIcon} width={20} height={20} alt="General Insurance" className="mr-2" />
                  <h1>General Insurance</h1>
                  </div>
                 
                </Link1>
                <Link1
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/Health"
                  className="block px-4 py-3 text-black relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 tablet:text-sm"
                >
                  <div className="flex items-center">
                  <Image src={healthInsuranceIcon} width={20} height={20} alt="Health Insurance" className="mr-2" />
                  Health Insurance
                  </div>
                  
                </Link1>
                <Link1
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/Life"
                  className="block px-4 py-3 text-black relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 tablet:text-sm"
                >
                  <div className="flex items-center ">
                  <Image src={lifeInsuranceIcon} width={20} height={20} alt="Life Insurance" className="mr-2" />
                  Life Insurance
                  </div>
                 
                </Link1>
                <Link1
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/group"
                  className="block px-4 py-3 text-black relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 tablet:text-sm"
                >
                  <div className="flex items-center">
                  <Image src={groupInsuranceIcon} width={20} height={20} alt="Group Insurance" className="mr-2" />
                  Group Insurance
                  </div>
                 
                </Link1>
                <Link1
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/financial"
                  className="block px-4 py-3 text-black relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 tablet:text-sm"
                >
                  <div className="flex items-center">
                  <Image src={financialInsuranceIcon} width={20} height={20} alt="Financial Insurance" className="mr-2" />
                  Financial Insurance
                  </div>
                 
                </Link1>
                <Link1
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/wealth"
                  className="block px-4 py-3 text-black relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 tablet:text-sm"
                >
                  <div className="flex items-center">
                  <Image src={wealthInsuranceIcon} width={20} height={20} alt="Wealth Insurance" className="mr-2" />
                  Wealth Insurance
                  </div>
                  
                </Link1>
                
              </motion.div>
            )}
          </div>
          <Link1
            href="/Distribution"
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 tablet:text-sm"
          >
            Process
          </Link1>
          <Link1
            href="/about-us"
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 tablet:text-sm"
          >
            About Us
          </Link1>
          <Link1
            href="/career"
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 tablet:text-sm"
          >
            Careers
          </Link1>
          <Link1
            href="/contact"
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 tablet:text-sm"
          >
            Contact Us
          </Link1>
          <div className="flex items-center gap-2">
          <Link1
            href="/call"

           className="bg-blue-700 text-white p-3 rounded-lg w-32 tablet:text-sm"> Let's Talk
          </Link1>
          </div>
                    

        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="fixed top-0 right-0 w-2/3 h-full p-5 bg-white shadow-2xl border rounded-bl-3xl border-slate-200 rounded-tl-3xl z-20 flex flex-col items-start justify-between gap-10 px-6 py-4 lg:hidden overflow-scroll"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              
            >
              <div className="w-full flex items-center justify-center">
              <Image
                  src={Logo}
                  width={1920}
                  height={1080}
                  alt="logo"
                  className="tablet:w-36 tablet:h-36 phone:w-36 phone:h-36"
                />
              </div>
             <div className="flex flex-col items-start gap-4 w-full">
             <Link1
              onClick={()=>setIsMenuOpen(!isMenuOpen)}
                href="/"
                className="py-2 text-sm text-black border-b border-gray-200 w-full text-left"
              >
                Home
              </Link1>
              <div className="w-full text-left">
                <button
                  onClick={toggleSubmenu}
                  className="py-2 text-sm text-black border-b border-gray-200 w-full flex justify-between items-center"
                >
                  Products
                  <IoIosArrowForward
                    className={`transition-transform duration-300 ${
                      isSubmenuOpen ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </button>
                {isSubmenuOpen && (
                  <div className="ml-4 mt-2  xxs:ml-1">
                    <Link1
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  href="/insurances/General"
                  className="block px-4 py-3 text-black relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 "
                >
                  <div className="flex items-center">
                  <Image src={generalInsuranceIcon} width={15} height={15} alt="General Insurance" className="mr-2" />
                  <h1 className="text-sm xxs:text-xs xs:text-sm">General Insurance</h1>
                  </div>
                 
                </Link1>
                <Link1
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  href="/insurances/Health"
                  className="block px-4 py-3 text-black relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700 "
                >
                  <div className="flex items-center">
                  <Image src={healthInsuranceIcon} width={15} height={15} alt="Health Insurance" className="mr-2" />
                  <h1 className="text-sm xxs:text-xs xs:text-sm">Health Insurance</h1>
                  </div>
                  
                </Link1>
                <Link1
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/Life"
                  className="block px-4 py-3 text-black relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700"
                >
                  <div className="flex items-center ">
                  <Image src={lifeInsuranceIcon} width={15} height={15} alt="Life Insurance" className="mr-2" />
                  <h1 className="text-sm xxs:text-xs xs:text-sm">Life Insurance</h1>
                  </div>
                 
                </Link1>
                <Link1
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/group"
                  className="block px-4 py-3 text-black relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700"
                >
                  <div className="flex items-center">
                  <Image src={groupInsuranceIcon} width={15} height={15} alt="Group Insurance" className="mr-2" />
                  <h1 className="text-sm xxs:text-xs xs:text-sm">Group Insurance</h1>
                  </div>
                 
                </Link1>
                <Link1
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/financial"
                  className="block px-4 py-3 text-black relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700"
                >
                  <div className="flex items-center">
                  <Image src={financialInsuranceIcon} width={15} height={15} alt="Financial Insurance" className="mr-2" />
                  <h1 className="text-sm xxs:text-xs xs:text-sm">Financial Insurance</h1>
                  </div>
                 
                </Link1>
                <Link1
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  href="/insurances/wealth"
                  className="block px-4 py-3 text-black relative after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-700"
                >
                  <div className="flex items-center">
                  <Image src={wealthInsuranceIcon} width={15} height={15} alt="Wealth Insurance" className="mr-2" />
                  <h1 className="text-sm xxs:text-xs xs:text-sm">Wealth Insurance</h1>
                  </div>
                  
                </Link1>
                  </div>
                )}
              </div>
              <Link1
              onClick={()=>setIsMenuOpen(!isMenuOpen)}
                href="/Distribution"
                className="py-2 text-sm text-black border-b border-gray-200 w-full text-left"
              >
                Process
              </Link1>
              <Link1
              onClick={()=>setIsMenuOpen(!isMenuOpen)}
                href="/about-us"
                className="py-2 text-sm text-black border-b border-gray-200 w-full text-left"
              >
                About Us
              </Link1>
              <Link1
              onClick={()=>setIsMenuOpen(!isMenuOpen)}
                href="/career"
                className="py-2 text-sm text-black border-b border-gray-200 w-full text-left"
              >
                Careers
              </Link1>
              <Link1
              onClick={()=>setIsMenuOpen(!isMenuOpen)}
                href="/contact"
                className="py-2 text-sm text-black border-b border-gray-200 w-full text-left"
              >
                Contact Us
              </Link1>
             
             </div>
             <Link1
            href="/call"

           className="bg-blue-700 text-white p-3 rounded-lg w-32 tablet:text-sm"> Let's Talk
          </Link1>            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;