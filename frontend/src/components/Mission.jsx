import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative h-screen overflow-auto bg-[url('https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg')] bg-cover bg-center bg-fixed"
    >
      {/* Gradient overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center h-screen z-10 px-4 font-exo">
        <div
          className="max-w-3xl text-center space-y-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Decorative gradient divider */}
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-2"></div>

          <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] text-blue-200 font-semibold">
            Our Pledge of Quality
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
            Our Mission
          </h1>
          <p className="text-sm md:text-lg text-gray-100 leading-relaxed">
            It is our mission to provide enhanced nursing training and fruitful career training programs
            to a diverse student body and the community at large. The school undertakes to produce
            entry-level, quality, skilled, and compassionate healthcare providers that can function
            effectively in a diverse, rapidly changing healthcare setting.
          </p>

          <div>
            <a
              href="#"
              className="inline-block mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:shadow-xl transform hover:-translate-y-1 active:scale-95 transition duration-300"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
