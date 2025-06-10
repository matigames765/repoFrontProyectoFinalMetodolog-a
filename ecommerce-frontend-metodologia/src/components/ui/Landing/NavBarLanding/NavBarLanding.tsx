import styles from "./NavBarLanding.module.css";
import { filterStore } from "../../../../store/Producto/filterStore";
import { useShallow } from "zustand/shallow";
import { useNavigate } from "react-router";
import { usuarioStore } from "../../../../store/Usuario/usuarioStore";
import Swal from "sweetalert2";

export const NavBarLanding = () => {
  const navigate = useNavigate();

  const usuarioActivo = usuarioStore((state) => state.usuarioActivo)

  const setSeccionActiva = filterStore(useShallow((state) => state.setSeccionActiva))
  const resetFiltros = filterStore((state) => state.resetFiltros)


  const handleNavigateDestacados = () => {
    if (usuarioActivo) {
      resetFiltros()
      setSeccionActiva('destacados')
      navigate("/categorias/destacados");
    } else {
      Swal.fire("Iniciar Seccion para Ingresar!");
      return
    }
  };

  const handleNavigateHombre= () => {
    if (usuarioActivo){
      resetFiltros()
      setSeccionActiva('MASCULINO')
      navigate("/categorias/masculino");
    } else {
      Swal.fire("Iniciar Seccion para Ingresar!");
      return
    }
  };

  const handleNavigateMujer = () => {
    if (usuarioActivo){
      resetFiltros()
      setSeccionActiva('FEMENINO')
      navigate("/categorias/femenino");
    } else {
      Swal.fire("Iniciar Seccion para Ingresar!");
      return
    }

  };

  const handleNavigateNinios = () => {
    if (usuarioActivo){
      resetFiltros()
      setSeccionActiva('niños')
      navigate("/categorias/niños");
    } else {
      Swal.fire("Iniciar Seccion para Ingresar!");
      return
    }
  };

  const handleNavigateAccesorios = () => {
    if (usuarioActivo){
      resetFiltros()
      setSeccionActiva('accesorios')
      navigate("/categorias/accesorios");
    } else {
      Swal.fire("Iniciar Seccion para Ingresar!");
      return
    }
  };

  const handleNavigateCatalogoCompleto = () => {
    if (usuarioActivo){
      resetFiltros()
      setSeccionActiva('')
      navigate("/catalogo");
    } else {
      Swal.fire("Iniciar Seccion para Ingresar!");
      return
    }
  };
  
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.containerNavBarLanding}>
      <h3
        className={styles.titleNavBarLanding}
        onClick={goHome}
        style={{ cursor: "pointer" }}
      >
        ClothesShopMendoza
      </h3>
      <div className={styles.containerGral}>
        <div className={styles.containerCategoriesNavBarLanding}>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={handleNavigateDestacados}
          >
            Destacados
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={handleNavigateHombre}
          >
            Hombre
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={handleNavigateMujer}
          >
            Mujer
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={handleNavigateNinios}
          >
            Niño/a
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={handleNavigateAccesorios}
          >
            Accesorios
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={handleNavigateCatalogoCompleto}
          >
            Catálogo completo
          </h4>
        </div>
      </div>
    </div>
  );
};
