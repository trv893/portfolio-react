import React from "react";
import Typewriter from "typewriter-effect";
import Carousel from 'react-bootstrap/Carousel';

function Type() {
  return (
    <div style={{height:100}}>
      <span>
        Targeting technical position at a nonprofit with international reach!
      </span>

      <Carousel nextIcon="" nextLabel="" prevLabel="" prevIcon="" style={{height:100}}>
        <Carousel.Item interval={1000}>
          <Carousel.Caption>Developer - Web+IOT</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <Carousel.Caption>Data Analysis - SQL+NoSQL</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <Carousel.Caption>Online Marketing</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Type;
