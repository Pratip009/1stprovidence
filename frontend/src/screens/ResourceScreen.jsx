import Banner from "../components/Banner";
import bannerImg from "../assets/banner3.jpg";
import LinksGrid from "../components/LinksGrid";
import ScrollToTop from "../components/ScrollToTop";
import SocialIcons from "../components/SocialIcons";
const ResourceScreen = () => {
  return (
    <div>
      <Banner image={bannerImg} title="Student Resources" height="h-[500px]"/>
      <LinksGrid />
      <ScrollToTop />
      <SocialIcons />
    </div>
  );
};

export default ResourceScreen;
