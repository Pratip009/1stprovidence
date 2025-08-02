import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import middleLogo from "../assets/midlogo.png";
import stethoscope from "../assets/ste.svg";
import heartbeat from "../assets/wheel.svg";

const Enrollment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-b from-white via-blue-50 to-white font-exo py-16 overflow-hidden">
      {/* Jump animation keyframes */}
      <style>{`
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12%); }
        }
        .animate-jump {
          animation: jump 3s ease-in-out infinite;
        }
      `}</style>

      {/* Floating background SVGs */}
      <img
        src={stethoscope}
        alt="stethoscope"
        className="absolute top-6 left-6 w-16 md:w-24 opacity-30 animate-jump"
        style={{ filter: "drop-shadow(0 0 4px rgba(0,0,255,0.15))" }}
      />
      <img
        src={heartbeat}
        alt="heartbeat"
        className="absolute bottom-6 right-6 w-20 md:w-32 opacity-30 animate-jump"
        style={{ animationDelay: "1.5s", filter: "drop-shadow(0 0 4px rgba(0,0,255,0.15))" }}
      />

      {/* Decorative translucent shape behind */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(59, 130, 246, 0.15), transparent 70%), radial-gradient(circle at bottom right, rgba(37, 99, 235, 0.15), transparent 70%)",
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-y-10 md:gap-y-0 md:gap-x-12">
        {/* Left: Logo */}
        <div
          className="flex justify-center md:justify-center md:w-1/2"
          data-aos="fade-up"
        >
          <img
            src={middleLogo}
            alt="American Heart Association Aligned Training Site"
            className="w-72 md:w-80 lg:w-80 transition-transform duration-500 ease-in-out hover:scale-110 hover:drop-shadow-lg"
          />
        </div>

        {/* Right: Text and button */}
        <div
          className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left space-y-4 max-w-md"
          data-aos="fade-left"
        >
          <p className="text-blue-700 font-semibold text-base tracking-wider relative after:block after:bg-blue-700 after:h-1 after:w-12 after:rounded-full after:mt-2">
            Empower your future today
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            New Student Enrollment
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Join our accredited healthcare programs and take the first step toward a rewarding career. Get hands-on training, expert guidance, and certification support.
          </p>
          <a
            href="#"
            className="mt-4 inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white text-base font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
// https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg