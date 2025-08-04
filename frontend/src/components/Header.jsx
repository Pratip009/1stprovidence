import {
  FaSignInAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { useState } from "react";
import logo from "../assets/main-logo.png";
const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      {/* Top header */}
      <div className="bg-[#00468A] text-gray-100 text-[13px] font-exo border-b border-[#ffffff1a]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          {/* Contact info */}
          <div className="flex items-center gap-2 md:gap-4 text-center md:text-left">
            {/* Mobile: phone only */}
            <span className="md:hidden flex items-center gap-1 hover:text-white transition-colors">
              <FaPhone className="text-xs" /> <span>571-494-0032</span>
            </span>

            {/* Desktop: full info */}
            <div className="hidden md:flex items-center gap-4">
              <span className="flex items-center gap-1 hover:text-white transition-colors">
                <FaMapMarkerAlt className="text-xs" />
                <span>
                  1549 Old Bridge Road, Unit 208, Woodbridge, VA 22192
                </span>
              </span>
              <span className="flex items-center gap-1 hover:text-white transition-colors">
                <FaPhone className="text-xs" />
                <span>571-494-0032</span>
              </span>
              <span className="flex items-center gap-1 hover:text-white transition-colors">
                <FaEnvelope className="text-xs" />
                <span>admin@1stprovidence.com</span>
              </span>
              <span className="hover:text-white transition-colors">
                Mon–Fri 9am–5pm, Sat by appointment, Sun closed
              </span>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#1877F2] transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#E4405F] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-[#0077B5] transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="1stProvidence Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 text-sm uppercase tracking-wide font-medium hover:text-[#00468A] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 text-sm uppercase tracking-wide font-medium hover:text-[#00468A] transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/programs"
                className="text-gray-700 text-sm uppercase tracking-wide font-medium hover:text-[#00468A] transition-colors"
              >
                Programs
              </Link>
              <Link
                to="/tuition"
                className="text-gray-700 text-sm uppercase tracking-wide font-medium hover:text-[#00468A] transition-colors"
              >
                Tuition
              </Link>
              <Link
                to="/resources"
                className="text-gray-700 text-sm uppercase tracking-wide font-medium hover:text-[#00468A] transition-colors"
              >
                Student Resources
              </Link>
              <Link
                to="/schedule"
                className="text-gray-700 text-sm uppercase tracking-wide font-medium hover:text-[#00468A] transition-colors"
              >
                Course Schedule
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 text-sm uppercase tracking-wide font-medium hover:text-[#00468A] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 text-sm uppercase tracking-wide font-medium hover:text-[#00468A] transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/gallery"
                className="text-gray-700 text-sm uppercase tracking-wide font-medium hover:text-[#00468A] transition-colors"
              >
                Gallery
              </Link>
            </div>

            {/* Sign In / user dropdown (desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              {userInfo ? (
                <div className="relative">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex items-center text-gray-800 text-sm font-medium hover:text-[#00468A] transition-colors focus:outline-none"
                  >
                    <span className="mr-1">{userInfo.name}</span>
                    <svg
                      className={`h-4 w-4 transform transition-transform ${
                        menuOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {menuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                      <Link
                        to="/profile"
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={() => {
                          logoutHandler();
                          setMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-[#00468A] text-white flex items-center rounded-md px-3 py-1.5 text-sm font-medium hover:bg-[#003366] transition-colors"
                >
                  <FaSignInAlt className="mr-1" /> Sign In
                </Link>
              )}
            </div>

            {/* Hamburger icon - mobile only */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-gray-800 hover:text-[#00468A] transition-colors focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile sidebar overlay & sidebar */}
        <>
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
          )}
          <div
            className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg z-50 flex flex-col p-4 space-y-4 transform transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="self-end text-gray-800 hover:text-[#00468A]"
            >
              ✕
            </button>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 text-sm uppercase font-medium hover:text-[#00468A]"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 text-sm uppercase font-medium hover:text-[#00468A]"
            >
              About Us
            </Link>
            <Link
              to="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 text-sm uppercase font-medium hover:text-[#00468A]"
            >
              Programs
            </Link>
            <Link
              to="/tuition"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 text-sm uppercase font-medium hover:text-[#00468A]"
            >
              Tuition
            </Link>
            <Link
              to="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 text-sm uppercase font-medium hover:text-[#00468A]"
            >
              Student Resources
            </Link>
            <Link
              to="/schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 text-sm uppercase font-medium hover:text-[#00468A]"
            >
              Course Schedule
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 text-sm uppercase font-medium hover:text-[#00468A]"
            >
              Contact Us
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 text-sm uppercase font-medium hover:text-[#00468A]"
            >
              Blog
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 text-sm uppercase font-medium hover:text-[#00468A]"
            >
              Gallery
            </Link>

            {userInfo ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 text-sm uppercase font-medium hover:text-[#00468A]"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logoutHandler();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 text-sm uppercase font-medium hover:text-[#00468A]"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#00468A] text-white flex items-center rounded-md px-3 py-1.5 text-sm font-medium hover:bg-[#003366] transition-colors"
              >
                <FaSignInAlt className="mr-1" /> Sign In
              </Link>
            )}
          </div>
        </>
      </div>
    </header>
  );
};

export default Header;
