import React, { useState } from 'react';
import '../../styles/_carousel.scss'
import Title from './Title';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import Perturbation from '../../data/perturbation.pdf';
import AD from '../../data/AztecDiamond.pdf'
import Mandelbrot from '../../data/MandelbrotSet.pdf'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators, 
  CarouselCaption,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const items = [
  {
    src: AD,
    altText: 'Aztec',
    key: 1,
  },
  {
    src: Perturbation,
    altText: 'Perturbation of the Mandelbrot Set',
    key: 2,
  },
  {
    src: Mandelbrot,
    altText: 'Perturbation of the Mandelbrot Set',
    key: 3,
  },
];

function ControlledCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  } 
  
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
      <CarouselItem className='relative display-none float-left w-full'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <a href={item.src} without rel="noopener noreferrer" target="_blank">
        <Document file={item.src} onLoadSuccess={onDocumentLoadSuccess} className='flex flex-row justify-center'>
          <Page pageNumber={pageNumber} />
        </Document>
        </a>
      </CarouselItem>
    );
  });

  return (
    <>
      <div className='margin-auto mt-20'>
         <Title >&lt;papers&gt;</Title>
      </div>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Prev"
        onClickHandler={previous}
      >
      </CarouselControl>
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    <div className='margin-auto mt-4'>
    <Title >&lt;/papers&gt;</Title>
 </div>
 </>
  );
}

export default ControlledCarousel;