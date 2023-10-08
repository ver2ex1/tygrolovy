import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useWindowSize from '@/utils/useWindowSize';
import { Box, Typography } from '@mui/material';
import { useCustomCarouselStyles } from './styles';

const CustomCarousel = ({ images }) => {
  const classes = useCustomCarouselStyles();
  const { width } = useWindowSize();
  const groupImages = images => {
    const itemsPerGroup = width < 660 ? 1 : 4;
    const grouped = [];
    for (let i = 0; i < images.length; i += itemsPerGroup) {
      grouped.push(images.slice(i, i + itemsPerGroup));
    }
    return grouped;
  };

  const groupedImages = groupImages(images);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomDot = ({ index, onClick, active }) => {
    return (
      <Typography
        style={{
          background: active ? '#2B3826' : '#C7D3C5',
        }}
        sx={classes.customDot}
        onClick={() => onClick()}
      ></Typography>
    );
  };

  return (
    <Box sx={classes.wrapper}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        showDots
        customDot={<CustomDot />}
        renderDotsOutside
      >
        {groupedImages.map((group, groupIndex) => (
          <Box sx={classes.imagesWrapper} key={groupIndex}>
            {group.map((imageSrc, index) => (
              <Image
                src={imageSrc}
                alt={`Slide ${groupIndex * 4 + index + 1}`}
                width={333}
                height={215}
                key={index}
                style={{
                  objectFit: 'cover',
                  width: width < 660 ? '100%' : '25%',
                }}
              />
            ))}
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CustomCarousel;
