import React from "react";
import Carousel from "nuka-carousel";
import imgA from "./img/bannerimg1.jpg";
import imgB from "./img/bannerimg2.jpg";
import imgC from "./img/bannerimg3.jpg";

const Tabs = () => {
  return (
    <Carousel
      wrapAround={true}
      autoplay={true}
      autoplayInterval={4000}
      speed={2000}
      slidesToShow={3}
      slideWidth={1}
      withoutControls={true}
    >
      <img src={imgA} />
      <img src={imgB} />
      <img src={imgC} />
      <img src={imgA} />
      <img src={imgB} />
      <img src={imgC} />
    </Carousel>
  );
};

export default Tabs;
