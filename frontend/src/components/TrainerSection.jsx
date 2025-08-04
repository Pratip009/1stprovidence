import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import trainer1 from "../assets/trainer1.webp";
import trainer2 from "../assets/trainer2.webp";

const trainers = [
  {
    name: "Emelia Korkor",
    title:
      "RN, MSN, Mental Health Nurse Practitioner, Board Certified Program Director",
    bio: "Emelia Korkor, RN-MSN, is a dedicated Program Director who understands the aspirations of individuals seeking to navigate their career path. With a firm belief in the power of education, Emelia recognizes that a strong educational foundation is essential in meeting the demands of an evolving and highly skilled society. She encourages individuals to embrace new experiences and ideas while pursuing their intellectual, professional, and personal goals. Emelia fosters an environment of open-mindedness and respectful dialogue, recognizing that diverse opinions and perspectives are vital to the learning process. With her expertise and passion for education, Emelia strives to empower individuals to achieve their full potential and succeed in their chosen career paths.",
    image: trainer1,
  },
  {
    name: "Leticia Kusi",
    title: "NP-MSN Instructor",
    bio: "Leticia Kusi is a nurse practitioner with extensive nursing background. Her expertise includes clinical practice and teaching. She was part of Heart & Vascular Institute at MedStar Washington Hospital Center in DC, where she cared for patients with a wide variety of vascular conditions. She specialized in vascular access, wound care, and treating and educating dialysis patients, technicians, students and nurses. In this role she educated and trained many new nursing assistants and nurses. Before becoming a nurse practitioner, Leticia was charge nurse at Woodbine Nursing Rehabilitation and Healthcare Center in Alexandria, VA. While pursuing her nursing degree, Leticia worked as unit secretary at Inova Alexandria Hospital. She graduated from Shenandoah University School of Nursing with a Bachelor of Science in Nursing in 2011 and then went on to earn a Master of Science in Nursing (MSN) from Shenandoah University. Certified in Advanced Cardiac Life Support. Leticia is certified DOT examiner and American Heart Association Basic Life support (AHA-BLS) Instructor. She is a member of the American Academy of Nurse Practitioners and the Sigma Theta Tau International Honor Society of Nursing.",
    image: trainer2,
  },
];

const TrainerSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-white font-exo overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-16"
          data-aos="fade-up"
        >
          Meet Our Expert Trainers
          <span className="block w-24 mx-auto mt-3 border-b-4 border-blue-500 rounded-full"></span>
        </h2>

        <div className="flex flex-col gap-16">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-10 bg-white rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition duration-500 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              data-aos="fade-up"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-200 shadow-md">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
                  {trainer.name}
                </h3>
                <p className="text-blue-700 text-sm md:text-base font-medium">
                  {trainer.title}
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {trainer.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
