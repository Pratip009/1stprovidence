import Banner from "../components/Banner";
import bannerImg from "../assets/sthetoscope.jpg";
import ContactUs from "../components/ContactUs.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SocialIcons from "../components/SocialIcons.jsx";
const ContactScreen = () => {
  return (
    <div>
      <Banner image={bannerImg} title="Contact Us" height="h-[500px]"/>
      <ContactUs />
      <ScrollToTop />
      <SocialIcons />
    </div>
  );
};

export default ContactScreen;
