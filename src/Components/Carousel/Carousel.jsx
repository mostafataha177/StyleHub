import Carousel from "react-bootstrap/Carousel";
import Card from "../Card/Card";

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Card />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Card />
      </Carousel.Item>
      <Carousel.Item>
        <Card />
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
