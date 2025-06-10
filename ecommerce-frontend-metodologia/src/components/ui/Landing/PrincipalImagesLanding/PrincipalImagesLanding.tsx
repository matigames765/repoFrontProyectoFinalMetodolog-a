import { useNavigate } from "react-router";
import styles from "./PrincipalImagesLanding.module.css";
import { filterStore } from "../../../../store/Producto/filterStore";
import { useShallow } from "zustand/shallow";
import { usuarioStore } from "../../../../store/Usuario/usuarioStore";
import Swal from "sweetalert2";

export const PrincipalImagesLanding = () => {
  const navigate = useNavigate();

  const setSeccionActiva = filterStore(useShallow((state) => state.setSeccionActiva))
  const usuarioActivo = usuarioStore((state) => state.usuarioActivo)


  const handleNavigateToCategoriasMujer = () => {
    if (usuarioActivo) {
      setSeccionActiva('FEMENINO')
      navigate("/categorias/femenino");

    } else {
      Swal.fire("Iniciar Seccion para Ingresar!");
      return
    }
  };

  const handleNavigateToCategoriasHombre = () => {
    if (usuarioActivo) {
      setSeccionActiva('MASCULINO')
      navigate("/categorias/masculino");
    } else {
      Swal.fire("Iniciar Seccion para Ingresar!");
      return
    }
  };

  const handleNavigateToCategoriasNinios = () => {
    if (usuarioActivo) {
      setSeccionActiva('niños')
      navigate("/categorias/niños");

    } else {
      Swal.fire("Iniciar Seccion para Ingresar!");
      return
    }
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
