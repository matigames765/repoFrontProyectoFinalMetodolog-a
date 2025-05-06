import styles from "./VisitasAdmin.module.css";
import { NavBarAdmin } from "../NavBarAdmin/NavBarAdmin";
import { HeaderAdmin } from "../HeaderAdmin/HeaderAdmin";

export const VisitasAdmin = () => {
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
              <p>Usuario</p>
              <p>Matias Games</p>
              <p>Matias Rodriguez</p>
              <p>Jorge Garcia</p>
              <p>Santiago Bazan</p>
            </div>
            <div>
              <p>Actividad</p>
              <p>Login</p>
              <p>Sign up</p>
              <p>Login</p>
              <p>Sign up</p>
              <p>xxxx</p>
            </div>
            <div>
              <p>dia</p>
              <p>hoy</p>
              <p>28/04/2025</p>
              <p>27/04/2025</p>
              <p>26/04/2025</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
