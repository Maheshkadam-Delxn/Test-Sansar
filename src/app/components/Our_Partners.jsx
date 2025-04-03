// import React from "react";
// import Image from "next/image";
// import AnimatedHeader from "./AnimatedHeader";

// const Our_Partners = () => {
//   const partners = [
//     { id: 1, img: "/providers/lombard.png", name: "Partner 1" },
//     { id: 2, img: "/providers/icici-life.png", name: "Partner 2" },
//     { id: 3, img: "/providers/tata-aia-life-logo.png", name: "Partner 3" },
//     { id: 4, img: "/providers/hdfc.png", name: "Partner 4" },
 
//     { id: 8, img: "/providers/kotak.png", name: "Partner 8" },
//     { id: 9, img: "/providers/max-life.png", name: "Partner 9" },
//     { id: 10, img: "/providers/lic.png", name: "Partner 10" },
//     { id: 11, img: "/providers/iffco.png", name: "Partner 11" },
//     { id: 12, img: "/providers/zurich.png", name: "Partner 12" },
//     { id: 13, img: "/providers/uiico.png", name: "Partner 13" },
//     { id: 14, img: "/providers/national.png", name: "Partner 14" },
//     { id: 15, img: "/providers/digit.png", name: "Partner 15" },
//     { id: 5, img: "/providers/hdfc-ergo.jpeg", name: "Partner 5" },
//     { id: 6, img: "/providers/bajaj.png", name: "Partner 6" },
//     { id: 7, img: "/providers/tata-aig.png", name: "Partner 7" },

//   ];

//   return (
//     <div className=" w-full mt-12 tablet:p-10 phone:mt-4  lg:h-[50vh] bg-white flex flex-col items-center justify-center phone:justify-center gap-5 desktop2xl:justify-evenly overflow-hidden px-4 phone:h-[40vh] ">
//       {/* <AnimatedHeader text="Our Partners" className="text-4xl" /> */}
//       <h2 className="text-center text-xl md:text-3xl font-medium mb-6 desktop2xl:text-5xl ">
//         Our Partners
//       </h2>
//       <div className="relative overflow-hidden w-full">
//         <div className="flex animate-scroll gap-4 sm:gap-6 md:gap-8">
//           {partners.concat(partners).map((partner, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-36 phone:w-24 md:w-48 text-center bg-white  desktop2xl:w-72"
//             >
//               <div className="relative w-full h-28  md:h-36">
//                 <Image
//                   src={partner.img}
//                   alt={partner.name}
//                   layout="fill"
//                   objectFit="contain"
//                   className="rounded-lg"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Our_Partners;

import React from "react";
import Image from "next/image";

const Our_Partners = () => {
  const partners = [
    { id: 1, img: "/providers/lombard.png", name: "Partner 1" },
    { id: 2, img: "/providers/icici-life.png", name: "Partner 2" },
    { id: 3, img: "/providers/tata-aia-life-logo.png", name: "Partner 3" },
    { id: 4, img: "/providers/hdfc.png", name: "Partner 4" },
    { id: 5, img: "/providers/hdfc-ergo.jpeg", name: "Partner 5" },
    { id: 6, img: "/providers/bajaj.png", name: "Partner 6" },
    { id: 7, img: "/providers/tata-aig.png", name: "Partner 7" },
    { id: 8, img: "/providers/kotak.png", name: "Partner 8" },
    { id: 9, img: "/providers/max-life.png", name: "Partner 9" },
    { id: 10, img: "/providers/lic.png", name: "Partner 10" },
    { id: 11, img: "/providers/iffco.png", name: "Partner 11" },
    { id: 12, img: "/providers/zurich.png", name: "Partner 12" },
    { id: 13, img: "/providers/uiico.png", name: "Partner 13" },
    { id: 14, img: "/providers/national.png", name: "Partner 14" },
    { id: 15, img: "/providers/digit.png", name: "Partner 15" },
  ];

  return (
    <div className="w-full py-12 px-4 bg-white">
      <h2 className="text-center text-3xl font-medium mb-8">Our Partners</h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {partners.map((partner) => (
          <div 
            key={partner.id}
            className="flex items-center justify-center p-4 rounded-lg  bg-white hover:shadow-md"
          >
            <div className="relative w-full h-32">
              <Image
                src={partner.img}
                alt={partner.name}
                layout="fill"
                objectFit="contain"
                className="filter grayscale-0 transition-all"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Our_Partners;