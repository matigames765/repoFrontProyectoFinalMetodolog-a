import { Facebook, Instagram, Youtube } from "lucide-react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router";

export const Footer = () => {
  const navigate = useNavigate();
  const handleAdmin = () => {
    navigate("/admin");
  };

  return (
    <div className={styles.containerPrincipalFooter}>
      <div className={styles.textFooterLeft}>
        <h6 className={styles.textFooter}>Seguinos</h6>
        <h6 className={styles.textFooter}>Seguinos</h6>
        <h6 className={styles.textFooter}>Seguinos</h6>
        <h6 className={styles.textFooter}>Seguinos</h6>
      </div>
      <div className={styles.textFooterRight}>
        <h6 className={styles.textFooter}>Clothes Shop Mendoza</h6>
        <h6 className={styles.textFooter}>Blog</h6>
        <h6 className={styles.textFooter}>Contact</h6>
        <h6 className={styles.textFooter}>FAQS</h6>
      </div>
      <div className={styles.socialMediaClothesShop}>
        <h1 className={styles.textPrincipalFooter}>ClothesShopMendoza</h1>
        <div className={styles.icons}>
          <h6>
            <Instagram color="black" size={20} />
          </h6>
          <h6>
            <Facebook color="black" size={20} />
          </h6>
          <h6>
            <Youtube color="black" size={20} />
          </h6>
        </div>
      </div>

      <div>
        <h6 className={styles.informationFooter} onClick={handleAdmin}>
          admin
        </h6>
      </div>
    </div>
  );
};
