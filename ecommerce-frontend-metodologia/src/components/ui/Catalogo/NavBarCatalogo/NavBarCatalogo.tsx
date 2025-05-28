import { Search, ShoppingCart} from "lucide-react";
import styles from "./NavBarCatalogo.module.css";
import { ChangeEvent, useState } from "react";
import { PopUpCart } from "../../PopUpCart/PopUpCart";
import { useNavigate} from "react-router";
import { useShallow } from "zustand/shallow";
import { filterStore } from "../../../../store/Producto/filterStore";

export const NavBarCatalogo = () => {
  const [openModalPopUpCart, setOpenModalPopUpCart] = useState<boolean>(false);
  const navigate = useNavigate();

  const setSeccionActiva = filterStore(useShallow((state) => state.setSeccionActiva))
  const resetFiltros = filterStore((state) => state.resetFiltros)
  const categoriaActiva = filterStore((state) => state.categoriaActiva)
  const setBuscadorActivo = filterStore((state) => state.setBuscadorActivo)



  const handleNavigateDestacados = () => {
    resetFiltros()
    setSeccionActiva('destacados')
    navigate("/categorias/destacados");
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
          <h3
            className={styles.categorieNavBarLanding}
            onClick={handleNavigateDestacados}
          >
            {categoriaActiva ? categoriaActiva.charAt(0).toUpperCase() + categoriaActiva.slice(1): 'Catalogo Completo'}
          </h3>
        </div>
        <div className={styles.searchAndCartContainer}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="busque un producto"
              className={styles.barraBusquedaCatalogo}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>{
                console.log("valor del input: "  + e.target.value)
                setBuscadorActivo(e.target.value)
              }}
            ></input>
            <Search
              className={styles.searchIconCalogo}
              color="black"
              size={20}
            />
          </div>
          <div className={styles.cartContainer}>
            <button
              onClick={() => setOpenModalPopUpCart((prev) => !prev)}
              className={styles.iconShoppinCartLanding}
            >
              <ShoppingCart color="black" size={30} />
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
