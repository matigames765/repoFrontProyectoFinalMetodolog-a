import { useNavigate } from "react-router";
import styles from "./PrincipalImagesLanding.module.css";

export const PrincipalImagesLanding = () => {
  const navigate = useNavigate();
  const handleNavigateToCategorias = () => {
    navigate("/categorias");
  };
  return (
    <div className={styles.containerPrincipalImages}>
      <img
        src="src/Imagenes/imagenPrincipalMujer.avif"
        alt="chica que juega basquet"
        className={styles.imagenesPrincipales}
        onClick={handleNavigateToCategorias}
      />
      <button className={styles.buttonPrincipalImageMujer}>Mujer</button>
      <img
        src="src/Imagenes/imagenPrincipalHombre.avif"
        alt="hombre corriendo"
        className={styles.imagenesPrincipales}
      />
      <button className={styles.buttonPrincipalImageHombre}>Hombre</button>
      <img
        src="src/Imagenes/imagenPrincipalNiño.avif"
        alt="niño en pista de atletismo"
        className={styles.imagenesPrincipales}
      />
      <button className={styles.buttonPrincipalImageNenio}>Niño</button>
    </div>
  );
};
