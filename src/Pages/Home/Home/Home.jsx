import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ContinentalInfo from "../ContinentalInfo/ContinentalInfo";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ContinentalInfo />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
