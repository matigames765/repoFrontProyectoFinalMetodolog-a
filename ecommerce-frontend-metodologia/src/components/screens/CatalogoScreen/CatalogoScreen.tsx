import { ColumnFilterCatalogo } from "../../ui/Catalogo/ColumnFilterCatalogo/ColumnFilterCatalogo";
import { Footer } from "../../ui/Footer/Footer";
import { HeaderDescuento } from "../../ui/HeaderDescuento/HeaderDescuento";
import { SectionImagenesCatalogo } from "../../ui/Catalogo/SectionImagenesCatalogo/SectionImagenesCatalogo";
import styles from "./CatalogoScreen.module.css";
import { NavBarLanding } from "../../ui/Landing/NavBarLanding/NavBarLanding";

export const CatalogoScreen = () => {
  return (
    <div className={styles.catalogoContainer}>
      <HeaderDescuento />
      <NavBarLanding />
      <ColumnFilterCatalogo />
      <SectionImagenesCatalogo />
      <Footer />
    </div>
  );
};
