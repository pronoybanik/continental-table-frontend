import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <SectionTitle
        heading="testimonials"
        subHeading="what our client say"
      ></SectionTitle>

      <div className="my-14">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-[70%]"
        >
          {review.map((reviewItem) => (
            <SwiperSlide key={reviewItem?._id}>
              <div className="mx-20 flex items-center flex-col">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={reviewItem?.rating}
                  readOnly
                />
                <p className="py-2">{reviewItem?.details}</p>
                <h1 className="text-3xl text-[#D99904] font-semibold uppercase ">
                  {reviewItem?.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
