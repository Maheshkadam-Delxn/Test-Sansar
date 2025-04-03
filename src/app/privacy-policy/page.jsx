import React from "react";
import termscover from "../../../public/coverimg/banner.png";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-5 p-5 ">
      <div className="w-full h-56 bg-black p-8 relative">
        <Image src={termscover} layout="fill" objectFit="cover" alt="privacy-policy" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center pl-16 text-white">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      <div className="flex flex-col items-start gap-10 lg:p-8 phone:p-0">
        <div className="bg-gray-50 lg:p-6 rounded-lg shadow-md phone:p-6 tablet:p-6">
          <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
            <strong>Policy Sansar</strong> may collect and store information about you when you visit our site, use our services, or view our online advertisements. The information collected during normal site usage helps us improve our products and services. By registering on Policy Sansar, you allow us to contact you via email, phone call, or SMS to offer relevant services, even if you have opted for DND, DNC, or NCPR services.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
            We may use personal information collected from you for the following purposes:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-4 text-justify">
            <li>Responding to your inquiries about our products and services.</li>
            <li>Processing transactions and providing post-transaction services.</li>
            <li>Enhancing and marketing our services.</li>
            <li>Evaluating user interactions with our platform.</li>
            <li>Providing advertisements for products that may interest you.</li>
            <li>Communicating via email, mail, or phone about relevant offerings.</li>
            <li>Maintaining and managing your account.</li>
            <li>Keeping you informed about your relationship with us.</li>
            <li>Ensuring compliance with terms and conditions.</li>
            <li>Performing other functions as described at the time of data collection.</li>
          </ul>

          <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
            <strong>Third-party Websites:</strong> Our site may contain links to external insurance providers. We do not control the content or privacy practices of these websites. Any interactions on external sites are subject to their respective privacy policies.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
            <strong>Data Sharing:</strong> We may share personal information with third-party service providers who assist in processing payments, storing data, or other operational functions. Additionally, information may be shared if required for legal reasons.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
            Policy Sansar implements stringent security measures to safeguard your data. While we strive to protect personal information, no digital system is entirely secure.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
            This policy outlines how Policy Sansar protects user data and may be updated periodically. Any changes will take effect immediately upon posting.
          </p>

          <p className="text-gray-700 text-base leading-relaxed text-justify">
            <strong>Acceptance of Terms:</strong> By using this site, you agree to this privacy policy. If you do not agree, please refrain from using our platform. Continued usage following policy updates implies acceptance of the revised terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;