import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

export default function CorouselItem() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="corousel">
        <a href="/search">
          <img
            className="d-block w-100"
            src="/images/image.png"
            alt="First slide"
            height={410}
          />
        </a>
        <Carousel.Caption className="center">
          <strong>
            <h3>WELCOME TO GOKART</h3>
          </strong>

          <p>Now shop from leading brands with just one click.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/search">
          <img
            className="d-block w-100"
            src="/images/image1.png"
            alt="Second slide"
            height={410}
          />
        </a>

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/search">
          <img
            className="d-block w-100"
            src="/images/image2.png"
            alt="Third slide"
            height={410}
          />
        </a>

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
