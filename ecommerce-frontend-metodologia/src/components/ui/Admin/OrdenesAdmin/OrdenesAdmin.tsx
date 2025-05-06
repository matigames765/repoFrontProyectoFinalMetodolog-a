import styles from "./OrdenesAdmin.module.css";
import { NavBarAdmin } from "../NavBarAdmin/NavBarAdmin";
import { HeaderAdmin } from "../HeaderAdmin/HeaderAdmin";

export const OrdenesAdmin = () => {
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
              <p>id_ordenDeCompra</p>
              <p>#2657</p>
              <p>#2656</p>
              <p>#2655</p>
              <p>#2654</p>
            </div>
            <div>
              <p>Fecha</p>
              <p>28/04/2025</p>
              <p>28/04/2025</p>
              <p>28/04/2025</p>
              <p>28/04/2025</p>
            </div>
            <div>
              <p>direccion</p>
              <p>Mendoza, Argentina</p>
              <p>San Juan, Argentina</p>
              <p>Buenos Aires, Argentina</p>
              <p>Santiago, Chile</p>
            </div>
            <div>
              <p>estado</p>
              <p>En camino</p>
              <p>Entregado</p>
              <p>En camino</p>
              <p>En camino</p>
            </div>
            <div>
              <p>Total</p>
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
