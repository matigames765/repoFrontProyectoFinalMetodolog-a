import { ShoppingCart } from "lucide-react";
import styles from "./NavBarLaning.module.css";
import { useState } from "react";
import { PopUpCart } from "../../PopUpCart/PopUpCart";

export const NavBarLanding = () => {
  const [openModalPopUpCart, setOpenModalPopUpCart] = useState<boolean>(false);

  return (
    <div className={styles.containerNavBarLanding}>
      <h6 className={styles.titleNavBarLanding}>ClothesShopMendoza</h6>
      <div className={styles.containerCategoriesNavBarLanding}>
        <h4 className={styles.categorieNavBarLanding}>Destacados</h4>
        <h4 className={styles.categorieNavBarLanding}>Hombre</h4>
        <h4 className={styles.categorieNavBarLanding}>Mujer</h4>
        <h4 className={styles.categorieNavBarLanding}>Niño/a</h4>
        <h4 className={styles.categorieNavBarLanding}>Accesorios</h4>
      </div>
      <button
        onClick={() => setOpenModalPopUpCart((prev) => !prev)}
        className={styles.iconShoppinCartLanding}
      >
        <ShoppingCart color="black" size={40} />
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
  );
};
