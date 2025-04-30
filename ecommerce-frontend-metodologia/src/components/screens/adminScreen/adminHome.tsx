import { useNavigate } from "react-router-dom";
import styles from "./AdminScreen.module.css";

export const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <>
        <h2>Administración</h2>
      <div className={styles.adminHomeDesplegable}>
        <button onClick={() => navigate("/admin/ventas")}>Ventas</button>
        <button onClick={() => navigate("/admin/visitas")}>Visitas</button>
        <button onClick={() => navigate("/admin/ordenes")}>Ordenes</button>
        <button onClick={() => navigate("/admin/clientes")}>Clientes</button>
        <button onClick={() => navigate("/admin/productos")}>Productos</button>
      </div>
    </>

  );
};
