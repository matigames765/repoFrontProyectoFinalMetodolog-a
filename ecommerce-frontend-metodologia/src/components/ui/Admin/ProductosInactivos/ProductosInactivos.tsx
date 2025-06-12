import { useEffect } from 'react'
import { productoStore } from '../../../../store/Producto/productoStore'
import styles from './ProductosInactivos.module.css'
import { usePrecios } from '../../../../hooks/Producto/usePrecios'
import { useProductos } from '../../../../hooks/Producto/useProductos'
import { useDetallesProductos } from '../../../../hooks/Producto/useDetallesProductos'

export const ProductosInactivos = () => {

    const {productos, getProductosHook, activarProductoHook} = useProductos()

    const{eliminadoLogicoDetalleProductoHook} = useDetallesProductos()

    const handleActivarProducto = (idProducto: number) => {
      activarProductoHook(idProducto)

      

      getProductosHook()
    }
    
    useEffect(() => {
      getProductosHook()

    }, [])
  return (
    <>
        <div className={styles.containerPrincipal}>
        <div className={styles.divProductosInactivos}>
          {productos.map((producto) => (producto.estado === false ? <div key={producto.id} className={styles.containerProductoInactivo}>
              <div>
                <p>Nombre producto: {producto.nombre}</p>
              <p>Seccion: {producto.seccion}</p>
              <p>Tipo de producto: {producto.tipoProducto}</p>
              {/* <p>Categoria: {producto.categoria!.nombre}</p> */}
              </div>
              <div>
                <button className={styles.buttonActivar} onClick={() => {
                  for(let i = 0; i < producto.detallesProductos?.length!; i++){
                    eliminadoLogicoDetalleProductoHook(producto.detallesProductos?.[i].id!)
                  }
                  handleActivarProducto(producto.id!)
                }}>Activar Producto</button>
              </div>
          </div>: null))}
        </div>
      </div>
    </>
  )
}
