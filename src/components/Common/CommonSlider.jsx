import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

  const CommonSlider = ({ settings, children , key }) => {
    return (
      <Slider {...settings} key={key}>
        {children}
      </Slider>
    );
  };

export default CommonSlider