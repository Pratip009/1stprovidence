import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";

import CustomLoader from "./components/CustomLoader";

const App = () => {
  return (
    <Suspense fallback={<CustomLoader />}>
      <Header />
      <ToastContainer />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </Suspense>
  );
};

export default App;
