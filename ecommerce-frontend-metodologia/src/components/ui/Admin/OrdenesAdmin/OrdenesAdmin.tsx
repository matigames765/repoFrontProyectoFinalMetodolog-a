import styles from "./OrdenesAdmin.module.css";

export const OrdenesAdmin = () => {
  return (
    <>
      <div className={styles.containerPrincipal}>
        <div className={styles.divOrdenes}>
          <div className={styles.idOrdenDeCompra}>
            <h3 className={styles.tituloColumna}>ID de Compra</h3>
            <p>#2657</p>
            <p>#2656</p>
            <p>#2655</p>
            <p>#2654</p>
          </div>
          <div className={styles.fechaOrden}>
            <h3 className={styles.tituloColumna}>Fecha</h3>
            <p>28/04/2025</p>
            <p>28/04/2025</p>
            <p>28/04/2025</p>
            <p>28/04/2025</p>
          </div>
          <div className={styles.direccion}>
            <h3 className={styles.tituloColumna}>Direccion</h3>
            <p>Mendoza, Argentina</p>
            <p>San Juan, Argentina</p>
            <p>Buenos Aires, Argentina</p>
            <p>Santiago, Chile</p>
          </div>
          <div className={styles.estado}>
            <h3 className={styles.tituloColumna}>Estado</h3>
            <p>En camino</p>
            <p>Entregado</p>
            <p>En camino</p>
            <p>En camino</p>
          </div>
          <div className={styles.totalOrden}>
            <h3 className={styles.tituloColumna}>Total</h3>
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
