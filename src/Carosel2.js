import React from "react";
import Carousel from "nuka-carousel";
import imgA from "./img/main1.jpg";
import imgB from "./img/main2.jpg";
import imgC from "./img/main3.jpg";
import imgD from "./img/main4.jpg";
import imgE from "./img/main5.jpg";
import imgF from "./img/main6.jpg";

export default class extends React.Component {
  render() {
    return (
      <Carousel
        wrapAround={true}
        autoplay={true}
        autoplayInterval={4000}
        speed={2000}
        withoutControls={true}
      >
        <img src={imgA} />
        <img src={imgB} />
        <img src={imgC} />
        <img src={imgD} />
        <img src={imgE} />
        <img src={imgF} />
      </Carousel>
    );
  }
}
