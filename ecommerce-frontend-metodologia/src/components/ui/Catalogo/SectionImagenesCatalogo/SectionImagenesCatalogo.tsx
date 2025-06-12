import { useEffect, useState } from "react";
import styles from "./SectionImagenesCatalogo.module.css";
import { useDetallesProductos } from "../../../../hooks/Producto/useDetallesProductos";
import ViewProduct from "../ViewProduct/ViewProduct";
import { detalleProductoStore } from "../../../../store/Producto/detalleProductoStore";
import { useShallow } from "zustand/shallow";
import { IDetalleProductos } from "../../../../types/Producto/IDetalleProducto";
import { filterStore } from "../../../../store/Producto/filterStore";
export const SectionImagenesCatalogo = () => {
  const { detallesProductos, getDetallesProductosHook } =
    useDetallesProductos();

  const { detalleActivo, setDetalleActivo } = detalleProductoStore(
    useShallow((state) => ({
      detalleActivo: state.detalleActivo,
      setDetalleActivo: state.setDetalleActivo,
    }))
  );

  const precioMaxActivo = filterStore((state) => state.precioMaxActivo)
  const talleActivo = filterStore((state) => state.talleActivo);
  const ordenPrecioActivo = filterStore((state) => state.ordenPrecioActivo);
  const tipoProductoSeleccionadoActivo = filterStore(
    (state) => state.tipoProductoSeleccionadoActivo
  );

  const buscadorActivo = filterStore((state) => state.buscadorActivo);

  useEffect(() => {
    getDetallesProductosHook();
  }, []);

  useEffect(() => {
    getDetallesProductosHook();
  }, [
    talleActivo,
    ordenPrecioActivo,
    tipoProductoSeleccionadoActivo,
    buscadorActivo,
    precioMaxActivo
  ]);

  // usamos una variable para mostrar el modal del detalleProducto
  const [view, setView] = useState<boolean>(false);

  // usamos una funcion fecha para mostrar el modal y setear el detale activo
  const handleView = (detalle: IDetalleProductos) => {
    setView(true);
    setDetalleActivo(detalle);
  };

  // usamos una funcion fecha para dejar de mostrar el modal y dejar el detalleActivo en null
  const handleClose = () => {
    setView(false);
    setDetalleActivo(null);
  };


  const detallesFiltrados: IDetalleProductos[] = []

  
  for (let i = 0; i < detallesProductos.length; i++) {
    const detallePrimero = detallesProductos[i];
    const detalleSegundo = detallesProductos[i + 1];

    if (detalleSegundo && detallePrimero.color === detalleSegundo.color) {
      if (detallePrimero.estado === true && detalleSegundo.estado === false) {
        detallesFiltrados.push(detalleSegundo);
      } else if (detallePrimero.estado === false && detalleSegundo.estado === true) {
        detallesFiltrados.push(detallePrimero);
      } else {
      detallesFiltrados.push(detallePrimero);
      }
      i++; 
    } else {
    detallesFiltrados.push(detallePrimero);
    }
  }
  

  return (
    <>
      <div className={styles.principalContainerSectionImagenesCatalogo}>
        {detallesFiltrados.map((detalleProducto, index) => (detalleProducto.estado === true &&
          <div key={index} className={styles.containerImagenesCatalogo}>
            <img
              src={detalleProducto.imagenProducto!.url || "no hay imagen"}
              alt={detalleProducto.imagenProducto!.alt || "imagen de producto"}
              className={styles.imagenesCatalogo}
            />
            <div className={styles.containerPrecioInfoImagenesCatalogo}>
              <h6>precio: ${detalleProducto.precio!.precioVenta}</h6>
              <button
                onClick={() => handleView(detalleProducto)}
                className={styles.buttonImagenesCatalogo}
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
      <ViewProduct
        show={view}
        detalle={detalleActivo!}
        handleClose={handleClose}
      />
    </>
  );
};
