import { useNavigate } from "react-router";
import styles from "./PrincipalImagesLanding.module.css";
import { filterStore } from "../../../../store/Producto/filterStore";
import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

export const PrincipalImagesLanding = () => {
  const navigate = useNavigate();

  const setSeccionActiva = filterStore(useShallow((state) => state.setSeccionActiva))

  useEffect(() => {
    setSeccionActiva('')
  }, [])

  const handleNavigateToCategoriasMujer = () => {
    setSeccionActiva('FEMENINO')
    navigate("/categorias/femenino");
  };

  const handleNavigateToCategoriasHombre = () => {
    setSeccionActiva('MASCULINO')
    navigate("/categorias/masculino");
  };

  const handleNavigateToCategoriasNinios = () => {
    setSeccionActiva('niños')
    navigate("/categorias/niños");
  };

  return (
    <div className={styles.containerPrincipalImages}>
      <div className={styles.imageContainer}>
        <img
          src="src/Imagenes/imagenPrincipalMujer.avif"
          alt="chica que juega basquet"
          className={styles.imagenesPrincipales}
          onClick={handleNavigateToCategoriasMujer}
        />
        <button className={styles.buttonPrincipalImageMujer}>MUJER</button>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="src/Imagenes/imagenPrincipalHombre.avif"
          alt="hombre corriendo"
          className={styles.imagenesPrincipales}
          onClick={handleNavigateToCategoriasHombre}
        />
        <button className={styles.buttonPrincipalImageHombre}>HOMBRE</button>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="src/Imagenes/imagenPrincipalNiño.avif"
          alt="niño en pista de atletismo"
          className={styles.imagenesPrincipales}
          onClick={handleNavigateToCategoriasNinios}
        />
        <button className={styles.buttonPrincipalImageNenio}>NIÑO</button>
      </div>
    </div>
  );
};
