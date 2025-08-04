import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import stethoscope from "../assets/ste.svg";
import heartbeat from "../assets/wheel.svg";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-white text-gray-800 py-14 md:py-20 overflow-hidden font-exo">
      {/* Decorative blurred circles */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-10 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* Floating SVGs */}
      <img
        src={stethoscope}
        alt="Decorative stethoscope"
        className="absolute top-10 left-4 w-12 sm:w-16 opacity-30 animate-bounce"
      />
      <img
        src={heartbeat}
        alt="Decorative heartbeat"
        className="absolute bottom-10 right-4 w-14 sm:w-20 opacity-30 animate-bounce"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Remove max-w completely, use full screen width */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
        {/* Title */}
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-3">
            By helping nursing professionals,
            <br className="hidden md:block" /> we elevate the lives of patients.
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mb-3"></div>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-[90%] lg:max-w-[80%] xl:max-w-[75%] mx-auto">
            At <span className="font-semibold text-blue-800">1ST Providence Healthcare Training LLC</span>,
            we provide aspiring nurses and healthcare professionals with quality education.
            A strong foundation begins with qualified educators and industry-current resources
            to ensure your success.
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 md:space-y-10">
          <p
            className="text-gray-700 text-base md:text-lg leading-relaxed max-w-[90%] lg:max-w-[80%] xl:max-w-[75%] mx-auto text-center"
            data-aos="fade-up"
          >
            Our institution offers a <span className="text-blue-700 font-medium">friendly, lively environment</span>
            with enriched education that produces skilled nurses and healthcare providers.
            Serving the Northern Virginia community, we cultivate a culture of learning that values
            <span className="text-blue-700 font-medium"> diversity, compassion, and humanitarianism.</span>
          </p>

          {/* Story card - wider */}
          <div
            className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border border-blue-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl transition-transform hover:scale-[1.02] max-w-[90%] lg:max-w-[80%] xl:max-w-[75%] mx-auto"
            data-aos="fade-up"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Story
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed">
              We began our training programs in response to the growing demand for
              <span className="text-blue-700 font-medium"> quality nurses and healthcare professionals.</span>
              Our founder, who serves as Program Director, holds a Mental Health Nurse Practitioner
              credential (PMHNP-BC) and is a Registered Nurse with an MSN.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Starting her career as a Registered Nurse, she has worked across various nursing sectors
              and held leadership positions. Throughout her career, she has passionately mentored and
              educated nurses, leading to the creation of
              <span className="text-blue-700 font-medium"> 1st Providence Healthcare Training.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
