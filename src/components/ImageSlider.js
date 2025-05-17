import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-content1"><img src="/images/web_dev1.jpeg" alt="Slider 1" /></div>
        <div className="slider-content2"><img src="/images/code_sec2.jpeg" alt="Slider 2" /></div>
        <div className="slider-content3"><img src="/images/sols_through_code.jpeg" alt="Slider 3" /></div>
      </Slider>
    </div>
  );
};

export default ImageSlider;