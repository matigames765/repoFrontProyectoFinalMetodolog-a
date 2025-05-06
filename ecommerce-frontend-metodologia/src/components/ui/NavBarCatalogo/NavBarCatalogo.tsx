import { Menu, Search, ShoppingCart } from "lucide-react";
import styles from "./NavBarCatalogo.module.css";
import { useNavigate } from "react-router";

export const NavBarCatalogo = () => {
  const navigate = useNavigate();
  const handleNavigateToLanding = () => {
    navigate("/");
  };
  return (
    <div className={styles.containerNavBarCatalogo}>
      <h6
        className={styles.titleNavBarCatalogo}
        onClick={handleNavigateToLanding}
      >
        ClothesShopMendoza
      </h6>
      <div className={styles.containerCategoriesNavBarCatalogo}>
        <h4 className={styles.categorieNavBarCatalogo}>Destacados</h4>
        <h4 className={styles.categorieNavBarCatalogo}>Hombre</h4>
        <h4 className={styles.categorieNavBarCatalogo}>Mujer</h4>
        <h4 className={styles.categorieNavBarCatalogo}>Niño/a</h4>
        <h4 className={styles.categorieNavBarCatalogo}>Accesorios</h4>
      </div>
      <Menu className={styles.menuSearchBarCatalogo} color="black" size={20} />
      <input
        type="text"
        placeholder="busque un producto"
        className={styles.barraBusquedaCatalogo}
      ></input>
      <Search className={styles.searchIconCalogo} color="black" size={20} />
      <div className={styles.iconShoppinCartCatalogo}>
        <ShoppingCart color="black" size={40} />
      </div>
    </div>
  );
};
