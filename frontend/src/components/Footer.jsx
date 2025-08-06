import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import logo from "../assets/main-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 text-sm border-t border-gray-700 font-exo">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & about */}
        <div className="space-y-4">
          <img src={logo} alt="1stprovidence" className="w-20 bg-white p-2 rounded" />
          <p className="text-gray-400">
            Online or in person, 1stprovidence helps you gain real skills for real careers.
            Learn fast, train smart, and step into the workforce with confidence. We’re here for you!
          </p>
          <div className="flex space-x-3 mt-2 text-gray-400">
            <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-600" /></a>
            <a href="#"><FaGithub className="hover:text-white" /></a>
          </div>
        </div>

        {/* Important Pages */}
        <div>
          <h3 className="text-gray-300 uppercase font-semibold mb-3">Important Pages</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Privacy & Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Courses Categories */}
        <div>
          <h3 className="text-gray-300 uppercase font-semibold mb-3">Courses Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Healthcare</a></li>
            <li><a href="#" className="hover:underline">Programming</a></li>
            <li><a href="#" className="hover:underline">Networking</a></li>
            <li><a href="#" className="hover:underline">Management</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-gray-300 uppercase font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li>1549 Old Bridge Road, Unit 208</li>
            <li>Woodbridge, VA 22192</li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-pink-400" /> <span>571-494-0032</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-purple-400" /> <span>admin@1stprovidence.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <FaClock className="text-blue-400 mt-1" />
              <span>
                Monday–Friday: 9am–5pm
                <br />
                Saturday: By Appointment
                <br />
                Sunday: Closed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 pb-6 text-center text-gray-500 text-xs">
        © Copyright {new Date().getFullYear()}, All Rights Reserved by 1stprovidence
      </div>
    </footer>
  );
};

export default Footer;
