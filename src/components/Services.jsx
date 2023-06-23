import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/carousel1.jpg";
import img2 from "../assets/carousel2.jpg";
import img3 from "../assets/carousel3.jpg";
import img4 from "../assets/carousel4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        interval={2000}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">DESIGING CUSTOM COMPUTERS </p>
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">SKILL BUILDING COURSES AND COUNSELLING</p>
        </div>
        <div>
          <img src={img3} alt="Item3" />
          <p className="legend">QUICK COMPUTER REPAIRING AT YOUR OWN HOME</p>
        </div>
        <div>
          <img src={img4} alt="Item4" />
          <p className="legend">LIVE UPDATES </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
