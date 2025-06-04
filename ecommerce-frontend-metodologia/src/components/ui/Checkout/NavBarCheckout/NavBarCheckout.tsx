import styles from "./NavBarCheckout.module.css";
import { useNavigate } from "react-router";
export const NavBarCheckout = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.containerNavBarCheckout}>
      <div className={styles.containerGral}>
        <h3
          className={styles.titleNavBarLanding}
          onClick={goHome}
          style={{ cursor: "pointer" }}
        >
          ClothesShopMendoza
        </h3>
      </div>
    </div>
  );
};
