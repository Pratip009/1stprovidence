import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import stethoscope from "../assets/med.svg"; // top-left SVG
import heartbeat from "../assets/med2.svg"; // bottom-right SVG

const Wellcome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-r from-[#19215f] to-[#0a65b5eb] font-exo py-16 md:py-24 px-6 md:px-8 overflow-hidden">
      {/* Jump animation keyframes */}
      <style>{`
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10%); }
        }
        .animate-jump {
          animation: jump 4s ease-in-out infinite;
        }
      `}</style>

      {/* Floating SVGs */}
      <img
        src={heartbeat}
        alt="decorative heartbeat"
        className="absolute top-4 left-4 w-16 md:w-24 opacity-20 animate-jump"
      />
      <img
        src={stethoscope}
        alt="decorative stethoscope"
        className="absolute bottom-4 right-4 w-20 md:w-28 opacity-20 animate-jump"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left: welcome text */}
        <div className="space-y-5" data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Welcome to <span className="text-[#EA0906]">1ST Providence</span>
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            We prepare students for rewarding careers in healthcare, combining
            accredited programs, expert guidance, and hands-on training.
          </p>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            Become a skilled, compassionate professional patients can depend on.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold px-8 py-3 rounded-full shadow hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            Explore Programs
          </a>
        </div>

        {/* Right: highlights */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          data-aos="fade-left"
        >
          {[
            "Accredited Programs",
            "Experienced Faculty",
            "Hands-on Training",
            "Certification Support",
            "Modern Labs",
            "Small Class Sizes",
            "High Job Placement",
            "Flexible Schedules",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/20 border border-white/30 rounded-xl text-center p-3 md:p-4 shadow hover:bg-white/30 transition"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <p className="text-white font-semibold text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wellcome;
