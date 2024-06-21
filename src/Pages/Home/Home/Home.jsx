import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ContinentalInfo from "../ContinentalInfo/ContinentalInfo";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Card from "../Card/Card";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Continental Table | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <ContinentalInfo />
      <PopularMenu />
      <Card />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
