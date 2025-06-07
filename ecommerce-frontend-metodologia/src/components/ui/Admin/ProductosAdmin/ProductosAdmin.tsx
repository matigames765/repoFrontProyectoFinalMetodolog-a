import { useEffect, useState } from "react";
import { useProductos } from "../../../../hooks/Producto/useProductos";
import styles from "./ProductosAdmin.module.css";
import { useNavigate } from "react-router";
import { IProducto } from "../../../../types/Producto/IProducto";
import { ModalDetallesProductosAdmin } from "../ModalDetallesProductosAdmin/ModalDetallesProductosAdmin";
import { productoStore } from "../../../../store/Producto/productoStore";
import { ModalAgregarDetalleProducto } from "../ModalAgregarDetalleProducto/ModalAgregarDetalleProducto";

export const ProductosAdmin = () => {

  const {productos, getProductosHook} = useProductos()
  const [openModalDetallesProductos, setOpenModalDetallesProductos] = useState(false)
  const [productoVerDetalles, setProductoVerDetalles] = useState<IProducto>()
  const [openModalAgregarDetalleProducto, setOpenModalAgregarDetalleProducto] = useState(false)
  const [idProductoState, setIdProductoState] = useState(0)
  const [productoDetalle, setProductoDetalle] = useState<IProducto>()


  const onClose = () => {
    setOpenModalDetallesProductos(false)
    getProductosHook()
  }

  const onCloseAgregarDetalle = () => {
    setOpenModalAgregarDetalleProducto(false)
    getProductosHook()
  }

  useEffect(() => {
    getProductosHook()
    console.log("Productos obtenidos: ",productos)
  }, [])

  useEffect(() => {
    getProductosHook()
  }, [])


  return (
    <>
      <div className={styles.containerPrincipal}>
        <div className={styles.divProductos}>
          {productos.map((producto) => (<div key={producto.id} className={styles.containerProducto}>
            <div className={styles.informationProducto}>
              <p>Nombre producto: {producto.nombre}</p>
              <p>Seccion: {producto.seccion}</p>
              <p>Tipo de producto: {producto.tipoProducto}</p>
              <p>Categoria: {producto.categoria!.nombre}</p>
            </div>
          <div className={styles.buttonsProducto}>
            <button className={styles.buttonProducto} onClick={() => {
              setOpenModalAgregarDetalleProducto(true)
              setIdProductoState(producto.id!)
              setProductoDetalle(producto)
            }}>Añadir detalle producto</button>
            <button className={styles.buttonProducto} onClick={() => {
              setProductoVerDetalles(producto)
              setOpenModalDetallesProductos(true)
            }}>Ver detalles del producto</button>
          </div>
          </div>))}
        </div>
      </div>
      {openModalDetallesProductos && <ModalDetallesProductosAdmin producto={productoVerDetalles!} show={openModalDetallesProductos} onClose={onClose} />}
      {openModalAgregarDetalleProducto && <ModalAgregarDetalleProducto productoDetalle = {productoDetalle!} idProducto={idProductoState} show={openModalAgregarDetalleProducto} onClose={onCloseAgregarDetalle}/>}
    </>
  );
};
