import { FC } from "react";
import { IOrdenCompra } from "../../../../types/Usuario/IOrdenCompra";
import styles from "./OrdenesUsuario.module.css";

interface OrdenesUsuarioProps {
  ordenes: IOrdenCompra[];
}

export const OrdenesUsuario: FC<OrdenesUsuarioProps> = ({ ordenes }) => {
  return (
    <div className={styles.ordenesContainer}>
      <h2>Mis Órdenes de Compra</h2>
      {ordenes.length === 0 ? (
        <p>No tenés órdenes registradas.</p>
      ) : (
        ordenes.map((orden) => (
          <div key={orden.id} className={styles.ordenCard}>
            <h3>Orden #{orden.id}</h3>
            <p>
              <strong>Fecha:</strong>{" "}
              {new Date(orden.fechaCompra).toLocaleDateString()}
            </p>
            <p>
              <strong>Total:</strong> ${orden.total.toFixed(2)}
            </p>
            {orden.descuento && (
              <p>
                <strong>Descuento aplicado:</strong>{" "}
                {orden.descuento.porcentaje}%
              </p>
            )}

            <div className={styles.envio}>
              <h4>Enviado a:</h4>
              <p>
                {orden.direccionEnvio.departamento},{" "}
                {orden.direccionEnvio.localidad},<br />
                {orden.direccionEnvio.provincia}, {orden.direccionEnvio.pais}
              </p>
            </div>

            <div className={styles.detalles}>
              <h4>Productos:</h4>
              <ul>
                {orden.detallesProductos.map((detalle, index) => (
                  <li key={index}>
                    <strong>
                      {detalle.producto?.nombre ?? "Producto desconocido"}
                    </strong>{" "}
                    x {detalle.stock ?? detalle.stock ?? 0} — $
                    {detalle.precio?.precioVenta ?? "N/A"}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
