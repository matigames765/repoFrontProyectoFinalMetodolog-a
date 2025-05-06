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
          <div className={styles.div2}>
            <div>
              <p>id clientes</p>
              <p>#2857</p>
              <p>#2856</p>
              <p>#2855</p>
              <p>#2854</p>
            </div>
            <div>
              <p>pais</p>
              <p>Argentina</p>
              <p>Chile</p>
              <p>EE.UU.</p>
              <p>España</p>
            </div>
            <div>
              <p>Domicilio</p>
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
