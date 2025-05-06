import styles from "./VentasAdmin.module.css";
import { NavBarAdmin } from "../NavBarAdmin/NavBarAdmin";
import { HeaderAdmin } from "../HeaderAdmin/HeaderAdmin";

export const VentasAdmin = () => {
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
              <p>id ventas</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
            </div>
            <div>
              <p>id clientes</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
            </div>
            <div>
              <p>fecha</p>
              <p>24/04/2025</p>
              <p>24/04/2025</p>
              <p>24/04/2025</p>
              <p>24/04/2025</p>
              <p>24/04/2025</p>
            </div>
            <div>
              <p>Total</p>
              <p>100.000</p>
              <p>100.000</p>
              <p>100.000</p>
              <p>100.000</p>
              <p>100.000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
