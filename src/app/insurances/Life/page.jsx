"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import bgImage from "../../../../public/images/happyFamily.jpg"

import MatureIcon from "../../../../public/icons/mature.png"
import WealthIcon from "../../../../public/icons/wealth-acc.png"
import IncomeReplaceIcon from "../../../../public/icons/replace.png"
import DeathBenefitIcon from "../../../../public/icons/deathBenefit.png"

import {toast,Toaster} from "react-hot-toast"
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
const GeneralInsurance = () => {
  const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        insuranceType: "Life",
      });
  const [showModal, setShowModal] = useState(true); // Initially show the modal
  const [annualIncome, setAnnualIncome] = useState(""); // Track the selected annual income
  const [insuranceType, setInsuranceType] = useState(""); // Track the selected insurance type
  const [firstName, setFirstName] = useState(""); // Track the first name input
  const [lastName, setLastName] = useState(""); // Track the last name input
  const [mobileNumber, setMobileNumber] = useState(""); // Track the mobile number input
  const [loading, setLoading] = useState(false);
 
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   };
 
   const validateForm = () => {
     const { fname, lname, email, mobile } = formData;
     const emailRegex = /^[^\s@]+@gmail\.com$/;
     const mobileRegex = /^[0-9]{10}$/;
 
     if (!fname.trim() || !lname.trim()) {
       toast.error("First and Last name are required.");
       return false;
     }
     if (!mobileRegex.test(mobile)) {
      toast.error("Mobile number must be 10 digits.");
      return false;
    }
     if (!emailRegex.test(email)) {
       toast.error("Invalid email format.");
       return false;
     }
    
     return true;
   };
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     if (!validateForm()) return;
 
     setLoading(true);
     try {
       const response = await fetch("/api/form-data", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
       });
 
       const data = await response.json();
       if (data.success) {
        setShowModal(false)
         toast.success("We will get back to you soon! 😊");
         setFormData({
           fname: "",
           lname: "",
           email: "",
           mobile: "",
           insuranceType: "Enquiry",
         });
       } else {
         toast.error("Something went wrong!");
       }
     } catch (error) {
       toast.error("An error occurred. Please try again.");
     } finally {
       setLoading(false);
     }
   };
  const handleCloseModal = ()=>{
    setShowModal(false)
  }


  // Check if all fields are filled and valid
  const isFormValid = () => {
    return (
      firstName &&
      lastName &&
      mobileNumber &&
      
      mobileNumber.match(/^[0-9]{10}$/) // Ensure mobile number is 10 digits
    );
  };
  const handleEnquireClick=()=>{
    setShowModal(true);
  }
  return (
    <div className="w-full h-auto p-10 phone:p-2">
      <Toaster/>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 "
          
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }} // Start above the screen
            animate={{ opacity: 1, y: 0 }} // Animate to its final position
            exit={{  y: 100,opacity:0 }} // Exit animation
            transition={{ duration: 0.5 }} // Duration of the animation
          className="bg-white lg:p-10 rounded-lg shadow-lg flex flex-col items-start gap-6 w-full max-w-4xl phone:p-4 phone:w-5/6 tablet:w-3/4 tablet:p-10 ">
           <div className="w-full flex items-center justify-between">
                      <h1 className="text-xl font-semibold">React out for <span className="text-blue-700">Life Insurance</span> !</h1>
                      <button className="text-red-500 text-xl" onClick={handleCloseModal}><RxCross1 /></button>
                      </div>
                      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex items-center justify-between w-full gap-4">
                <input
                  
                  value={formData.fname}
                  name="fname"
                  onChange={handleChange}
                  className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs tablet:p-3"
                  placeholder="First Name"
                />
                <input
                  value={formData.lname}
                  name="lname"
                  onChange={handleChange}
                  className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs tablet:p-3"
                  placeholder="Last Name"
                />
              </div>

              <input
                type="tel"
                pattern="^[0-9]{10}$"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs tablet:p-3"
                placeholder="Mobile Number"
              />
                <input
               name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs tablet:p-3"
                placeholder="Email address"
              />

              <input
                onClick={handleSubmit}
                type="submit"
                value="Continue"
                className={`lg:p-4 phone:p-3 rounded-lg text-white tablet:p-3 cursor-pointer bg-blue-700`}
              />
            </form>
          </motion.div>
        </div>
      )}
      <div>
      <div className="bg-white w-full  laptop:h-[220vh]  md2:h-[150vh]  desktop2xl:h-[100vh]  phone:min-h-[100vh] xs:h-[133vh]  rounded-2xl phone:flex-col lg:flex-row  flex shadow-lg border border-slate-300 ">
          {/* Red container with background image */}
          <div
  className="lg:w-1/2 laptop:h-full bg-black tablet:w-1/2 tablet:rounded-tl-2xl tablet:rounded-bl-2xl tablet:p-6 lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none text-white lg:pt-24 lg:pl-10 lg:flex lg:flex-col phone:rounded-tl-2xl lg:items-start gap-2 bg-opacity-10 backdrop-blur-2xl phone:w-full phone:rounded-bl-none phone:rounded-tr-2xl phone:p-10"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <h1 className="lg:text-4xl phone:text-xl tablet:text-xl">
    <span className="lg:text-5xl font-bold phone:text-2xl tablet:text-3xl">L</span>ife Insurance
  </h1>
  <p className="w-2/3 phone:w-full phone:text-sm lg:text-xl tablet:w-full">
  Life insurance provides financial protection against medical expenses, including hospitalization, surgeries, and treatments for illnesses or injuries. It ensures that individuals and families can access necessary healthcare services without significant financial strain, offering coverage for a range of medical needs and emergencies.
