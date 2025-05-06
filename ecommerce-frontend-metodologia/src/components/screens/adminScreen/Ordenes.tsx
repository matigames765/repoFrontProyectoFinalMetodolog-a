import { useNavigate } from "react-router-dom";
import styles from "./AdminScreen.module.css";

export const Ordenes = () => {
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
              <p>id_ordenDeCompra</p>
              <p>#2657</p>
              <p>#2656</p>
              <p>#2655</p>
              <p>#2654</p>
            </div>
            <div>
              <p>Fecha</p>
              <p>28/04/2025</p>
              <p>28/04/2025</p>
              <p>28/04/2025</p>
              <p>28/04/2025</p>
            </div>
            <div>
              <p>direccion</p>
              <p>Mendoza, Argentina</p>
              <p>San Juan, Argentina</p>
              <p>Buenos Aires, Argentina</p>
              <p>Santiago, Chile</p>
            </div>
            <div>
              <p>estado</p>
              <p>En camino</p>
              <p>Entregado</p>
              <p>En camino</p>
              <p>En camino</p>
            </div>
            <div>
              <p>Total</p>
              <p>100.000</p>
              <p>100.000</p>
              <p>100.000</p>
              <p>100.000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
