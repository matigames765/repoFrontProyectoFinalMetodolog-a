
import CarouselComponent from '../../ui/Landing/Carrusel/CarouselComponent'
import { Footer } from '../../ui/Footer/Footer'
import { HeaderDescuento } from '../../ui/HeaderDescuento/HeaderDescuento'
import { NavBarLanding } from '../../ui/Landing/NavBarLanding/NavBarLanding'
import { PrincipalImagesLanding } from '../../ui/Landing/PrincipalImagesLanding/PrincipalImagesLanding'
import styles from './LandingScreen.module.css'

export const LandingScreen = () => {
  return (
    <div className={styles.landingContainer}>
      <HeaderDescuento />
      <NavBarLanding />
      <PrincipalImagesLanding />
      <CarouselComponent/>
      <Footer />
    </div>
  )
}
