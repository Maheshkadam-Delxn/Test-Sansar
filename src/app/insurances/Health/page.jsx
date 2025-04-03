"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import bgImage from "../../../../public/images/HealthInsurace.jpg"
import PersonalizedIcon from "../../../../public/icons/personalized.png"
import CashlessIcon from "../../../../public/icons/cashless.png"
import FreeHealthIcon from "../../../../public/icons/freeHealth.png"
import familyFloaterIcon from "../../../../public/icons/familyFloater.png"

import instantPolicyIcon from "../../../../public/icons/Flaticons/instantPolicy.png"
import claimTrackingIcon from "../../../../public/icons/Flaticons/claimTracking.png"
import supportIcon from "../../../../public/icons/Flaticons/247Icon.png"
import securePaymentIcon from "../../../../public/icons/Flaticons/securePayment.png"
import {toast,Toaster} from "react-hot-toast"
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
const GeneralInsurance = () => {
  const [formData, setFormData] = useState({
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      insuranceType: "Health",
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
      <Toaster position="top-center" className="z-50"/>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 "
          
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }} // Start above the screen
            animate={{ opacity: 1, y: 0 }} // Animate to its final position
            exit={{  y: 100,opacity:0 }} // Exit animation
            transition={{ duration: 0.5 }} // Duration of the animation
          className="bg-white lg:p-10 rounded-lg shadow-lg flex flex-col items-start gap-6 w-full max-w-4xl phone:p-4 phone:w-5/6 tablet:w-3/4 tablet:p-10">
           <div className="w-full flex items-center justify-between">
                      <h1 className="text-xl font-semibold">Reach out for <span className="text-blue-700">Health Insurance</span> !</h1>
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
                type="submit"
                value={loading ? "Submitting..." : "Continue"}
                className={`p-4 rounded-lg text-white cursor-pointer bg-blue-700 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              />
            </form>
          </motion.div>
        </div>
      )}
      <div>
      <div className="bg-white w-full  laptop:h-[220vh] md2:h-[150vh] desktop2xl:h-[100vh]  phone:min-h-[100vh] xs:h-[133vh]  rounded-2xl phone:flex-col lg:flex-row  flex shadow-lg border border-slate-300 ">
          {/* Red container with background image */}
          <div
  className="lg:w-1/2 laptop:h-full tablet:w-1/2 bg-black tablet:rounded-tl-2xl rounded-bl-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none text-white tablet:p-6 lg:pt-24 lg:pl-10 lg:flex lg:flex-col phone:rounded-tl-2xl lg:items-start gap-2 bg-opacity-10 backdrop-blur-2xl phone:w-full phone:rounded-bl-none phone:rounded-tr-2xl phone:p-10"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>

  <h1 className="lg:text-4xl phone:text-xl tablet:text-xl">
    <span className="lg:text-5xl font-bold phone:text-2xl tablet:text-3xl">H</span>ealth Insurance
  </h1>
  <p className="w-2/3 phone:w-full phone:text-sm lg:text-xl tablet:text-xl tablet:w-full">
  Health insurance provides financial protection against medical expenses, including hospitalization, surgeries, and treatments for illnesses or injuries. It ensures that individuals and families can access necessary healthcare services without significant financial strain, offering coverage for a range of medical needs and emergencies.
</p>
</div>

          <div className="lg:w-1/2 tablet:w-1/2  flex flex-col  lg:justify-between phone:justify-end  phone:w-full ">
          {/* <div className="flex flex-col gap-5 lg:p-8 phone:p-4">
          <div className="flex flex-col items-start gap-3">
            <h1 className="lg:text-2xl font-semibold  phone:text-sm ">Types of <span className="text-blue-700">Health</span> Insurance</h1>
            <hr className="w-64"/>
            
            </div>
            <div className="w-full flex flex-wrap items-center justify-evenly">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={carIcon}
                  width={50}
                  height={50}
                  alt="carIcon"
                  className="phone:w-8 phone:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold phone:text-sm">Car</h1>
               <p className="text-sm text-slate-500 phone:text-xs">Insurance</p>
               </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={bikeIcon}
                  width={50}
                  height={50}
                  alt="carIcon"
                  className="phone:w-8 phone:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold phone:text-sm">Bike</h1>
               <p className="text-sm text-slate-500 phone:text-xs">Insurance</p>
               </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={homeIcon}
                  width={50}
                  height={50}
                  alt="carIcon"
                  className="phone:w-8 phone:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold phone:text-sm">Home</h1>
               <p className="text-sm text-slate-500 phone:text-xs">Insurance</p>
               </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={travelIcon}
                  width={50}
                  height={50}
                  alt="carIcon"
                  className="phone:w-8 phone:h-8 lg:w-14 lg:h-14"
                />
               <div className="flex flex-col items-center ">
               <h1 className="text-lg font-bold phone:text-sm">Travel</h1>
               <p className="text-sm text-slate-500 phone:text-xs">Insurance</p>
               </div>
              </div>
            </div>
          </div> */}
           <div className="flex flex-col gap-5 p-8 ">
          <div className="flex flex-col items-start gap-3">
            <h1 className="lg:text-2xl font-bold phone:text-sm tablet:text-lg">Why <span className="text-blue-700">Health</span> Insurance?</h1>
            <hr className="w-64"/>
            
            </div>
           <h1 className="lg:text-xl phone:text-sm">At Policy Sansar, we understand the importance of safeguarding your health and well-being. Our health insurance plans offer comprehensive coverage options.</h1>
          </div>
          <div className="flex flex-col gap-5 lg:p-8 w-full phone:p-4 tablet:p-4">
          <div className="flex flex-col items-start gap-3 ">
            <h1 className="lg:text-2xl font-bold phone:text-sm tablet:text-lg ">Top Features of <span className="text-blue-700">Health</span> Insurance</h1>
            <hr className="w-64"/>
            
            </div>
           <div className="w-full flex flex-wrap items-center justify-center  gap-3 ">
                       <div className="laptop:w-56 xl:w-64 tablet:w-44 tablet:h-64 desktop2xl:w-72 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 phone:w-40 phone:h-52  phone:shadow-md phone:border phone:border-slate-100">
                           <Image
                             src={PersonalizedIcon}
                             width={480}
                             height={480}
                             alt="Personalized Icon"
                             className="phone:w-12 phone:h-12 lg:w-20 lg:h-20 tablet:w-16 tablet:h-16"
                           />
                           <h1 className="lg:text-2xl text-center phone:text-sm tablet:text-lg">Personalized Health Plans</h1>
                           <p className="lg:text-sm text-center text-slate-500 phone:text-xs">customized health insurance plans based on user needs and medical history.
         
         </p>
                       </div>
                       <div className="laptop:w-56 xl:w-64 desktop2xl:w-72 tablet:w-44 tablet:h-64 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56  phone:w-40 phone:h-52  phone:shadow-md phone:border phone:border-slate-100">
                           <Image
                             src={CashlessIcon}
                             width={480}
                             height={480}
                             alt="Cashless Icon"
                             className="phone:w-12 phone:h-12 lg:w-20 lg:h-20 tablet:w-16 tablet:h-16"
                           />
                           <h1 className="lg:text-2xl text-center phone:text-sm tablet:text-lg ">Cashless Hospitalization
                           </h1>
                           <p className="text-center lg:text-sm text-slate-500 phone:text-xs">cashless treatment options at a wide network of hospitals.
         
         </p>
                       </div>
                       <div className="laptop:w-56 xl:w-64 desktop2xl:w-72 tablet:w-44 tablet:h-64 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 phone:w-40 phone:h-52  phone:shadow-md phone:border phone:border-slate-100">
                           <Image
                             src={FreeHealthIcon}
                             width={480}
                             height={480}
                             alt="FreeHealth Icon"
                             className="phone:w-12 phone:h-12 lg:w-20 lg:h-20 tablet:w-16 tablet:h-16"
                           />
                           <h1 className="lg:text-2xl text-center phone:text-sm tablet:text-lg">Free Health Check-up
                           </h1>
                           <p className="text-center lg:text-sm text-slate-500 phone:text-xs">Provide free annual health check-ups with selected health plans.
         
         </p>
                       </div>
                       <div className="laptop:w-56 xl:w-64 desktop2xl:w-72 tablet:w-44 tablet:h-64 bg-white rounded-2xl hover:shadow-md hover:rounded-2xl hover:border hover:border-slate-200 lg:h-80 flex flex-col items-center justify-center gap-3 p-3 transition-all ease-in duration-300 xs:w-40 xs:h-56 phone:w-40 phone:h-52  phone:shadow-md phone:border phone:border-slate-100">
                           <Image
                             src={familyFloaterIcon}
                             width={480}
                             height={480}
                             alt="Family Icon"
                             className="phone:w-12 phone:h-12 lg:w-20 lg:h-20 tablet:w-16 tablet:h-16"
                           />
                           <h1 className="lg:text-2xl text-center phone:text-sm tablet:text-lg">Family Floater Plan
                           </h1>
                           <p className="text-center lg:text-sm text-slate-500 phone:text-xs">Allow users to cover their entire family under a single health plan.
         
         .</p>
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
