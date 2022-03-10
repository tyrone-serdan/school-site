import React from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Articles from './Articles';

function Carousel() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item" data-value="1">
      <Articles />
    </div>,
    <div className="item" data-value="2">
      <Articles />
    </div>,
    <div className="item" data-value="3">
      <Articles />
    </div>,
    <div className="item" data-value="4">
      <Articles />
    </div>,
    <div className="item" data-value="5">
      <Articles />
    </div>,
  ];

  const Carousel = () => (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
  return <Carousel />;
}

export default Carousel;
