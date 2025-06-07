import { Search, ShoppingCart } from "lucide-react";
import styles from "./NavBarCatalogo.module.css";
import { ChangeEvent, useState } from "react";
import { PopUpCart } from "../../PopUpCart/PopUpCart";
import { useNavigate } from "react-router";
import { useShallow } from "zustand/shallow";
import { filterStore } from "../../../../store/Producto/filterStore";

export const NavBarCatalogo = () => {
  const [openModalPopUpCart, setOpenModalPopUpCart] = useState<boolean>(false);
  const navigate = useNavigate();

  const setSeccionActiva = filterStore(useShallow((state) => state.setSeccionActiva));
  const resetFiltros = filterStore((state) => state.resetFiltros);
  const categoriaActiva = filterStore((state) => state.categoriaActiva);
  const setBuscadorActivo = filterStore((state) => state.setBuscadorActivo);

  const handleNavigateDestacados = () => {
    resetFiltros();
    setSeccionActiva("destacados");
    navigate("/categorias/destacados");
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.containerNavBarLanding}>
      
      <div className={styles.topRow}>
        <h3 className={styles.tituloPagina} onClick={goHome} style={{ cursor: "pointer" }}>
          ClothesShopMendoza
        </h3>
      </div>

      
      <div className={styles.bottomRow}>
        <h2 className={styles.categorieNavBarLanding} onClick={handleNavigateDestacados} style={{ cursor: "pointer" }}>
          {categoriaActiva
            ? categoriaActiva.charAt(0).toUpperCase() + categoriaActiva.slice(1)
            : "Catálogo Completo"}
        </h2>

        <div className={styles.searchAndCartContainer}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Busque un producto"
              className={styles.barraBusquedaCatalogo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setBuscadorActivo(e.target.value)}
            />
            <Search className={styles.searchIconCalogo} size={20} />
          </div>

          <div className={styles.cartContainer}>
            <button
              onClick={() => setOpenModalPopUpCart((prev) => !prev)}
              className={styles.iconShoppinCartLanding}
              aria-label="Ver carrito"
            >
              <ShoppingCart size={28} />
            </button>

            <div
              className={`${styles.popupWrapper} ${
                openModalPopUpCart ? styles.popupCartVisible : ""
              }`}
            >
              <PopUpCart
                handleCloseModal={() => setOpenModalPopUpCart(false)}
                visible={openModalPopUpCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
