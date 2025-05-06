import { useNavigate } from "react-router";
import styles from "./NavBarAdmin.module.css";
export const NavBarAdmin = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.adminNavContainer}>
        <h2>Administracion</h2>
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
        <button
          onClick={() => navigate("/")}
          className={styles.buttonNavAdminLanding}
        >
          Volver a landing
        </button>
      </div>
    </div>
  );
};
