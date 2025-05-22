import Carousel from "react-bootstrap/Carousel";
import styles from "./CarouselComponent.module.css";
import img_banner1 from "./imagenes/img_banner_1.avif";
import img_banner2 from "./imagenes/img_banner_2.avif";

const CarouselComponent = () => {
  return (
    <div className={styles.containerPrincipal}>
      <Carousel>
        <Carousel.Item>
          <img src={img_banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img_banner2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
