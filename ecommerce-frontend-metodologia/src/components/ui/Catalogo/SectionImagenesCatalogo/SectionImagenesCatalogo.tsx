import { useEffect} from "react";
import styles from "./SectionImagenesCatalogo.module.css";
import { useDetallesProductos } from "../../../../hooks/Producto/useDetallesProductos";
import { filterStore } from "../../../../store/Producto/filterStore";


export const SectionImagenesCatalogo = () => {

  const {detallesProductos, getDetallesProductosHook} = useDetallesProductos()

  const talleActivo = filterStore(state => state.talleActivo)
  const ordenPrecioActivo = filterStore(state => state.ordenPrecioActivo)
  const tipoProductoSeleccionadoActivo = filterStore(state => state.tipoProductoSeleccionadoActivo)
  const categoriaActiva = filterStore(state => state.categoriaActiva)

  useEffect(() => {
    getDetallesProductosHook()
  }, [])

  useEffect(() => {
    getDetallesProductosHook()
  }, [talleActivo, ordenPrecioActivo, tipoProductoSeleccionadoActivo])

  return (
    <div className={styles.principalContainerSectionImagenesCatalogo}>
      {
        detallesProductos.map((detalleProducto, index) => (
        <div key={index} className={styles.containerImagenesCatalogo}>
          <img
            src={detalleProducto.imagenProducto.url}
            alt={detalleProducto.imagenProducto.alt || "imagen de producto"}
            className={styles.imagenesCatalogo}
            width="60%"
            height="60%"
          />
          <div className={styles.containerPrecioInfoImagenesCatalogo}>
            <h6>precio: ${detalleProducto.precio.precioVenta}</h6>
            <button className={styles.buttonImagenesCatalogo}>Ver más</button>
          </div>
        </div>
        ))
        }
    </div>
  );
}

