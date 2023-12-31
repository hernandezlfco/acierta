import React, { useState } from 'react';
import logo from '../../resources/img/test.png';
import './Slider.scss';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
    src: logo
  },
  {
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
    src: logo
  },
  {
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
    src: logo
  }
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };


  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        style={{ background: 'white' }}
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} style={{ width: '80%', height: 'auto', paddingTop: '80px' }} />
      </CarouselItem>
    );
  });

  return (
    <div className="carousel-container">
      <Carousel style={{ backgroundColor: 'white' }} activeIndex={activeIndex} interval={null} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          style={{ left: '-30px !important' }}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <button className="moreKnow">Saber más</button>
    </div>
  );
}

export default Slider;