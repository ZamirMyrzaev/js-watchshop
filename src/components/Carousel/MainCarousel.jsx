import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MainCarousel.css'
import img1 from '../../assets/Rectangle 3.png'
import img2 from '../../assets/clock-watch.jpg'
import img3 from '../../assets/clock-watch2.jpg'

const MainCarousel = () => {
    return (
        <>
        <Carousel>
  <Carousel.Item interval={55551000}>
    <img
      className="d-block w-100 img"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1100}>
    <img
      className="d-block w-100 img"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img"
      src={img3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default MainCarousel;