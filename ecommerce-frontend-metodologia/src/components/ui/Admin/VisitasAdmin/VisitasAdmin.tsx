import styles from "./VisitasAdmin.module.css";

export const VisitasAdmin = () => {
  return (
    <>
      <div className={styles.containerPrincipal}>
        <div className={styles.divVisitas}>
          <div className={styles.usuario}>
            <h3 className={styles.tituloColumna}>Usuario</h3>
            <p>Matias Games</p>
            <p>Matias Rodriguez</p>
            <p>Jorge Garcia</p>
            <p>Santiago Bazan</p>
          </div>
          <div className={styles.actividad}>
            <h3 className={styles.tituloColumna}>Actividad</h3>
            <p>Login</p>
            <p>Sign up</p>
            <p>Login</p>
            <p>Sign up</p>
          </div>
          <div className={styles.dia}>
            <h3 className={styles.tituloColumna}>Dia</h3>
            <p>hoy</p>
            <p>28/04/2025</p>
            <p>27/04/2025</p>
            <p>26/04/2025</p>
          </div>
        </div>
      </div>
    </>
  );
};
