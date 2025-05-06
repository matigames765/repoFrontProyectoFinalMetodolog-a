import styles from "./HeaderAdmin.module.css";

export const HeaderAdmin = () => {
  return (
    <div className={styles.ContainerPrincipalHeaderADmin}>
      <div className={styles.infoCards}>
        <h4>Total Ventas</h4>
        <p>$100.000.000</p>
      </div>
      <div className={styles.infoCards}>
        <h4>Visitas</h4>
        <p>100.000</p>
      </div>
      <div className={styles.infoCards}>
        <h4>Clientes</h4>
        <p>100.000</p>
      </div>
      <div className={styles.infoCards}>
        <h4>Ordenes</h4>
        <p>100.000</p>
      </div>
    </div>
  );
};
