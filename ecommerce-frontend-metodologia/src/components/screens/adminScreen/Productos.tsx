import { useNavigate } from "react-router-dom";
import styles from "./AdminScreen.module.css";

export const Productos = () => {
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
              <p>id producto</p>
              <p>#1114</p>
              <p>#1113</p>
              <p>#1112</p>
              <p>#1111</p>
            </div>
            <div>
              <p>Precio unitario</p>
              <p>$49.990</p>
              <p>$79.990</p>
              <p>$59.990</p>
              <p>$119.990</p>
            </div>
            <div>
              <p>Editar</p>
              <p>editar producto</p>
              <p>editar producto</p>
              <p>editar producto</p>
              <p>editar producto</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
