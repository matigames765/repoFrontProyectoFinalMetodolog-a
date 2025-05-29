
import CarouselComponent from '../../ui/Landing/Carrusel/CarouselComponent'
import { Footer } from '../../ui/Footer/Footer'


import { PrincipalImagesLanding } from '../../ui/Landing/PrincipalImagesLanding/PrincipalImagesLanding'
import styles from './LandingScreen.module.css'
import { HeaderDescuento } from '../../ui/HeaderDescuento/HeaderDescuento'
import { NavBarHome } from '../../ui/Landing/NavBarHome/NavBarHome'

export const LandingScreen = () => {
  return (
    <div className={styles.landingContainer}>
      <HeaderDescuento/>
      <NavBarHome/>
      <PrincipalImagesLanding />
      <CarouselComponent/>
      <Footer />
    </div>
  )
}
