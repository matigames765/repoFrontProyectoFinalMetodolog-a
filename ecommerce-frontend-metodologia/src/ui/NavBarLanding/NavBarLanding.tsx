import styles from './NavBarLaning.module.css'

export const NavBarLanding = () => {
  return (
    <div className={styles.containerNavBarLanding}>
        <h5 className={styles.titleNavBarLanding}>ClothesShopMendoza</h5>
        <div className={styles.containerCategoriesNavBarLanding}>
            <h4 className={styles.categorieNavBarLanding}>Destacados</h4>
            <h4 className={styles.categorieNavBarLanding}>Hombre</h4>
            <h4 className={styles.categorieNavBarLanding}>Mujer</h4>
            <h4 className={styles.categorieNavBarLanding}>Niño/a</h4>
            <h4 className={styles.categorieNavBarLanding}>Accesorios</h4>
        </div>
    </div>
  )
}
