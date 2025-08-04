import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutCampus = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white font-exo relative overflow-hidden">
      {/* Decorative blurred circles for depth */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 -right-10 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="w-full px-4 md:px-8 relative z-10">
  {/* Title */}
  <div data-aos="fade-up" className="mb-10 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-[#00468A] leading-tight inline-block relative">
      <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
        Our Campus
      </span>
      <span className="block w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mt-2"></span>
    </h2>
  </div>

  {/* Text */}
  <div className="max-w-5xl mx-auto">
    <p
      data-aos="fade-up"
      data-aos-delay="100"
      className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed text-center"
    >
      1ST Providence Healthcare Training LLC is located at{" "}
      <span className="font-semibold text-blue-800">
        1549 Old Bridge Road, Unit 208, Woodbridge, VA 22192
      </span>.
      Our training center offers both direct and virtual instruction with
      state-of-the-art facilities and equipment. We follow the latest standards
      for nurse training, ensuring our campus remains an environment conducive
      to learning.
    </p>

    <p
      data-aos="fade-up"
      data-aos-delay="150"
      className="text-gray-700 text-lg md:text-xl mb-12 text-center"
    >
      Visit our training center today.
    </p>
  </div>

  {/* CTA card, now wider */}
  <div
    data-aos="fade-up"
    data-aos-delay="200"
    className="relative rounded-3xl border border-blue-200 shadow-xl p-8 md:p-12 bg-white text-center mx-auto max-w-6xl"
  >
    <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-blue-50 via-transparent to-blue-100 opacity-40 pointer-events-none"></div>

    <h3 className="text-2xl md:text-3xl font-semibold text-[#00468A] mb-3">
      Get Started
    </h3>
    <p className="mb-6 md:text-lg text-gray-700">
      Ready to start your career in healthcare? We’re here to help you
      take the next step! Enroll in our high-quality training programs today.
      Contact us for more information.
    </p>
    <a
      href="#contact"
      className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
    >
      Contact Us
    </a>
  </div>
</div>

    </section>
  );
};

export default AboutCampus;
