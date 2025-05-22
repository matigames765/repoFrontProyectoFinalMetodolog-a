import { useNavigate } from "react-router";
import styles from "./PrincipalImagesLanding.module.css";

export const PrincipalImagesLanding = () => {
  const navigate = useNavigate();
  const handleNavigateToCategorias = () => {
    navigate("/categorias");
  };

  return (
    <div className={styles.containerPrincipalImages}>
      <div className={styles.imageContainer}>
        <img
          src="src/Imagenes/imagenPrincipalMujer.avif"
          alt="chica que juega basquet"
          className={styles.imagenesPrincipales}
          onClick={handleNavigateToCategorias}
        />
        <button className={styles.buttonPrincipalImageMujer}>MUJER</button>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="src/Imagenes/imagenPrincipalHombre.avif"
          alt="hombre corriendo"
          className={styles.imagenesPrincipales}
          onClick={handleNavigateToCategorias}
        />
        <button className={styles.buttonPrincipalImageHombre}>HOMBRE</button>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="src/Imagenes/imagenPrincipalNiño.avif"
          alt="niño en pista de atletismo"
          className={styles.imagenesPrincipales}
          onClick={handleNavigateToCategorias}
        />
        <button className={styles.buttonPrincipalImageNenio}>NIÑO</button>
      </div>
    </div>
  );
};
