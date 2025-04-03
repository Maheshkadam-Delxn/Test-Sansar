import React from "react";
import terms from "../../../public/coverimg/terms.png";
import termsss from "../../../public/coverimg/cover3.png";
import Image from "next/image";
const page = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:gap-10 phone:gap-5 p-5">
      <div className="w-full h-56 bg-black p-6 relative ">
        <Image src={termsss} layout="fill" objectFit="cover" alt="about-us" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center pl-16 text-white ">
          <h1 className="text-2xl font-bold">Terms and Conditions</h1>
        </div>
      </div>

      <div className="flex flex-col items-start  text-base bg-white tablet:p-6 shadow-md border border-gray-200 rounded-3xl lg:p-8 phone:p-6 text-gray-700 space-y-4 leading-relaxed">
        <div className="lg:px-4 lg:py-6 phone:px-1 phone:py-1 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            1. Description of Services
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            Policy Sansar provides users with access to comprehensive
            information on financial and insurance products, including but not
            limited to General Insurance, Life Insurance, and related services
            such as policy renewals (the "Service"). You are responsible for
            ensuring access to the site, which may involve third-party charges
            (e.g., internet service provider or mobile data fees). Additionally,
            you are responsible for providing the necessary equipment to access
            and use the site.
          </p>

          <p className="text-justify leading-relaxed text-gray-700 mt-4">
            By using this site and providing your personal/contact details, you
            acknowledge your interest in exploring and purchasing the selected
            Service(s). You consent to being contacted by Policy Sansar via
            electronic communication or phone to discuss your chosen products,
            offer assistance with renewals, provide reminders, and fulfill your
            requests.
          </p>

          <p className="text-justify leading-relaxed text-gray-700 mt-4">
            Furthermore, you agree that Policy Sansar may share your details
            with its affiliates and partners, who may contact you via email,
            phone, or SMS to provide relevant information or sales-related
            communication. You also consent to receiving promotional materials
            and special offers from Policy Sansar via email or SMS.
          </p>
        </div>

        <div className="lg:px-4 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            2. License and Site Access
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            Policy Sansar grants you a limited license to access and use this
            Site and its services for personal purposes only. This license
            strictly prohibits downloading or copying any information for the
            benefit of another individual, vendor, or third party. Unauthorized
            activities such as caching, creating hypertext links without
            permission, or framing any content from the Site are not allowed.
            Additionally, you may not upload, post, or transmit any content that
            you do not have the legal right to share, including copyrighted
            materials belonging to others. Uploading or transmitting files
            containing software viruses, malicious code, or any programs
            designed to disrupt, damage, or limit the functionality of any
            software, hardware, or telecommunications equipment is strictly
            forbidden. Furthermore, any action that imposes an unreasonable or
            disproportionately large load on Policy Sansar’s infrastructure, as
            determined solely by us, is not permitted. The use of data mining
            tools, automated bots, or similar methods to extract information
            from the Site is also prohibited. Bypassing or attempting to
            circumvent any security measures implemented by Policy Sansar to
            restrict access to the Site will result in immediate termination of
            the permissions or license granted to you. By using this Site, you
            agree that you will not:
          </p>

          <ul className="list-disc list-inside mt-4 text-gray-700 text-lg leading-relaxed">
            <li>
              Use this Site or its content for any commercial purpose without
              authorization.
            </li>
            <li>
              Engage in speculative, false, or fraudulent transactions,
              including transactions made in anticipation of demand.
            </li>
            <li>
              Access, monitor, or copy any content or information from this Site
              using automated tools such as robots, spiders, or scrapers, or
              through manual methods without explicit written permission.
            </li>
            <li>
              Violate any restrictions set in the Site’s robot exclusion headers
              or attempt to bypass security measures designed to limit access to
              certain areas of the Site.
            </li>
            <li>
              Take any action that places an unreasonable or excessive load on
              our infrastructure, as determined at our discretion.
            </li>
            <li>
              Deep-link to any section of the Site, including the purchase path
              for services, without prior written authorization.
            </li>
            <li>
              "Frame," "mirror," or integrate any part of this Site into another
              website without express written consent from Policy Sansar.
            </li>
          </ul>
        </div>

        <div className="lg:px-4 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            3. Eligibility
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            The Service is not available to individuals under the age of 18 or
            to users who have been suspended or removed from the system by
            Policy Sansar for any reason. Each user is allowed to maintain only
            one active account, and the sale, transfer, or exchange of accounts
            to any third party is strictly prohibited. If you do not meet these
            eligibility criteria, you are not permitted to use the Service or
            access the Site.
          </p>{" "}
        </div>
        <div className="lg:px-4 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            4. Your Account
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            By using this Site, you confirm that you are of legal age to enter
            into a binding contract and are not restricted from receiving
            services under the laws of India or any other applicable
            jurisdiction. You agree to use the Site solely for making legitimate
            purchases for yourself or on behalf of another person for whom you
            are legally authorized to act. In such cases, you must inform the
            individual about the applicable Terms of Use (ToU) and Privacy
            Policy, as well as any rules and restrictions related to the
            purchase made on their behalf.
          </p>

          <p className="text-justify leading-relaxed text-gray-700 mt-4">
            You also agree to provide true, accurate, current, and complete
            information as requested by the Site. If any information provided is
            found to be false, inaccurate, outdated, or incomplete—or if Policy
            Sansar has reasonable grounds to suspect such discrepancies—Policy
            Sansar reserves the right to suspend or terminate your account and
            restrict your access to the Site and its services.
          </p>

          <p className="text-justify leading-relaxed text-gray-700 mt-4">
            As a user, you are responsible for maintaining the confidentiality
            of your account credentials, including your password, and for
            restricting unauthorized access to your device. You accept full
            responsibility for all activities conducted under your account. To
            ensure security, we strongly recommend logging out after each
            session. You must notify Policy Sansar immediately in case of any
            unauthorized use of your account or security breaches.
          </p>

          <p className="text-justify leading-relaxed text-gray-700 mt-4">
            Policy Sansar reserves the right, at its sole discretion, to refuse
            service, terminate accounts, or modify or remove content at any
            time. Additionally, we may deny access to the Site or its services
            to any user who violates our ToU or Privacy Policy. Additional terms
            and conditions may apply when purchasing services through the Site.
            You agree to comply with all conditions set by the respective
            service providers, including timely payments and adherence to their
            usage policies.
          </p>

          <p className="text-justify leading-relaxed text-gray-700 mt-4">
            Any violation of a service provider's terms may result in the
            cancellation of your purchase, denial of access to the selected
            service, forfeiture of payments made, and potential charges incurred
            by Policy Sansar due to your non-compliance.
          </p>
        </div>
        <div className="lg:px-4 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="text-2xl font-semibold">5. Submitted Content</h1>
          <p className="text-justify leading-relaxed text-gray-700">
            Policy Sansar does not claim ownership of any materials you submit
            or make available through the Site. However, at its sole discretion,
            Policy Sansar may choose to include such materials in the Service,
            either in whole, in part, or in a modified form. By submitting
            content to the Site, you grant Policy Sansar a perpetual,
            irrevocable, worldwide, royalty-free, and non-exclusive license to
            use, copy, distribute, publicly display, modify, create derivative
            works, and sublicense such materials, either fully or partially.
            This also includes the right to use the name associated with the
            submitted content.
          </p>

          <p className="text-justify leading-relaxed text-gray-700 mt-4">
            You confirm and warrant that you have full rights to any content you
            provide, including but not limited to text, images, music, or
            videos, and that you are authorized to grant the license described
            above. Policy Sansar assumes no responsibility or liability for any
            content submitted by users. We have no obligation to publish
            user-submitted content and reserve the right to determine, at our
            sole discretion, which content is displayed on the Site. If you do
            not agree to these terms, please refrain from submitting any
            content. You are solely responsible for the material you submit.
          </p>

          <ul className="list-disc pl-5 mt-4 text-gray-700">
            <li>
              Any content that is unlawful, threatening, defamatory, obscene,
              pornographic, or that violates privacy rights or any applicable
              laws.
            </li>
            <li>
              Any commercial content, including but not limited to solicitations
              for funds, advertisements, or promotional materials.
            </li>
            <li>
              Any content that infringes on the intellectual property rights of
              any third party, including copyrights, trademarks, or patents.
            </li>
          </ul>

          <p className="text-justify leading-relaxed text-gray-700 mt-4">
            You will be solely responsible for any damages resulting from
            violations of these restrictions or any other harm caused by the
            content you submit to this Site.
          </p>
        </div>
        <div className="lg:px-6 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            6. Disclaimer of Liability and Warranty
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            The content, products, and services provided on this site may
            contain inaccuracies or errors, including pricing mistakes. We do
            not guarantee the accuracy of the information and disclaim any
            liability for errors or inaccuracies related to the descriptions of
            content, products, and services. We reserve the right to correct any
            pricing errors on the site and/or on any pending reservations made
            under an incorrect price. Policy Sansar does not make any
            representation regarding the suitability of the information,
            software, products, or services available on this site for any
            particular purpose, and the inclusion of any products or services on
            this site does not imply any endorsement or recommendation of such
            offerings. All information, software, products, and services are
            provided "AS IS," without any warranty of any kind. Policy Sansar
            disclaims all warranties and conditions, including but not limited
            to any implied warranties of merchantability, fitness for a
            particular purpose, title, and non-infringement. The service
            providers offering services on this site are independent affiliates,
            and Policy Sansar is not responsible for any actions, errors,
            omissions, representations, warranties, breaches, or negligence by
            these service providers or for any personal injuries, deaths,
            property damages, or other damages or expenses that result. Policy
            Sansar and its affiliates will not be liable and will not offer
            refunds in the event of any delays, cancellations, strikes, force
            majeure events, or other causes beyond their control. They are also
            not responsible for any additional expenses, omissions, delays, or
            actions taken by any government or authority. Under no circumstances
            shall Policy Sansar or its affiliates be liable for any direct,
            indirect, punitive, incidental, special, or consequential damages
            arising from your access to, use of, or inability to access or use
            this site.
          </p>
        </div>
        <div className="lg:px-4 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            7. Cancellation & Refund/ChargeBack Terms and Conditions
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            (a) Free Look Period Cancellation and Refund
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            In accordance with IRDAI rules and regulations, you have the right
            to cancel your insurance policy within 15 (fifteen) days from the
            date of (online) receipt of the policy (referred to as the "Free
            Look Period"). A refund of your premium amount will be processed
            following the procedures applicable by the insurer. The Free Look
            facility is available only for Life and Health insurance policies,
            subject to specific terms and conditions outlined by IRDAI. We
            recommend all customers carefully review the insurance policy
            document and utilize the Free Look facility if the terms and
            conditions do not align with your insurance requirements. Please
            note that once a cancellation request is placed within the Free Look
            Period, the policy will be canceled, and the full premium will be
            refunded to you, subject to the following deductions:
          </p>
          <ul className="list-disc pl-5">
            <li>Charges for any medical tests conducted</li>
            <li>Administrative and service costs such as stamp duty, etc.</li>
            <li>Charges for mortality during the policy's active period</li>
          </ul>
          <p className="text-justify leading-relaxed text-gray-700">
            Please be aware that these deductions are at the sole discretion of
            the insurer. All refund payments under this paragraph will be the
            responsibility of the insurer, in compliance with IRDAI rules and
            regulations. Policy Sansar has partnered with RBI-authorized payment
            gateways to facilitate online payments for your insurance premiums
            and acts solely as a facilitator, assisting customers in expediting
            refunds.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            (b) Chargebacks
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            As a cardholder, you have the right to dispute a transaction carried
            out through our website and file a Chargeback with your issuing bank
            for a reversal of that transaction. Chargebacks allow you to reverse
            transactions under specific circumstances, such as:
          </p>
          <ul className="list-disc pl-5">
            <li>Alleged forgery of card details or bank account information</li>
            <li>
              Any charge/debit made on a card that has been blacklisted or
              listed in card association (Visa, MasterCard, etc.) warning
              bulletins
            </li>
            <li>Duplicate processing of the transaction</li>
            <li>
              Other reasons as per applicable rules and guidelines issued by
              RBI, card associations, or your card/payment instrument issuing
              bank
            </li>
          </ul>
          <p className="text-justify leading-relaxed text-gray-700">
            However, we reserve the right to reject a Chargeback under the
            following circumstances:
          </p>
          <ul className="list-disc pl-5">
            <li>
              If medical tests or underwriting are in progress with your chosen
              insurer, within 3 months from the date of your insurance policy
              application
            </li>
            <li>
              If there are delays caused by the insurer in conducting medical
              tests, underwriting, or issuing the insurance policy, within 3
              months from the application date
            </li>
            <li>
              If your insurance policy application is rejected by the insurer
              after your medical test
            </li>
          </ul>
          <p className="text-justify leading-relaxed text-gray-700">
            Our company will not be liable for any claims, disputes, or
            proceedings related to Chargebacks initiated by you in the
            circumstances specified above in (a), (b), and (c).
          </p>
        </div>
        <div className="lg:px-6 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            8. Additional Terms and Conditions of proposal form (applicable for
            health insurance products only)
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            (i) You confirm, both on your behalf and on behalf of all
            individuals proposed to be insured, that the information, responses,
            and/or details provided by you are accurate and complete to the best
            of your knowledge. You are also authorized to propose on behalf of
            these individuals.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            (ii) You understand that the information provided by you will serve
            as the foundation for the insurance policy, subject to the insurer's
            Board-approved underwriting policy, and that the policy will only
            become effective once the full premium payment is made.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            (iii) You further declare that you will notify the insurance company
            in writing of any changes to the occupation or overall health of the
            person to be insured/proposer after submitting the proposal but
            before receiving communication about the acceptance of risk by the
            insurer.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            (iv) You agree that the insurance company may request medical
            information from any doctor or hospital who has treated the person
            to be insured/proposer or from any past or present employer
            regarding matters affecting the physical or mental health of the
            insured/proposer. Additionally, the insurance company may seek
            information from any insurer who has previously received an
            application for insurance for the person to be insured/proposer for
            the purpose of underwriting the proposal and/or processing claims.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            (v) You authorize Policy Sansar/Insurance Broking Company to share
            information related to your proposal, including the medical records
            of the insured/proposer, for the sole purpose of underwriting the
            proposal and/or processing claims, with any relevant Government or
            Regulatory authorities.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            (vi) You consent to and authorize any authorized representatives of
            the insurance company, who are not direct employees of the company,
            to obtain medical information needed for policy issuance or claim
            settlement from any hospital/medical practitioner who has treated or
            may treat you or the person to be insured/insured regarding any
            illness, injury, or disease.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            (vii) You acknowledge and agree to the following (Section 41 of the
            Insurance Act):
          </p>
          <ul className="list-disc pl-5">
            <li>
              No individual shall, directly or indirectly, offer or provide any
              rebate on the commission payable or premium shown on the policy as
              an inducement for taking out, renewing, or continuing an insurance
              policy related to any risk concerning lives or property in India,
              nor shall anyone accept such a rebate, except as allowed according
              to the published prospectuses or tables of the insurers.
            </li>
            <li>
              Any person failing to comply with this section may face a penalty
              of up to ten lakh rupees.
            </li>
          </ul>
        </div>

        <div className="lg:px-4 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            9. Customer Due Deligence requirements(CDD)
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            You agree and acknowledge that in order to complete any financial
            transaction through the website, Our Company may carry out
            client/customer due diligence measures and request mandatory
            information required for KYC purposes, which you are obligated to
            provide. This is necessary while facilitating your insurance request
            with the insurance company(ies) in accordance with applicable PMLA
            laws and regulations. Where required, you consent to Our Company
            obtaining your credit information through authorized entities. Our
            Company may collect enough information to establish, to its
            satisfaction or the insurer's satisfaction, the identity of each new
            customer and the intended nature of the insurance relationship
            between you and the insurance company(ies).
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            You agree and understand that any payment towards the insurance
            premium must be made from your personal bank account or a joint bank
            account where you are a joint account holder. If the payment is made
            from a bank account in the name of a third party (i.e., not in your
            name), you acknowledge and agree that Our Company may conduct
            enhanced due diligence, including requesting documentation, to
            ensure compliance with customer due diligence requirements.
            Additionally, you understand and agree that, in compliance with the
            PMLA Act and rules, all refunds will be processed by the insurance
            company(ies) through Our Company to the bank account used for the
            insurance premium payment.
          </p>
        </div>
        <div className="lg:px-4 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            10. License Disclaimer
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            Nothing on any Policy Sansar website shall be interpreted as
            granting any license to use Policy Sansar's or any third party's
            intellectual property rights, whether by estoppel, implication, or
            any other means.
          </p>
        </div>
        <div className="lg:px-4 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            11. Local Laws
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            Policy Sansar operates and controls this website from its
            headquarters in Mumbai, India, and makes no representations that the
            materials on the website are suitable or available for use in other
            locations. If you access this website from other locations, you are
            responsible for complying with applicable local laws, including but
            not limited to export and import regulations. Unless explicitly
            stated otherwise, all marketing and promotional materials on this
            website are intended solely for individuals, companies, or other
            entities located in India, and comply with the laws currently in
            force in India. Any disputes will be subject to the exclusive
            jurisdiction of the Courts in Mumbai.
          </p>
        </div>
        <div className="lg:px-4 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            12. Limitation of Liability
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            You explicitly agree and understand that Policy Sansar, along with
            its subsidiaries, affiliates, officers, employees, agents, partners,
            and licensors, shall not be liable to you for any direct, indirect,
            incidental, special, consequential, or exemplary damages. This
            includes, but is not limited to, damages for loss of profits,
            goodwill, use, data, or other intangible losses (even if Policy
            Sansar has been advised of the possibility of such damages), arising
            from the use of the site, content, or any related services. If,
            despite the above limitation, Policy Sansar or its affiliates are
            found liable for any loss or damage arising from or connected to any
            of the situations described, the liability of Policy Sansar and/or
            its affiliates will be limited to the greater of: (a) the service
            fees you paid to Policy Sansar in connection with such transactions
            on the site, or (b) INR 100 (Rupees One Hundred only). This
            limitation of liability reflects the allocation of risk between the
            parties. The limitations outlined in this section will continue to
            apply even if any limited remedy specified in these terms fails to
            fulfill its essential purpose. These limitations of liability
            benefit Policy Sansar, its affiliates, and/or their respective
            service providers.
          </p>
        </div>
        <div className="lg:px-4 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            13. Indemnity
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            You agree to indemnify and hold Policy Sansar (including its
            officers, directors, agents, subsidiaries, joint ventures, and
            employees) harmless from any claims, causes of action, demands,
            recoveries, losses, damages, fines, penalties, or other costs or
            expenses of any kind, including reasonable attorneys' fees, arising
            from or related to your breach of these Terms of Use, your violation
            of any laws or third-party rights, or your use of the site.
          </p>
        </div>
        <div className="lg:px-4 lg:py-6 phone:px-2 phone:py-3 ">
          <h1 className="lg:text-2xl font-semibold mb-4 phone:text-lg">
            14. Electronic Communication
          </h1>
          <p className="text-justify leading-relaxed text-gray-700">
            By using the site or sending emails to Policy Sansar, you are
            communicating with us electronically. You consent to receive
            electronic communications from Policy Sansar, which may include
            emails, notices posted on the site, phone calls, or other available
            communication methods. You agree that all agreements, notices,
            disclosures, and other communications provided electronically
            fulfill any legal requirements for such communications to be in
            writing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
