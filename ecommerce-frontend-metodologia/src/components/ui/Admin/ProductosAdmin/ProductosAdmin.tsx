import styles from "./ProductosAdmin.module.css";
import { NavBarAdmin } from "../NavBarAdmin/NavBarAdmin";
import { HeaderAdmin } from "../HeaderAdmin/HeaderAdmin";

export const ProductosAdmin = () => {
  return (
    <>
      <div className={styles.containerPrincipal}>
        <NavBarAdmin />
        <div className={styles.contenido}>
          <div className={styles.divHeader}>
            <HeaderAdmin />
          </div>
          <div className={styles.divProductos}>
            <div className={styles.idProductos}>
              <h3 className={styles.tituloColumna}>ID Producto</h3>

              <p>#1114</p>
              <p>#1113</p>
              <p>#1112</p>
              <p>#1111</p>
            </div>
            <div className={styles.precioProductos}>
              <h3 className={styles.tituloColumna}>Precio Unitario</h3>
              <p>$49.990</p>
              <p>$79.990</p>
              <p>$59.990</p>
              <p>$119.990</p>
            </div>
            <div className={styles.editarProductos}>
              <h3 className={styles.tituloColumna}>Editar</h3>
              <p>editar producto</p>
              <p>editar producto</p>
              <p>editar producto</p>
              <p>editar producto</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
