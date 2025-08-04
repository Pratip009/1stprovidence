import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-white font-exo py-12">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info & Map */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-right">
              Get in Touch
            </h2>

            <div className="space-y-3">
              <div className="flex items-start bg-gray-50 rounded-xl shadow-sm p-3" data-aos="fade-up">
                <FaMapMarkerAlt className="text-blue-500 text-xl mr-3 mt-1" />
                <p className="text-gray-700 text-sm sm:text-base">
                  1549 Old Bridge Road, Unit 208, Woodbridge, VA 22192
                </p>
              </div>

              <div className="flex items-start bg-gray-50 rounded-xl shadow-sm p-3" data-aos="fade-up">
                <FaEnvelope className="text-blue-500 text-xl mr-3 mt-1" />
                <p className="text-gray-700 text-sm sm:text-base">admin@1stprovidence.com</p>
              </div>

              <div className="flex items-start bg-gray-50 rounded-xl shadow-sm p-3" data-aos="fade-up">
                <FaPhone className="text-blue-500 text-xl mr-3 mt-1" />
                <p className="text-gray-700 text-sm sm:text-base">571-494-0032</p>
              </div>

              <div className="flex items-start bg-gray-50 rounded-xl shadow-sm p-3" data-aos="fade-up">
                <HiOutlineClock className="text-blue-500 text-xl mr-3 mt-1" />
                <p className="text-gray-700 text-sm sm:text-base">
                  Monday–Friday 9am–5pm | Saturday by appointment | Sunday Closed
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md mt-4" data-aos="fade-up">
            <iframe
              title="1st Providence Healthcare Training Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.6917250325076!2d-77.30133232426884!3d38.67589937175909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b66f87c0afad47%3A0x3c5cfb139c868f96!2s1549%20Old%20Bridge%20Rd%20%23208%2C%20Woodbridge%2C%20VA%2022192%2C%20USA!5e0!3m2!1sen!2sus!4v1691942301441!5m2!1sen!2sus"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl shadow-2xl hover:shadow-blue-200 p-6 flex flex-col space-y-4 transform hover:-translate-y-1 transition duration-300"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">Send Us a Message</h2>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Name</label>
            <input
              type="text"
              className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-md px-3 py-2 shadow-inner text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-md px-3 py-2 shadow-inner text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Mobile Number</label>
            <input
              type="tel"
              className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-md px-3 py-2 shadow-inner text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g., +1 555-123-4567"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-md px-3 py-2 shadow-inner text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 rounded-md transition duration-300 shadow-md hover:shadow-lg">
            <FaPaperPlane className="text-white text-lg" />
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
