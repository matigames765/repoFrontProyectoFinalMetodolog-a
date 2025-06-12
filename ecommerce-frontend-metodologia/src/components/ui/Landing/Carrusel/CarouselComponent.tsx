import Carousel from "react-bootstrap/Carousel";

import img_banner1 from "../../../../Imagenes/img_banner1.jpg";
import img_banner2 from "../../../../Imagenes/img_banner2.jpg";
import img_banner3 from "../../../../Imagenes/img_banner3.jpg";
import img_banner4 from "../../../../Imagenes/img_banner4.jpg";

import styles from "./CarouselComponent.module.css";

const CarouselComponent = () => {
  return (
    <div className={`m-0 px-0 ${styles.carouselContainer}`}>
      <Carousel fade>
        <Carousel.Item>
          <img
            src={img_banner1}
            alt="First slide"
            className={`d-block w-100 img-fluid ${styles.carouselImage}`}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img_banner2}
            alt="Second slide"
            className={`d-block w-100 img-fluid ${styles.carouselImage}`}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img_banner3}
            alt="Third slide"
            className={`d-block w-100 img-fluid ${styles.carouselImage}`}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img_banner4}
            alt="Fourth slide"
            className={`d-block w-100 img-fluid ${styles.carouselImage}`}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
