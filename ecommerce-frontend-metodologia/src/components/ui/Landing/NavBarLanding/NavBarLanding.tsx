import { Search, ShoppingCart } from "lucide-react";
import styles from "./NavBarLanding.module.css";
import { useState } from "react";
import { PopUpCart } from "../../PopUpCart/PopUpCart";
import { useNavigate } from "react-router";

export const NavBarLanding = () => {
  const [openModalPopUpCart, setOpenModalPopUpCart] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/catalogo");
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
            onClick={handleNavigate}
          >
            Destacados
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={handleNavigate}
          >
            Hombre
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={handleNavigate}
          >
            Mujer
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={handleNavigate}
          >
            Niño/a
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={handleNavigate}
          >
            Accesorios
          </h4>
          <h4
            className={styles.categorieNavBarLanding}
            onClick={handleNavigate}
          >
            Catálogo completo
          </h4>
        </div>
        <div className={styles.searchAndCartContainer}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="busque un producto"
              className={styles.barraBusquedaCatalogo}
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
