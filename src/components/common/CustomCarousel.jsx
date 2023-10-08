import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const groupImages = images => {
    const grouped = [];
    for (let i = 0; i < images.length; i += 4) {
      grouped.push(images.slice(i, i + 4));
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
      <span
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: active ? 'blue' : 'gray',
          margin: '0 5px',
          cursor: 'pointer',
          top: '10',
        }}
        onClick={() => onClick()}
      ></span>
    );
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      afterChange={index => setCurrentSlide(index)}
      arrows={false}
      showDots
      customDot={<CustomDot />}
    >
      {groupedImages.map((group, groupIndex) => (
        <div key={groupIndex} style={{ display: 'flex', gap: '10px' }}>
          {group.map((imageSrc, index) => (
            <Image
              src={imageSrc}
              alt={`Slide ${groupIndex * 4 + index + 1}`}
              width={333}
              height={215}
              key={index}
              style={{ objectFit: 'cover', width: '25%' }}
            />
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
