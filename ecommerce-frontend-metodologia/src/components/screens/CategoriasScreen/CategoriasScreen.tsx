import { HeaderDescuento } from "../../ui/HeaderDescuento/HeaderDescuento";
import styles from "./CategoriasScreen.module.css";
import categoriaRunning from "../../../Imagenes/categoriaRunning.jpg";
import categoriaUrban from "../../../Imagenes/categoriaUrban.jpg";
import categoriaTraining from "../../../Imagenes/categoriaTraining.jpg";
import categoriaSports from "../../../Imagenes/categoriaSports.jpg";
import { useNavigate, useParams } from "react-router";
import { filterStore } from "../../../store/Producto/filterStore";
import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

export const CategoriasScreen = () => {
  const {seccion} = useParams();

  const navigate = useNavigate();

  const setCategoriaActiva = filterStore(useShallow((state) => state.setCategoriaActiva))
  const setSeccionactiva = filterStore(useShallow((state) => state.setSeccionActiva))
  const resetFiltros = filterStore(useShallow((state) => state.resetFiltros))

  useEffect(() => {
    setSeccionactiva(seccion!)
    resetFiltros()
  }, [])

  const handleClickRunning = () => {
    setCategoriaActiva('running')
    navigate(`/catalogo/${seccion}/running`);
  };

  const handleClickTraining = () => {
    setCategoriaActiva('training')
    navigate(`/catalogo/${seccion}/training`);
  };

  const handleClickUrban = () => {
    setCategoriaActiva('urbano')
    navigate(`/catalogo/${seccion}/urbano`);
  };

  const handleClickSports = () => {
    setCategoriaActiva('deportes')
    navigate(`/catalogo/${seccion}/deportes`);
  };
  return (
    <>
      <HeaderDescuento />
      <div className={styles.contenedorImagenesCategoria}>
        <div
          className={styles.botonImagen}
          style={{ backgroundImage: `url(${categoriaRunning})` }}
          onClick={handleClickRunning}
        >
          <button>RUNNING</button>
        </div>

        <div
          className={styles.botonImagen}
          style={{ backgroundImage: `url(${categoriaTraining})` }}
          onClick={handleClickTraining}
        >
          <button>TRAINING</button>
        </div>

        <div
          className={styles.botonImagen}
          style={{ backgroundImage: `url(${categoriaUrban})` }}
          onClick={handleClickUrban}
        >
          <button>URBAN</button>
        </div>

        <div
          className={styles.botonImagen}
          style={{ backgroundImage: `url(${categoriaSports})` }}
          onClick={handleClickSports}
        >
          <button>SPORTS</button>
        </div>
      </div>
    </>
  );
};
