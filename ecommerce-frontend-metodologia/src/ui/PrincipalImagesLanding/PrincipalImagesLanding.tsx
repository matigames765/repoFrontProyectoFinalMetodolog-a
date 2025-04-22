import styles from './PrincipalImagesLanding.module.css'

export const PrincipalImagesLanding = () => {
  return (
    <div className={styles.containerPrincipalImages}>
      <img src = "src/Imagenes/imagenPrincipalMujer.avif" alt='chica que juega basquet' className={styles.imagenesPrincipales}/>
      <img src = "src/Imagenes/imagenPrincipalHombre.avif" alt='hombre corriendo' className={styles.imagenesPrincipales}/>
      <img src = "src/Imagenes/imagenPrincipalNiño.avif" alt='niño en pista de atletismo' className={styles.imagenesPrincipales}/>
    </div>
  )
}
