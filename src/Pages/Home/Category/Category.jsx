import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import "./Category.css"; // Make sure to import your CSS file

const Category = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-20">
      <SectionTitle
        subHeading={"From 10.00am to 10.00pm "}
        heading={"order online"}
      ></SectionTitle>

      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="my-8 "
      >
        <SwiperSlide>
          <div className="overlay-container">
            <img src={slider1} alt="Salads" />
            <div className="overlay"></div>
            <p className="text-2xl text-center -mt-12 font-serif pb-5 text-white relative  font-bold uppercase">
              Salads
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay-container">
            <img src={slider2} alt="Pizzas" />
            <div className="overlay"></div>
            <p className="text-2xl text-center -mt-12 font-serif pb-5 text-white relative  font-bold uppercase">
              Pizzas
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay-container">
            <img src={slider3} alt="Soups" />
            <div className="overlay"></div>
            <p className="text-2xl text-center -mt-12 font-serif pb-5 text-white relative  font-bold uppercase">
              Soups
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay-container">
            <img src={slider4} alt="Desert" />
            <div className="overlay"></div>
            <p className="text-2xl text-center -mt-12 font-serif pb-5 text-white relative  font-bold uppercase">
              Desert
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay-container">
            <img src={slider5} alt="Salads" />
            <div className="overlay"></div>
            <p className="text-2xl text-center -mt-12 font-serif pb-5 text-white relative  font-bold uppercase">
              Salads
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
