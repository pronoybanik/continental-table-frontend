import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";

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
        className="my-8"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <p className="text-2xl text-center -mt-12 text-black font-bold uppercase">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <p className="text-2xl text-center -mt-12 text-black font-bold uppercase">
            Pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <p className="text-2xl text-center -mt-12 text-black font-bold uppercase">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <p className="text-2xl text-center -mt-12 text-black font-bold uppercase">
            desert
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <p className="text-2xl text-center -mt-12 text-black font-bold uppercase">
            Salads
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