</p>
</div>

          <div className="lg:w-1/2  tablet:w-1/2 flex flex-col  lg:justify-between phone:justify-end  phone:w-full ">
           <div className="flex flex-col items-start">
           <div className="flex flex-col gap-5 p-6">
          <div className="flex flex-col items-start gap-3">
            <h1 className="lg:text-2xl font-bold phone:text-sm tablet:text-lg">Why <span className="text-blue-700">Life</span> Insurance?</h1>
            <hr className="w-64"/>
            
            </div>
           <h1 className="lg:text-xl phone:text-sm">
           At Policy Sansar, we understand the importance of securing your family’s future. Our life insurance plans offer flexible coverage options.
</h1></div>
          <div className="flex flex-col gap-5 lg:p-8 w-full phone:p-4 tablet:p-4">
          <div className="flex flex-col items-start gap-3 ">
            <h1 className="lg:text-2xl font-bold phone:text-sm tablet:text-lg">Top Features of <span className="text-blue-700">Life</span> Insurance</h1>
            <hr className="w-64"/>
            
            </div>
            <div className="w-full flex flex-wrap items-center justify-center  gap-3 ">
              <div className="laptop:w-56 xl:w-64 desktop2xl:w-72 tablet:w-44 tablet:h-64 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 phone:w-40 phone:h-52 phone:shadow-md phone:border phone:border-slate-100">
                  <Image
                    src={MatureIcon}
                    width={480}
                    height={480}
                    alt="Maturity Benefit Icon"
                    className="phone:w-12 phone:h-12 lg:w-20 lg:h-20 tablet:w-16 tablet:h-16"
                  />
                  <h1 className="lg:text-2xl text-center phone:text-sm tablet:text-lg">Maturity Benefit</h1>
                  <p className="lg:text-sm text-center text-slate-500 phone:text-xs">Some plans (like endowment or whole life insurance) offer payouts at the end of the policy term if the policyholder survives.

</p>
              </div>
              <div className="laptop:w-56 xl:w-64 desktop2xl:w-72 tablet:w-44 tablet:h-64 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56  phone:w-40 phone:h-52  phone:shadow-md phone:border phone:border-slate-100">
                  <Image
                    src={WealthIcon}
                    width={480}
                    height={480}
                    alt="Wealth Icon"
                    className="phone:w-12 phone:h-12 lg:w-20 lg:h-20 tablet:w-16 tablet:h-16"
                  />
                  <h1 className="lg:text-2xl text-center phone:text-sm tablet:text-lg">Wealth Accumulation
                  </h1>
                  <p className="text-center lg:text-sm text-slate-500 phone:text-xs">Combines protection with investment, allowing policyholders to build wealth over time.

</p>
              </div>
              <div className="laptop:w-56 xl:w-64 desktop2xl:w-72 tablet:w-44 tablet:h-64 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 phone:w-40 phone:h-52  phone:shadow-md phone:border phone:border-slate-100">
                  <Image
                    src={IncomeReplaceIcon}
                    width={480}
                    height={480}
                    alt="Income Replace Icon"
                    className="phone:w-12 phone:h-12 lg:w-20 lg:h-20 tablet:w-16 tablet:h-16"
                  />
                  <h1 className="lg:text-2xl text-center phone:text-sm tablet:text-lg">Income Replacement
                  </h1>
                  <p className="text-center lg:text-sm text-slate-500 phone:text-xs">Provides a regular income stream to beneficiaries after the policyholder's death.

</p>
              </div>
              <div className="laptop:w-56 xl:w-64 desktop2xl:w-72 tablet:w-44 tablet:h-64 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 phone:w-40 phone:h-52  phone:shadow-md phone:border phone:border-slate-100">
                  <Image
                    src={DeathBenefitIcon}
                    width={480}
                    height={480}
                    alt="Death Benefit Icon"
                    className="phone:w-12 phone:h-12 lg:w-20 lg:h-20 tablet:w-16 tablet:h-16"
                  />
                  <h1 className="lg:text-2xl text-center phone:text-sm tablet:text-lg">Death Benefit
                  </h1>
                  <p className="text-center lg:text-sm text-slate-500 phone:text-xs">Provides a lump-sum payment to the beneficiary upon the policyholder’s death.

.</p>
              </div>
            </div>
          </div>
           </div>
        <div className="p-3 w-full">
        <button onClick={handleEnquireClick} className="text-blue-700 w-full p-3 rounded-lg border-x-2 border-y-2 border-blue-700 phone:p-2 ">Enquire Now</button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInsurance;
