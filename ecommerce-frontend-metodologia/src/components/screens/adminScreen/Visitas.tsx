
import { useNavigate } from "react-router-dom";
import styles from "./AdminScreen.module.css";

export const Visitas = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.containerPrincipal}>
        <div className={styles.desplegable}>
          <h2>Administracion</h2>
          <button onClick={() => navigate("/admin/ventas")}>Ventas</button>
          <button onClick={() => navigate("/admin/visitas")}>Visitas</button>
          <button onClick={() => navigate("/admin/ordenes")}>Ordenes</button>
          <button onClick={() => navigate("/admin/clientes")}>Clientes</button>
          <button onClick={() => navigate("/admin/productos")}>Productos</button>
          <button onClick={() => navigate("/")}>Volver a landing</button>
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
