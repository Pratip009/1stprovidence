import Banner from "../components/Banner";
import bannerImg from "../assets/banner4.jpg";
import CourseSchedule from "../components/CourseSchedule";
import ScrollToTop from "../components/ScrollToTop";
import SocialIcons from "../components/SocialIcons";
const CourseScheduleScreen = () => {
  return (
    <div>
      <Banner image={bannerImg} title="Course Schedule" height="h-[500px]"/>
      <CourseSchedule />
      <ScrollToTop />
      <SocialIcons />
    </div>
  );
};

export default CourseScheduleScreen;
