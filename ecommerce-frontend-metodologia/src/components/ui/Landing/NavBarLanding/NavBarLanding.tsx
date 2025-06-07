import styles from "./NavBarLanding.module.css";
import { useEffect, useState } from "react";
import { PopUpCart } from "../../PopUpCart/PopUpCart";
import { useNavigate} from "react-router";
import { useShallow } from "zustand/shallow";
import { filterStore } from "../../../../store/Producto/filterStore";
import { useCategorias } from "../../../../hooks/Producto/useCategorias";

export const NavBarLanding = () => {
  const navigate = useNavigate();

  const setSeccionActiva = filterStore(useShallow((state) => state.setSeccionActiva))
  const resetFiltros = filterStore((state) => state.resetFiltros)


  const handleNavigateDestacados = () => {
    resetFiltros();
    setSeccionActiva("destacados");
    navigate("/categorias/destacados");
  };

  const handleNavigateHombre = () => {
    resetFiltros();
    setSeccionActiva("MASCULINO");
    navigate("/categorias/masculino");
  };

  const handleNavigateMujer = () => {
    resetFiltros();
    setSeccionActiva("FEMENINO");
    navigate("/categorias/femenino");
  };

  const handleNavigateNinios = () => {
    resetFiltros();
    setSeccionActiva("niños");
    navigate("/categorias/niños");
  };

  const handleNavigateAccesorios = () => {
    resetFiltros();
    setSeccionActiva("accesorios");
    navigate("/categorias/accesorios");
  };

  const handleNavigateCatalogoCompleto = () => {
    resetFiltros();
    setSeccionActiva("");
    navigate("/catalogo");
  };

  return (
    <div className={styles.containerNavBarLanding}>
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
