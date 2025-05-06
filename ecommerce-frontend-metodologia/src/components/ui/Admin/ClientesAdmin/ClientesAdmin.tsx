import styles from "./ClientesAdmin.module.css";
import { NavBarAdmin } from "../NavBarAdmin/NavBarAdmin";
import { HeaderAdmin } from "../HeaderAdmin/HeaderAdmin";

export const ClientesAdmin = () => {
  return (
    <>
      <div className={styles.containerPrincipal}>
        <NavBarAdmin />
        <div className={styles.contenido}>
          <div className={styles.divHeader}>
            <HeaderAdmin />
          </div>
          <div className={styles.divClientes}>
            <div className={styles.idCliente}>
              <h3 className={styles.tituloColumna}>ID Cliente</h3>
              <p>#2857</p>
              <p>#2856</p>
              <p>#2855</p>
              <p>#2854</p>
            </div>
            <div className={styles.pais}>
              <h3 className={styles.tituloColumna}>Pais</h3>
              <p>Argentina</p>
              <p>Chile</p>
              <p>EE.UU.</p>
              <p>España</p>
            </div>
            <div className={styles.domicilio}>
              <h3 className={styles.tituloColumna}>Domicilio</h3>
              <p>Calle xx N°</p>
              <p>Calle xx N°</p>
              <p>Calle xx N°</p>
              <p>Calle xx N°</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
