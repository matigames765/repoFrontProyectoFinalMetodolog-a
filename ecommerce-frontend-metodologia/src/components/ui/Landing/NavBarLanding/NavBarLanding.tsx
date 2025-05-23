import styles from "./NavBarLanding.module.css";

import { useNavigate } from "react-router";

export const NavBarLanding = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/catalogo");
  };

  return (
    <div className={styles.containerNavBarLanding}>
      <div className={styles.containerCategoriesNavBarLanding}>
        <h4 className={styles.categorieNavBarLanding} onClick={handleNavigate}>
          Destacados
        </h4>
        <h4 className={styles.categorieNavBarLanding} onClick={handleNavigate}>
          Hombre
        </h4>
        <h4 className={styles.categorieNavBarLanding} onClick={handleNavigate}>
          Mujer
        </h4>
        <h4 className={styles.categorieNavBarLanding} onClick={handleNavigate}>
          Niño/a
        </h4>
        <h4 className={styles.categorieNavBarLanding} onClick={handleNavigate}>
          Accesorios
        </h4>
        <h4 className={styles.categorieNavBarLanding} onClick={handleNavigate}>
          Catálogo completo
        </h4>
      </div>
    </div>
  );
};
