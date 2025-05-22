import styles from "./VentasAdmin.module.css";

export const VentasAdmin = () => {
  return (
    <>
      <div className={styles.containerPrincipal}>
        <div className={styles.divVentas}>
          <div className={styles.idVentas}>
            <h3 className={styles.tituloColumna}>Id Ventas</h3>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
          </div>
          <div className={styles.idClientes}>
            <h3 className={styles.tituloColumna}>Id Clientes</h3>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
          </div>
          <div className={styles.fecha}>
            <h3 className={styles.tituloColumna}>Fecha</h3>
            <p>24/04/2025</p>
            <p>24/04/2025</p>
            <p>24/04/2025</p>
            <p>24/04/2025</p>
            <p>24/04/2025</p>
          </div>
          <div className={styles.total}>
            <h3 className={styles.tituloColumna}>Total</h3>
            <p>100.000</p>
            <p>100.000</p>
            <p>100.000</p>
            <p>100.000</p>
            <p>100.000</p>
          </div>
        </div>
      </div>
    </>
  );
};
