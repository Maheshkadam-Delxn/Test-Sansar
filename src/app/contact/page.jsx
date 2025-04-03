"use client";
import React, { useState } from "react";
import Image from "next/image";
import mailicon from "../../../public/icons/Flaticons/mail.png";
import callicon from "../../../public/icons/Flaticons/callI.png";
import AnimatedHeader from "../components/AnimatedHeader";
import callbanner from "../../../public/coverimg/call.png";
import { Toaster,toast } from "react-hot-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    insuranceType: "Enquiry",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { fname, lname, email, mobile } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

  return (
    <div className=" w-full laptop:min-h-[150vh] phone:min-h-[100vh]  ">
      {/* Hero Section */}
      <Toaster />
      <div className="relative w-full h-56 bg-black ">
        <Image
          src={callbanner}
          layout="fill"
          objectFit="cover"
          alt="Call Banner"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center px-6 sm:px-16 text-white">
          <h1 className="text-xl sm:text-3xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Main Contact Section */}
      <div
        name="contact"
        className="h-full   phone:h-full w-full flex flex-col items-center justify-center phone:justify-start gap-12   p-6 sm:p-10 bg-white"
      >
        <AnimatedHeader text="Contact Us" />

        {/* Parent Container */}
        <div className="flex   h-full phone:h-full lg:flex-col phone:flex-col items-center  xs:flex-col md:flex-col xl:flex-row 2xl:flex-row sm:flex-col w-full  gap-6 sm:gap-12">
          {/* Map Section */}
          <div className="w-full h-2/3 tablet:h-full phone:justify-start phone:h-1/2 lg:w-full md:w-full sm:w-full xl:w-1/2 2xl:w-1/2   bg-[#E6ECFF] rounded-2xl p-10 sm:p-10 phone:p-4 flex flex-col items-start justify-evenly ">
            <div className="">
              <p className="text-xl sm:text-3xl font-bold">
                Visit Policy Sansar
              </p>
              <p className="text-sm sm:text-base pt-2 sm:pt-4">
                Let's Build a Conversation - Contact Us Today.
              </p>
            </div>

            {/* Email & Mobile Number */}
            <div className=" phone:flex  gap-4  pt-4 pb-4  phone:justify-center justify-between   flex xs:flex-row xs:justify-between  w-full ">
              <div className="flex items-center gap-2 phone:flex-col">
                <Image width={25} height={25} src={mailicon} alt="Email Icon" />
                <p className="text-xs sm:text-base">po@policysansar.com</p>
              </div>
              <div className="flex items-center gap-2 phone:flex-col">
                <Image width={25} height={25} src={callicon} alt="Phone Icon" />
                <p className="text-xs sm:text-base">
                  <span>+91 </span> <span>9561113316</span>
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full flex items-center gap-2 h-2/3  phone:h-full phone:flex-col">
              {/* First Location */}
              <div className="flex flex-col items-center  justify-center gap-5 w-1/2 phone:w-full h-full bg-white p-2 rounded-lg shadow-xl border border-slate-300">
             <div className="flex flex-col gap-2 items-center "> <h1 className="text-xl font-bold phone:text-sm">Corporate Office</h1>
             <p className="text-center phone:text-xs">104,1st Floor, A-Wing,Boomerang, Chandivali Farm Road, Andheri East, Mumbai-400072</p></div>
              <div
                className="w-full  h-56 relative rounded-2xl overflow-hidden phone:rounded-sm  cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/qDDFFVQkVke94YA59",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8653856063793!2d72.89023277493088!3d19.113560550792815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92d5e58cdc9%3A0x94c2dec7f68a1d1b!2z4KSs4KWB4KSu4KSw4KSB4KSXIOCkrOCkv-CksuCljeCkoeCkv-CkguCklw!5e0!3m2!1shi!2sin!4v1737356266212!5m2!1shi!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full pointer-events-none" // Prevents iframe interaction
                  title="First Location Map" // Added title for accessibility
                />
              </div>
              </div>
             

              {/* Second Location */}
              <div className="flex flex-col items-center  justify-center gap-5 w-1/2 phone:w-full h-full bg-white p-2 rounded-lg shadow-xl border border-slate-300">
             <div className="flex flex-col gap-2 items-center "> <h1 className="text-xl font-bold phone:text-sm">Registered Office</h1>
             <p className="text-center phone:text-xs">3rd Floor, Plot No.264/265, Vaswani Chamber,
             Dr.Annie Besant Road, Worli Colony, Mumbai-400018</p></div>
             <div
                className="w-full h-56  relative rounded-2xl phone:rounded-sm overflow-hidden cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/waCc29mgzyJsvb7eA",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1753228734137!2d72.81877477492861!3d19.01199455397927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf3304e7b959%3A0x86db87def27be600!2z4KS14KWA4KS14KSw4KWN4KSVIOCkteCkvuCkuOCkteCkvuCkqOClgCDgpJrgpYjgpILgpKzgpLDgpY3gpLg!5e0!3m2!1shi!2sin!4v1737356362283!5m2!1shi!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full pointer-events-none" // Prevents iframe interaction
                  title="Second Location Map" // Added title for accessibility
                />
              </div>
              </div>
             
            </div>
          </div>

          {/* Google Form Embed Section */}
          <div className="bg-white w-full phone:h-1/3 tablet:h-1/2 lg:w-full md:w-full xl:w-1/2 2xl:w-1/2 sm:w-full h-2/3 p-6 sm:p-8 flex flex-col items-start justify-center gap-6 sm:gap-12 rounded-2xl border border-gray-400">
            <p className="text-xl sm:text-2xl font-bold">Get in Touch</p>
            {/* <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfA_lb0gzs4Pk2k_8gN0atWHIXCb6820M_AUCw5T6G_y7QM4A/viewform?embedded=true"
              width="100%"
              height="600px"
              className="rounded-lg border border-gray-400"
              title="Contact Form" // Added title for accessibility
            >
              Loading…
            </iframe> */}
            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                value={formData.fname}
                name="fname"
                onChange={handleChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs tablet:p-4"
                placeholder="First Name"
              />
              <input
                value={formData.lname}
                name="lname"
                onChange={handleChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs tablet:p-4"
                placeholder="Last Name"
              />

              <input
                type="tel"
                pattern="^[0-9]{10}$"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs tablet:p-4"
                placeholder="Mobile Number"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs tablet:p-4"
                placeholder="Email address"
              />

              <input
                type="submit"
                value={loading ? "Submitting..." : "Continue"}
                className={`p-4 rounded-lg text-white cursor-pointer phone:p-2 bg-blue-700 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;