import styles from "./NavBarHome.module.css";
import { useNavigate } from "react-router";
import { LogIn, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { PopUpCart } from "../../PopUpCart/PopUpCart";
import { NavBarLanding } from "../NavBarLanding/NavBarLanding";

export const NavBarHome = () => {
  const [openModalPopUpCart, setOpenModalPopUpCart] = useState<boolean>(false);

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className={styles.containerNavBarHome}>
      <div className={styles.containerGral}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="¿Qué estas buscando?"
            className={styles.barraBusquedaCatalogo}
          ></input>
          <Search className={styles.searchIconCalogo} color="black" size={20} />
        </div>
        <h3
          className={styles.titleNavBarLanding}
          onClick={goHome}
          style={{ cursor: "pointer" }}
        >
          ClothesShopMendoza
        </h3>
        <div className={styles.loginAndCartContainer}>
          <div className={styles.containerLogin}>
            <LogIn size={20} className={styles.loginLogo} />
            <button className={styles.loginButton} onClick={handleLogin}>
              Iniciar Sesion
            </button>
          </div>
          <div className={styles.cartContainer}>
            <button
              onClick={() => setOpenModalPopUpCart((prev) => !prev)}
              className={styles.iconShoppinCartLanding}
            >
              <ShoppingCart color="white" size={30} />
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
      <div className={styles.containerLanding}>
        <NavBarLanding />
      </div>
    </div>
  );
};
