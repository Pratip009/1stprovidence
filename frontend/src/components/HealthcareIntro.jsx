import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your SVG icon (use any you have, here’s an example)
import stethoscope from "../assets/wheel.svg";

const HealthcareIntro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28 font-sans bg-white">
      {/* Centered radial gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(147,197,253,0.25),transparent,transparent)]"></div>

      {/* Optional subtle blurred shapes for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200 rounded-full opacity-10 blur-3xl"></div>

      {/* Floating SVG */}
      <img
        src={stethoscope}
        alt="Stethoscope"
        className="absolute top-10 right-10 w-20 opacity-20 rotate-[15deg] animate-pulse"
      />

      <div
        className="relative max-w-6xl mx-auto px-6 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-6 leading-tight tracking-tight">
          Start Your Healthcare Career with Us
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-5">
          At{" "}
          <span className="font-semibold text-blue-800">
            1ST Providence Healthcare Training LLC
          </span>
          , quality learning starts with quality instruction. Our licensed
          trainers share real-world experience to help you succeed.
        </p>
        <p className="text-gray-700 text-lg md:text-xl mb-5">
          Certified by local and federal standards, our team stays updated
          through workshops and seminars. Using modern training modules, they
          turn expertise into practical skills.
        </p>
        <p className="text-gray-700 text-lg md:text-xl mb-10">
          Guided by expert trainers, we prepare the next generation of nursing
          professionals — ready to serve patients in the community and beyond.
        </p>

        <a
          href="#programs"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-lg font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Explore Programs
        </a>
      </div>
    </section>
  );
};

export default HealthcareIntro;
