import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import database from "./animations/database.json";
import Lottie from "react-lottie";
import frontEnd from "./animations/building.json";
import backEnd from "./animations/backend.json";
import dataStructure from "./animations/dataStructure.json";

const databaseOptions = {
  loop: true,
  autoplay: true,
  animationData: database,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const frontEndOptions = {
    loop: true,
    autoplay: true,
    animationData: frontEnd,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const backEndOptions = {
    loop: true,
    autoplay: true,
    animationData: backEnd,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const dataStructureOptions = {
    loop: true,
    autoplay: true,
    animationData: dataStructure,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
const TechnologyCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <div>
        <Lottie
          options={frontEndOptions}
          style={{ height: "180px", width: "200px" }}
        ></Lottie>
        <div className="myCarousel">
          <h3>Front-End</h3>
        </div>
      </div>
      <div>
        <Lottie
          options={backEndOptions}
          style={{ height: "180px", width: "200px" }}
        ></Lottie>
        <div className="myCarousel">
          <h3>Back-End</h3>
        </div>
      </div>
      <div>
        <Lottie
          options={dataStructureOptions}
          style={{ height: "180px", width: "200px"}}
        ></Lottie>
        <div className="myCarousel">
          <h3>Data Structures</h3>
        </div>
      </div>
      <div>
        <Lottie
          options={databaseOptions}
          style={{ height: "180px", width: "200px" }}
        ></Lottie>
        <div className="myCarousel">
          <h3>Database</h3>
        </div>
      </div>
    </Carousel>
  );
};

export default TechnologyCarousel;
