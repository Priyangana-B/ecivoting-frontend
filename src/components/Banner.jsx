import React, { useEffect, useRef } from 'react';
import '../assets/css/Media/Banner.css';

import voterImg from '../assets/Images/voter.jpeg';
import electingImg from '../assets/Images/electing.jpeg';
import leapImg from '../assets/Images/leap.jpeg';
import atlasImg from '../assets/Images/atlas.jpeg';
import ECOImg from '../assets/Images/ECO.jpeg';
import electors from '../assets/Images/electors.jpeg';

const Banner = () => {
  const containerRef = useRef(null);

  const images = [
    voterImg,
    electingImg,
    leapImg,
    atlasImg,
    ECOImg,
    electors,
  ];

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    let requestId;

    const scrollStep = () => {
      // Increment scroll amount
      scrollAmount += 0.5; // Adjust speed here (higher = faster)

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0; // reset to start for seamless loop
      }

      container.scrollLeft = scrollAmount;

      requestId = requestAnimationFrame(scrollStep);
    };

    requestId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(requestId);
  }, []);

  // We duplicate the images for a seamless loop
  const allImages = [...images, ...images];

  return (
    <div className="banner-container" ref={containerRef}>
      <div className="scroll-track">
        {allImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Banner ${idx + 1}`}
            className="scroll-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
