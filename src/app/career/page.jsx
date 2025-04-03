"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";
import mailicon from "../../../public/icons/Flaticons/mail.png";
import callicon from "../../../public/icons/Flaticons/callI.png";
import AnimatedHeader from "../components/AnimatedHeader";
import careerbanner from "../../../public/coverimg/career.jpg"; // Update banner image

const Career = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const validateForm = () => {
    const { fname, lname, email, mobile, resume } = formData;
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
    if (!resume) {
      toast.error("Please upload your resume (PDF only).");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const response = await fetch("/api/career-enquiry", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Resume uploaded successfully!");
        setFormData({
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          resume: null,
        });
      } else {
        toast.error("Upload failed: " + result.error);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full laptop:min-h-[150vh] phone:min-h-[100vh]">
      <Toaster />
      {/* Hero Section */}
      <div className="relative w-full h-56 bg-black">
        <Image
          src={careerbanner}
          layout="fill"
          objectFit="cover"
          alt="Career Banner"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center px-6 sm:px-16 text-white">
          <h1 className="text-xl sm:text-3xl font-bold">Join Our Team</h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="h-full w-full flex flex-col items-center justify-center phone:justify-start gap-12 p-6 sm:p-10 bg-white">
        <AnimatedHeader text="Career Opportunities" />

        {/* Content Section */}
        <div className="flex h-full phone:h-full flex-col items-center  w-full gap-6 sm:gap-12">
          {/* Information Section */}
          <div className="w-full h-2/3 tablet:h-full phone:h-1/2 lg:w-full md:w-full sm:w-full xl:w-1/2 2xl:w-1/2 bg-[#E6ECFF] rounded-2xl p-10 sm:p-10 phone:p-4 flex flex-col items-start justify-evenly">
            <div>
              <p className="text-xl sm:text-3xl font-bold">Join Policy Sansar</p>
              <p className="text-sm sm:text-base pt-2 sm:pt-4">
                Explore career opportunities and be part of our journey.
              </p>
            </div>

            {/* Contact Info */}
            <div className="phone:flex gap-4 pt-4 pb-4 phone:justify-center justify-between flex xs:flex-row xs:justify-between w-full">
              <div className="flex items-center gap-2 phone:flex-col">
                <Image width={25} height={25} src={mailicon} alt="Email Icon" />
                <p className="text-xs sm:text-base">careers@policysansar.com</p>
              </div>
              <div className="flex items-center gap-2 phone:flex-col">
                <Image width={25} height={25} src={callicon} alt="Phone Icon" />
                <p className="text-xs sm:text-base">+91 9561113316</p>
              </div>
            </div>
          </div>

          {/* Career Form Section */}
          <div className="bg-white w-full phone:h-1/3 tablet:h-1/2 lg:w-full md:w-full xl:w-1/2 2xl:w-1/2 sm:w-full h-2/3 p-6 sm:p-8 flex flex-col items-start justify-center gap-6 sm:gap-12 rounded-2xl border border-gray-400">
            <p className="text-xl sm:text-2xl font-bold">Submit Your Resume</p>
            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                value={formData.fname}
                name="fname"
                onChange={handleChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs"
                placeholder="First Name"
              />
              <input
                value={formData.lname}
                name="lname"
                onChange={handleChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs"
                placeholder="Last Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs"
                placeholder="Email Address"
              />
              <input
                type="tel"
                name="mobile"
                pattern="^[0-9]{10}$"
                value={formData.mobile}
                onChange={handleChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 phone:p-3 phone:text-xs"
                placeholder="Mobile Number"
              />
              <input
                type="file"
                name="resume"
                accept="application/pdf"
                onChange={handleFileChange}
                className="border border-slate-300 lg:p-4 lg:text-lg rounded-lg w-full bg-white focus:outline-none phone:p-3 phone:text-xs"
              />
              <input
                type="submit"
                value={loading ? "Submitting..." : "Upload"}
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

export default Career;
