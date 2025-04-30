import Carousel from 'react-bootstrap/Carousel';
import styles from './CarouselComponent.module.css';
import img1 from './imagenes/fotos-Z9nC-SASRd8-unsplash.jpg'
import img2 from './imagenes/frames-for-your-heart-ujEMKcsnN-s-unsplash.jpg'

const CarouselComponent = () => {

    return (
        <div className={styles.containerPrincipal}>
            <Carousel >
                <Carousel.Item>
                    <img src={img1} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img2} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
