import { useEffect, useState } from "react";
import styles from "./OrdenesAdmin.module.css";
import { useOrdenesCompra } from "../../../../hooks/Usuario/useOrdenCompra";
import { ModalDetalleOrden } from "../ModalDetalleOrden/ModalDetalleOrden";

export const OrdenesAdmin = () => {

  const [openModalOrdenDetalle, setOpenModalOrdenDetalle] = useState(false)

  const {ordenesCompra, getOrdenesCompraHook} = useOrdenesCompra()

  useEffect(() => {
    getOrdenesCompraHook()
  }, [])
  return (
    <>
      <div className={styles.containerPrincipal}>
        <div className={styles.divOrdenes}>
          <div className={styles.idOrdenDeCompra}>
            <h3 className={styles.tituloColumna}>ID de Compra</h3>
            {ordenesCompra.map((orden) => <p>{orden.id}</p>)}
          </div>
          <div className={styles.fechaOrden}>
            <h3 className={styles.tituloColumna}>Fecha</h3>
            {ordenesCompra.map((orden) => <p>{orden.fechaCompra}</p>)}
          </div>
          {/* <div className={styles.direccion}>
            <h3 className={styles.tituloColumna}>Direccion</h3>
            {ordenesCompra.map((orden) => 
            <>
              <p>Pais: {orden.direccionEnvio.pais}</p>
              <p>Provincia: {orden.direccionEnvio.provincia}</p>
              <p>Departamento: {orden.direccionEnvio.departamento}</p>
              <p>Localidad: {orden.direccionEnvio.localidad}</p>
            </>)}
          </div> */}
          <div className={styles.estado}>
            <h3 className={styles.tituloColumna}>Total</h3>
            {ordenesCompra.map((orden) => <p>{orden.total}</p>)}
          </div>
          {/* <div className={styles.totalOrden}>
            <h3 className={styles.tituloColumna}>Detalle</h3>
            <button className={styles.verDetalleOrden} onClick={() => {
              setOpenModalOrdenDetalle(true)
            }}>Ver detalle</button>
          </div> */}
        </div>
      </div>
      {openModalOrdenDetalle && <ModalDetalleOrden />}
    </>
  );
};
