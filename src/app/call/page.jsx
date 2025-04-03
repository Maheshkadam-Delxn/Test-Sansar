"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const phoneNumber = "+919561113316"; // Your phone number

  const handleCall = () => {
    setShowConfirmation(true);
  };

  const confirmCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#CEFCFF] via-[#D5F5F9] to-[#FFFFFF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl"
          >
            Get Instant Support
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Click below to speak directly with our support team
          </motion.p>
        </div>

        {/* Phone Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <span className="text-4xl">📞</span>
              <div>
                <p className="text-gray-600">Call us at:</p>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  +91 95611 13316
                </a>
              </div>
            </div>

            <button
              onClick={handleCall}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </button>
          </div>
        </motion.div>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-8 max-w-md w-full"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Confirm Call
              </h3>
              <p className="text-gray-600 mb-6">
                You're about to call:{" "}
                <span className="font-medium text-blue-600">{phoneNumber}</span>
              </p>
              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmCall}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Confirm Call
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}