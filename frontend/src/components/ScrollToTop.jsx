import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg transition-transform duration-200 active:scale-90 hover:scale-105 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTop;
