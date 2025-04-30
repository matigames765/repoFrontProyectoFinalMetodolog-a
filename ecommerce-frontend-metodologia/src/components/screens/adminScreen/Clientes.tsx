import { useNavigate } from "react-router-dom";

import styles from "./AdminScreen.module.css";

export const Clientes = () => {
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
              <p>id clientes</p>
              <p>#2857</p>
              <p>#2856</p>
              <p>#2855</p>
              <p>#2854</p>
            </div>
            <div>
              <p>pais</p>
              <p>Argentina</p>
              <p>Chile</p>
              <p>EE.UU.</p>
              <p>España</p>
            </div>
            <div>
              <p>Domicilio</p>
              <p>Calle xx N°</p>
              <p>Calle xx N°</p>
              <p>Calle xx N°</p>
              <p>Calle xx N°</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
