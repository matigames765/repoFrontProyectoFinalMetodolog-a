import { HeaderDescuento } from "../../ui/HeaderDescuento/HeaderDescuento";
import styles from "./CategoriasScreen.module.css";
import categoriaRunning from "../../../Imagenes/categoriaRunning.jpg";
import categoriaUrban from "../../../Imagenes/categoriaUrban.jpg";
import categoriaTraining from "../../../Imagenes/categoriaTraining.jpg";
import categoriaSports from "../../../Imagenes/categoriaSports.jpg";
import { useNavigate } from "react-router";

export const CategoriasScreen = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("click en la tarjeta");
    navigate("/catalogo");
  };
  return (
    <>
      <HeaderDescuento />
      <div className={styles.contenedorImagenesCategoria}>
        <div
          className={styles.botonImagen}
          style={{ backgroundImage: `url(${categoriaRunning})` }}
          onClick={handleClick}
        >
          <button>RUNNING</button>
        </div>

        <div
          className={styles.botonImagen}
          style={{ backgroundImage: `url(${categoriaTraining})` }}
          onClick={handleClick}
        >
          <button>TRAINING</button>
        </div>

        <div
          className={styles.botonImagen}
          style={{ backgroundImage: `url(${categoriaUrban})` }}
          onClick={handleClick}
        >
          <button>URBAN</button>
        </div>

        <div
          className={styles.botonImagen}
          style={{ backgroundImage: `url(${categoriaSports})` }}
          onClick={handleClick}
        >
          <button>SPORTS</button>
        </div>
      </div>
    </>
  );
};
