import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Map = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] hover:shadow-xl transition-all duration-500"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6229.978422838622!2d-77.262651!3d38.672116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65448305aaaab%3A0xefe08e6a50d88684!2s1549%20Old%20Bridge%20Rd%20Suite%20208%2C%20Woodbridge%2C%20VA%2022192%2C%20USA!5e0!3m2!1sen!2sph!4v1754151741645!5m2!1sen!2sph"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;
