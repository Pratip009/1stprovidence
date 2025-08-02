import Hero from "../components/Hero";
import Enrollment from "../components/Enrollment";
import Wellcome from "../components/Wellcome";
import Mission from "../components/Mission";
import Map from "../components/Map.jsx";
import SocialIcons from "../components/SocialIcons";
import ScrollToTop from "../components/ScrollToTop.jsx";
const HomeScreen = () => {
  return (
    <div className="">
      <Hero />
      <Enrollment />
      <Wellcome />
      <Mission />
      <Map />
      <SocialIcons/>
      <ScrollToTop/>
    </div>
  );
};
export default HomeScreen;
