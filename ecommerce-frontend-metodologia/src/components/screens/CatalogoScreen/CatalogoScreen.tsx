import { ColumnFilterCatalogo } from "../../ui/Catalogo/ColumnFilterCatalogo/ColumnFilterCatalogo";
import { Footer } from "../../ui/Footer/Footer";
import { HeaderDescuento } from "../../ui/HeaderDescuento/HeaderDescuento";
import { NavBarCatalogo } from "../../ui/Catalogo/NavBarCatalogo/NavBarCatalogo";
import { SectionImagenesCatalogo } from "../../ui/Catalogo/SectionImagenesCatalogo/SectionImagenesCatalogo";
import styles from "./CatalogoScreen.module.css";

export const CatalogoScreen = () => {
  return (
    <div className={styles.catalogoContainer}>
      <HeaderDescuento />
      <NavBarCatalogo />
      <ColumnFilterCatalogo />
      <SectionImagenesCatalogo />
      <Footer />
    </div>
  );
};
