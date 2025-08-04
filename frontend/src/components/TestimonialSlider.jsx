/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";

const testimonials = [
  {
    image: client1,
    name: "Sarah Johnson",
    designation: "Registered Nurse",
    message:
      "The training was incredibly hands-on and relevant to real-world scenarios. The trainers truly care about student success!",
  },
  {
    image: client2,
    name: "Michael Lee",
    designation: "Healthcare Assistant",
    message:
      "I appreciated the modern teaching approach. The program helped me gain confidence and practical skills quickly.",
  },
  {
    image: client3,
    name: "Emily Davis",
    designation: "Certified Nursing Assistant",
    message:
      "A supportive learning environment with amazing trainers. Highly recommend for anyone starting their healthcare journey!",
  },
];

const TestimonialSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-white font-exo overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute top-[-10px] left-[-60px] w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[450px] h-[450px] bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="max-w-[90rem] mx-auto px-4 md:px-10 relative z-10" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-6">
          What Our Students Say
        </h2>
        <div className="w-24 mx-auto border-b-4 border-blue-500 rounded-full mb-12"></div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={60}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-4 border-blue-400 shadow-lg"
                  />
                </div>

                {/* Name & designation */}
                <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-blue-700 text-sm md:text-base mb-5">
                  {testimonial.designation}
                </p>

                {/* Message bubble */}
                <div className="relative max-w-4xl mx-auto">
                  {/* Decorative quote icon */}
                  <svg
                    className="absolute top-[-20px] left-4 w-10 h-10 text-blue-200 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.17 6A4.17 4.17 0 003 10.17V13a4 4 0 004 4h.5A2.5 2.5 0 0010 14.5v-5A2.5 2.5 0 007.5 7H7.17zm9 0A4.17 4.17 0 0012 10.17V13a4 4 0 004 4h.5A2.5 2.5 0 0019 14.5v-5A2.5 2.5 0 0016.5 7h-.33z" />
                  </svg>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed p-6 md:p-8 rounded-2xl border border-blue-100 bg-white/70 backdrop-blur-sm shadow-xl">
                    "{testimonial.message}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
