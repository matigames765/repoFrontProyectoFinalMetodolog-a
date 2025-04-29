import Carousel from 'react-bootstrap/Carousel';
import styles from './CarouselComponent.module.css';
import img1 from './imagenes/fotos-Z9nC-SASRd8-unsplash.jpg'
import img2 from './imagenes/frames-for-your-heart-ujEMKcsnN-s-unsplash.jpg'
import { useState } from 'react';

const CarouselComponent = () => {
    const [index, setIndex] = useState<number>(0);

    // este handler recibe selectedIndex y e 
    const handleSelect = (selectedIndex: number, e: Record<string, unknown> | null) => {
        console.log(e)
        setIndex(selectedIndex);
    };


    return (
        <div className={styles.containerPrincipal}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
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
