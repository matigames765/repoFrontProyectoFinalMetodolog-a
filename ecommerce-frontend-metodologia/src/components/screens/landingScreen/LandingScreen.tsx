
import CarouselComponent from '../../ui/Landing/Carrusel/CarouselComponent'
import { Footer } from '../../ui/Footer/Footer'

import { NavBarLanding } from '../../ui/Landing/NavBarLanding/NavBarLanding'
import { PrincipalImagesLanding } from '../../ui/Landing/PrincipalImagesLanding/PrincipalImagesLanding'
import styles from './LandingScreen.module.css'
import { HeaderDescuento } from '../../ui/HeaderDescuento/HeaderDescuento'

export const LandingScreen = () => {
  return (
    <div className={styles.landingContainer}>
      <HeaderDescuento/>
      <NavBarLanding />
      <PrincipalImagesLanding />
      <CarouselComponent/>
      <Footer />
    </div>
  )
}
