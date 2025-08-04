import { lazy, Suspense } from "react";
import CustomLoader from "../components/CustomLoader";

const Hero = lazy(() => import("../components/Hero"));
const Enrollment = lazy(() => import("../components/Enrollment"));
const Wellcome = lazy(() => import("../components/Wellcome"));
const Mission = lazy(() => import("../components/Mission"));
const Map = lazy(() => import("../components/Map.jsx"));
const SocialIcons = lazy(() => import("../components/SocialIcons"));
const ScrollToTop = lazy(() => import("../components/ScrollToTop.jsx"));

const HomeScreen = () => {
  return (
    <div className="">
      <Suspense fallback={<CustomLoader />}>
        <Hero />
        <Enrollment />
        <Wellcome />
        <Mission />
        <Map />
        <SocialIcons />
        <ScrollToTop />
      </Suspense>
    </div>
  );
};

export default HomeScreen;
