import { useNavigate } from "react-router";
import styles from "./SideBarAdmin.module.css";
export const SideBarAdmin = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.adminNavContainer}>
        <button
          onClick={() => navigate("/admin/ventas")}
          className={styles.buttonNavAdmin}
        >
          Ventas
        </button>
        <button
          onClick={() => navigate("/admin/visitas")}
          className={styles.buttonNavAdmin}
        >
          Visitas
        </button>
        <button
          onClick={() => navigate("/admin/ordenes")}
          className={styles.buttonNavAdmin}
        >
          Ordenes
        </button>
        <button
          onClick={() => navigate("/admin/clientes")}
          className={styles.buttonNavAdmin}
        >
          Clientes
        </button>
        <button
          onClick={() => navigate("/admin/productos")}
          className={styles.buttonNavAdmin}
        >
          Productos
        </button>
      </div>
    </div>
  );
};
