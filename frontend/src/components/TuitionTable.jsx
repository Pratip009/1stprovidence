/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TuitionTable = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const programs = [
    { program: "CLINICAL MEDICAL ASSISTANT (CMA)", tuition: "$3500", fee: "$100", total: "$3600", down: "$1200" },
    { program: "PHLEBOTOMY TECHNICIAN (CPT)", tuition: "$1800", fee: "$100", total: "$1900", down: "$700" },
    { program: "ELECTROCARDIOGRAPHY TECHNICIAN (EKG)", tuition: "$1500", fee: "$100", total: "$1600", down: "$600" },
    { program: "NURSE AIDE", tuition: "$1200", fee: "$100", total: "$1300", down: "$500" },
    { program: "68 HOUR MEDICATION AIDE", tuition: "$900", fee: "$75", total: "$975", down: "$475" },
    { program: "32 HOUR MEDICATION MANAGEMENT", tuition: "$600", fee: "$75", total: "$675", down: "$375" },
    { program: "PERSONAL CARE AIDE (PCA)", tuition: "$600", fee: "$75", total: "$675", down: "$375" },
    { program: "4 HOUR MEDICATION REFRESHER", tuition: "$200", fee: "$0", total: "$200", down: "$200" },
    { program: "AHA FA/CPR (4 HR)", tuition: "$125", fee: "$0", total: "$125", down: "$125" },
    { program: "AHA BLS/CPR PROVIDER/RENEWAL (2 HR)", tuition: "$90", fee: "$0", total: "$90", down: "$90" },
    { program: "AHA HEARTCODE SKILLS (1 HR)", tuition: "$70", fee: "$0", total: "$70", down: "$70" },
  ];

  return (
    <div className="relative bg-white py-10">
      {/* Floating SVGs */}
      <div className="absolute top-4 left-4 animate-bounce-slow">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#3B82F6" opacity="0.2">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 animate-bounce-slower">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="#3B82F6" opacity="0.2">
          <rect width="20" height="20" x="2" y="2" rx="5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 font-exo space-y-6 relative z-10">
        {/* Stylish Heading */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Tuition & Program Costs
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our flexible tuition plans and program fees designed to help you start your healthcare career with confidence.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <table className="w-full table-fixed text-gray-800 text-xs sm:text-sm md:text-base">
            <thead className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
              <tr>
                <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold tracking-wide text-left w-[40%]">Program</th>
                <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold tracking-wide text-center w-[15%]">Tuition</th>
                <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold tracking-wide text-center w-[15%]">Fee</th>
                <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold tracking-wide text-center w-[15%]">Total</th>
                <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold tracking-wide text-center w-[15%]">Down</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {programs.map((item, index) => (
                <tr
                  key={index}
                  className={`transition duration-200 ease-in-out hover:bg-blue-50 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-left break-words">{item.program}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-center">{item.tuition}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-center">{item.fee}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-center">{item.total}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-center">{item.down}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2">
          <p>REQUESTS FOR CPR/BLS-RELATED REFUNDS WILL BE PROCESSED MINUS 15% OF THE TOTAL COST OF THE COURSE.</p>
          <p>FOR ALL OTHER REQUESTS FOR TUITION REFUNDS, PLEASE REFER TO THE ENROLLMENT AGREEMENT POLICY.</p>
          <p>INSURANCE, TEXTBOOKS AND CLASS MATERIALS ARE INCLUDED.</p>
          <p className="italic text-gray-500">*1ST PROVIDENCE HCT RESERVES THE RIGHT TO CHANGE THESE TERMS AND CONDITIONS AT ANY TIME WITHOUT PRIOR NOTICE.</p>
        </div>

        {/* Enroll Now button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-bounce-slower {
          animation: bounce 4s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
};

export default TuitionTable;
