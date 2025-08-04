import Banner from "../components/Banner";
import bannerImg from "../assets/banner1.jpg";
import AboutSection from "../components/AboutSection";
import MissionVision from "../components/MissionVision";
import AboutCampus from "../components/AboutCampus";
import HealthcareIntro from "../components/HealthcareIntro";
import TrainerSection from "../components/TrainerSection";
import TestimonialSlider from "../components/TestimonialSlider";
import ScrollToTop from "../components/ScrollToTop";
import SocialIcons from "../components/SocialIcons";
const AboutScreen = () => {
  return (
    <div>
      <Banner image={bannerImg} title="About Us" height="h-[500px]" />
      <AboutSection />
      <MissionVision />
      <AboutCampus />
      <HealthcareIntro />
      <TrainerSection />
      <TestimonialSlider />
      <SocialIcons />
      <ScrollToTop />
    </div>
  );
};

export default AboutScreen;
