import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sliderOne from "../assets/certsxprojects/web_dev1.jpeg";
import sliderTwo from "../assets/certsxprojects/code_sec2.jpeg";
import sliderThree from "../assets/certsxprojects/sols_through_code.jpeg"; 

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-content1">
            <img src={sliderOne} alt="Slider 1" />
          <div className="text-overlay">
            <span id="t-1">Crafting Web Experience that Inspire</span>
          </div>
          <div className="gradient-overlay2"></div>
        </div>
        <div className="slider-content2">
          <img src={sliderTwo} alt="Slider 2" />
          <div className="text-overlay">
            <span id="t-2">Security at Every Line of Code</span>
          </div>
          <div className="gradient-overlay2"></div>
        </div>
        <div className="slider-content3">
          <img src={sliderThree} alt="Slider 3" />
          <div className="text-overlay">
            <span id="t-3">Solving Real Problems Through Code</span>
          </div>
          <div className="gradient-overlay2"></div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;