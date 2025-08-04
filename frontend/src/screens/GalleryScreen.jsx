import Banner from "../components/Banner";
import bannerImg from "../assets/banner6.avif";
import ScrollToTop from "../components/ScrollToTop";
import SocialIcons from "../components/SocialIcons";
import GalleryTabs from "../components/GalleryTabs"
const GalleryScreen = () => {
  return (
    <div>
      <Banner image={bannerImg} title="Gallery" height="h-[500px]" />
      <SocialIcons />
      <ScrollToTop/>
      <GalleryTabs />
    </div>
  );
};

export default GalleryScreen;
