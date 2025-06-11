import CarouselComponent from '../../ui/Landing/Carrusel/CarouselComponent'
import { Footer } from '../../ui/Footer/Footer'

import { PrincipalImagesLanding } from '../../ui/Landing/PrincipalImagesLanding/PrincipalImagesLanding'
import styles from './LandingScreen.module.css'
import { HeaderDescuento } from '../../ui/HeaderDescuento/HeaderDescuento'
import { NavBarHome } from '../../ui/Landing/NavBarHome/NavBarHome'
import { useEffect } from 'react'
import { usuarioStore } from '../../../store/Usuario/usuarioStore'
import { useUsuarios } from '../../../hooks/Usuario/useUsuario'



export const LandingScreen = () => {
  
  const { getUsuariosHook, usuarios } = useUsuarios();
  const usuarioActivo = usuarioStore((state) => state.usuarioActivo)

  useEffect(() => {
    if (usuarios.length >= 0) {
      getUsuariosHook()
    }
  }, [])

  useEffect(() => {
    
    if (usuarioActivo) {
      console.log("usuario activo: ", usuarioActivo)
    }
  }, [])


  return (
  <div className={styles.landingContainer}>
      <HeaderDescuento />
      <NavBarHome />
      <CarouselComponent />
      <PrincipalImagesLanding />
      <Footer />
    </div>
  )
}
