import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import { Box, Typography } from "@mui/material";

import stars from "../../Assets/Images/stars.png";
import cote from "../../Assets/Images/cote.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  {
    text1:
      "The lab-grown diamond portal market is expected to reach $5.46 billion by 2026, according to a report by Grand View Research. The market is growing.",
    text2: "Minik Nielsen",
    text3: "Customer",
  },
  {
    text1:
      "The lab-grown diamond portal market is expected to reach $5.46 billion by 2026, according to a report by Grand View Research. The market is growing.",
    text2: "Minik Nielsen",
    text3: "Customer",
  },
  {
    text1:
      "The lab-grown diamond portal market is expected to reach $5.46 billion by 2026, according to a report by Grand View Research. The market is growing.",
    text2: "Minik Nielsen",
    text3: "Customer",
  },
];
const AppSlider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <Box className="storiesCard">
                <Box className="bgBox"></Box>
                <Box className="starBox">
                  <img src={stars} />
                </Box>
                <Box className="cote">
                  <img src={cote} />
                </Box>
                <Typography>{imageUrl.text1}</Typography>
                <span>{imageUrl.text2}</span>
                <samp>{imageUrl.text3}</samp>
              </Box>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default AppSlider;
