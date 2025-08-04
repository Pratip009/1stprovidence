import Banner from "../components/Banner";
import bannerImg from "../assets/banner2.jpg";
import TuitionTable from "../components/TuitionTable";
import ScrollToTop from "../components/ScrollToTop";
import SocialIcons from "../components/SocialIcons";
const TutionScreen = () => {
  return (
    <div>
      <Banner image={bannerImg} title="Tuition" height="h-[500px]"/>
      <TuitionTable />
      <ScrollToTop />
      <SocialIcons />
    </div>
  );
};

export default TutionScreen;
