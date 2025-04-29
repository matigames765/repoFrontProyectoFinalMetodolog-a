import styles from "./AdminScreen.module.css";

export const AdminScreen = () => {
  return (
    <>
      <div className={styles.containerPrincipal}>
        <div className={styles.desplegable}>
          <h2>Administracion</h2>
          <button>Ventas</button>
          <button>Visitas</button>
          <button>Ordenes</button>
          <button>Clientes</button>
          <button>Productos</button>
        </div>
        <div>
          <div className={styles.infoGeneral}>
            <div>
              <h4>Total Ventas</h4>
              <p>$100.000.000</p>
            </div>
            <div>
              <h4>Visitas</h4>
              <p>100.000</p>
            </div>
            <div>
              <h4>Clientes</h4>
              <p>100.000</p>
            </div>
            <div>
              <h4>Ordenes</h4>
              <p>100.000</p>
            </div>
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
