import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import stethoscope from "../assets/ecg.svg";
import heartbeat from "../assets/med2.svg";

const MissionVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-white py-16 md:py-24 font-exo overflow-hidden">
      {/* Floating blurred decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

      {/* Floating SVGs */}
      <img
        src={stethoscope}
        alt="Decorative stethoscope"
        className="absolute top-8 left-8 w-14 md:w-20 opacity-30 animate-bounce"
      />
      <img
        src={heartbeat}
        alt="Decorative heartbeat"
        className="absolute bottom-8 right-8 w-16 md:w-24 opacity-30 animate-bounce"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 relative z-10">
        {/* Mission */}
        <div
          className="group bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
          data-aos="fade-right"
        >
          <div className="relative h-56 md:h-64 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3985162/pexels-photo-3985162.jpeg"
              alt="Our Mission"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
          </div>
          <div className="p-6 md:p-8 space-y-4">
            <div className="w-14 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full mb-2"></div>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900">
              Our Mission
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our mission is to provide a student-centered learning environment
              that enhances healthcare training for a diverse student body. We
              aim to alleviate the growing shortage of healthcare professionals
              in our community.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our programs—Nurse Aide, Medication Aide, Clinical Medical
              Assistant, Medication Management, PCA, Phlebotomy, EKG, and
              CPR—equip graduates to provide quality healthcare to the
              community.
            </p>
          </div>
        </div>

        {/* Vision */}
        {/* Vision */}
        <div
          className="group bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 flex flex-col"
          data-aos="fade-left"
        >
          <div className="p-6 md:p-8 space-y-4 flex-grow">
            <div className="w-14 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full mb-2"></div>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900">
              Our Vision
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              As a leading healthcare training provider in Virginia, we are
              committed to offering nursing students the learning and practice
              they need to become active contributors in their community’s
              healthcare systems. Our goal is to help students achieve success
              for themselves and benefit their future patients.
            </p>
          </div>
          <div className="relative h-56 md:h-64 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/32213307/pexels-photo-32213307.jpeg"
              alt="Our Vision"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
