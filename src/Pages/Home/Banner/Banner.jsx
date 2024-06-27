import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageOne from "../../../assets/home/01.jpg";
import imageTwo from "../../../assets/home/02.jpg";
import imageThree from "../../../assets/home/03.png";
import imageFore from "../../../assets/home/04.jpg";
import imageFive from "../../../assets/home/05.png";
import imageSix from "../../../assets/home/05.png";
import "./Banner.css"; // Assuming a separate CSS file for styling

const Banner = () => {
  return (
    <div className="carousel-container">
      <Carousel autoPlay>
        <div className="carousel-item">
          <img src={imageOne} alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src={imageTwo} alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src={imageThree} alt="Image 3" />
        </div>
        <div className="carousel-item">
          <img src={imageFore} alt="Image 4" />
        </div>
        <div className="carousel-item">
          <img src={imageFive} alt="Image 5" />
        </div>
        <div className="carousel-item">
          <img src={imageSix} alt="Image 6" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
