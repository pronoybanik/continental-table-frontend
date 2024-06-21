import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import arrowIcon from "../assets/home/icons8-arrow-100.png";

const Main = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const location = useLocation();

  const removeNavBarAndFooter = location.pathname.includes("/login");

  return (
    <div>
      {removeNavBarAndFooter || <NavBar />}
      <Outlet />
      {removeNavBarAndFooter || <Footer />}
      <div>
        <button
          className="fixed right-4 bottom-2 z-10 rounded-full border border-indigo-600 bg-[#a2c7f5] p-3 text-white hover:bg-white hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          onClick={scrollToTop}
        >
          <span className="sr-only">Scroll to top</span>
          <img className="w-8 h-8" src={arrowIcon} alt="Arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default Main;
