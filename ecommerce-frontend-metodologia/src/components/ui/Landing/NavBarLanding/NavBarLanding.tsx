import styles from "./NavBarLanding.module.css";
import { filterStore } from "../../../../store/Producto/filterStore";
import { useShallow } from "zustand/shallow";
import { useNavigate } from "react-router";
import { usuarioStore } from "../../../../store/Usuario/usuarioStore";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { toast } from "react-toastify";

export const NavBarLanding = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const usuarioActivo = usuarioStore((state) => state.usuarioActivo)

  const setSeccionActiva = filterStore(useShallow((state) => state.setSeccionActiva))
  const resetFiltros = filterStore((state) => state.resetFiltros)
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNavigate = (seccion: string, ruta: string) => {
    if (usuarioActivo) {
      resetFiltros();
      setSeccionActiva(seccion);
      navigate(ruta);
      setMenuOpen(false); // Cierra el menú al navegar
    } else {
     toast.error("Debes iniciar sesion!")
      return
    }

  };

  return (
    <div className={styles.containerNavBarLanding}>
      <div className={styles.containerGral}>
        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav
          className={`${styles.containerCategoriesNavBarLanding} ${menuOpen ? styles.menuOpen : ""
            }`}
          aria-hidden={!menuOpen}
        >
          <h4
            className={styles.categorieNavBarLanding}
            onClick={() => handleNavigate("destacados", "/categorias/destacados")}
          >
            Destacados
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={() => handleNavigate("MASCULINO", "/categorias/masculino")}
          >
            Hombre
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={() => handleNavigate("FEMENINO", "/categorias/femenino")}
          >
            Mujer
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={() => handleNavigate("niños", "/categorias/niños")}
          >
            Niño/a
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={() => handleNavigate("accesorios", "/categorias/accesorios")}
          >
            Accesorios
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={() => handleNavigate("", "/catalogo")}
          >
            Catálogo completo
          </h4>
        </nav>
      </div>
    </div>
  );
};
