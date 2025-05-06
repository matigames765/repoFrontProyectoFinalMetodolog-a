import { useNavigate } from "react-router";
import styles from "./AdminScreen.module.css";

export const AdminScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.containerAdminScreen}>
        <h2>Administración</h2>
        <div className={styles.adminHomeDesplegable}>
          <button
            onClick={() => navigate("/admin/ventas")}
            className={styles.buttonNav}
          >
            Ventas
          </button>
          <button
            onClick={() => navigate("/admin/visitas")}
            className={styles.buttonNav}
          >
            Visitas
          </button>
          <button
            onClick={() => navigate("/admin/ordenes")}
            className={styles.buttonNav}
          >
            Ordenes
          </button>
          <button
            onClick={() => navigate("/admin/clientes")}
            className={styles.buttonNav}
          >
            Clientes
          </button>
          <button
            onClick={() => navigate("/admin/productos")}
            className={styles.buttonNav}
          >
            Productos
          </button>
          <button
            onClick={() => navigate("/")}
            className={styles.buttonBackLanding}
          >
            Volver a landing
          </button>
        </div>
      </div>
    </>
  );
};
