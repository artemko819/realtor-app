import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
export const ImageScroolBar = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box>
      <Slider {...settings}>
        {data.map((item) => (
          <Box key={item.id}>
            <Image
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width={1000}
              height={500}
              sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
              alt="image slider"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
