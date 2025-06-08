import { Modal } from 'react-bootstrap'
import styles from './ModalDetallesProductosAdmin.module.css'
import { FC, useEffect, useState } from 'react';
import { IProducto } from '../../../../types/Producto/IProducto';
import { useDetallesProductos } from '../../../../hooks/Producto/useDetallesProductos';
import { useProductos } from '../../../../hooks/Producto/useProductos';
import { productoStore } from '../../../../store/Producto/productoStore';
import { IDetalleProductos } from '../../../../types/Producto/IDetalleProducto';

interface ModalDetalleProductoProps {
  producto: IProducto;
  show: boolean;
  onClose: () => void;
}

export const ModalDetallesProductosAdmin: FC<ModalDetalleProductoProps> = ({show, onClose, producto}) => {
    const {eliminadoLogicoDetalleProductoHook, getDetallesProductosHook} = useDetallesProductos()
    const {getProductosHook} = useProductos()

    const [detalles, setDetalles] = useState<IDetalleProductos[]>(producto.detallesProductos!)

    const productos = productoStore((state) => state.productos)

    useEffect(() => {
        const productoo = productos.find((product => product.id === producto.id))

        setDetalles(productoo?.detallesProductos!)
        
    }, [productos])
  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Detalles Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.containerDetallesProductos}>
            {detalles!.map((detalle) => detalle.estado === true && <div key={detalle.id} className={styles.containerDetalleProducto}>
                <div className={styles.infoDetalle}>
                    <p>Stock: {detalle.stock}</p>
                    <p>Color: {detalle.color}</p>
                    <label>Imagen: {<img src={detalle.imagenProducto!.url} alt={detalle.imagenProducto!.alt} width='90vw' height='90vh' className={styles.imagenDetalleAdmin}></img>}</label>
                    <p>Precio: {detalle.precio!.precioVenta}</p>
                    <label>Talles: </label>
                    {<p>{detalle.tallesDetalleProductos!.map(t => t.talle).join(', ')}</p>}
                </div>
                <button className={styles.buttonEliminarDetalle} onClick={async() => {
                    eliminadoLogicoDetalleProductoHook(detalle.id!)
                    await getDetallesProductosHook()
                    await getProductosHook()
                }}>Eliminar detalle</button>
            </div>)}
        </div>
      </Modal.Body>
    </Modal>
  )
}
