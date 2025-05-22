import { useEffect, useState } from "react";
import styles from "./SectionImagenesCatalogo.module.css";
import { useDetallesProductos } from "../../../../hooks/Producto/useDetallesProductos";
import ViewProduct from "../ViewProduct/ViewProduct";
import { detalleProductoStore } from "../../../../store/Producto/detalleProductoStore";
import { useShallow } from "zustand/shallow";
import { IDetalleProductos } from "../../../../types/Producto/IDetalleProducto";
export const SectionImagenesCatalogo = () => {

  const { detallesProductos, getDetallesProductosHook } = useDetallesProductos()

  //const talleActivo = tallesStore((state) => state.talleActivo)
  
  const { detalleActivo, setDetalleActivo } = detalleProductoStore(useShallow((state) => ({
    detalleActivo: state.detalleActivo,
    setDetalleActivo: state.setDetalleActivo
  })))

  // usamos una variable para mostrar el modal del detalleProducto
  const [view, setView] = useState<boolean>(false);

  // usamos una funcion fecha para mostrar el modal y setear el detale activo
  const handleView = (detalle: IDetalleProductos) => {
    setView(true)
    setDetalleActivo(detalle)
  }

  // usamos una funcion fecha para dejar de mostrar el modal y dejar el detalleActivo en null
  const handleClose = () => {
    setView(false)
    setDetalleActivo(null)
 }

 useEffect(() => {
    console.log("Detalle activo: ", detalleActivo)
 }, [detalleActivo])
  useEffect(() => {
    const handleGetAllDetalle = async () => {

      getDetallesProductosHook()
    }
    handleGetAllDetalle()
  }, [detallesProductos])

  return (
    <>
      <div className={styles.principalContainerSectionImagenesCatalogo}>
        {detallesProductos.map((detalleProducto, index) => (
          <div key={index} className={styles.containerImagenesCatalogo}>
            <img
              src={detalleProducto.imagenProducto.url || "no hay imagen"}
              alt={detalleProducto.imagenProducto.alt || "imagen de producto"}
              className={styles.imagenesCatalogo}
            />
            <div className={styles.containerPrecioInfoImagenesCatalogo}>
              <h6>precio: ${detalleProducto.precio.precioVenta}</h6>
              <button onClick={() => handleView(detalleProducto)} className={styles.buttonImagenesCatalogo}>Ver más</button>
            </div>
          </div>
        ))}
      </div>
        <ViewProduct show={view} detalle={detalleActivo!} handleClose={handleClose}/>
      
    </>
  );
}

// <div className={styles.principalContainerSectionImagenesCatalogo}>
//   <div className={styles.containerImagenesCatalogo}>
//     <img
//       src="src/Imagenes/imagenPrincipalMujer.avif"
//       alt="chica que juega basquet"
//       className={styles.imagenesCatalogo}
//       width="60%"
//       height="60%"
//     />
//     <div className={styles.containerPrecioInfoImagenesCatalogo}>
//       <h6>Precio</h6>
//       <button className={styles.buttonImagenesCatalogo}>Ver mas</button>
//     </div>
//   </div>
//   <div className={styles.containerImagenesCatalogo}>
//     <img
//       src="src/Imagenes/imagenPrincipalMujer.avif"
//       alt="chica que juega basquet"
//       className={styles.imagenesCatalogo}
//       width="60%"
//       height="60%"
//     />
//     <div className={styles.containerPrecioInfoImagenesCatalogo}>
//       <h6>Precio</h6>
//       <button className={styles.buttonImagenesCatalogo}>Ver mas</button>
//     </div>
//   </div>
//   <div className={styles.containerImagenesCatalogo}>
//     <img
//       src="src/Imagenes/imagenPrincipalMujer.avif"
//       alt="chica que juega basquet"
//       className={styles.imagenesCatalogo}
//       width="60%"
//       height="60%"
//     />
//     <div className={styles.containerPrecioInfoImagenesCatalogo}>
//       <h6>Precio</h6>
//       <button className={styles.buttonImagenesCatalogo}>Ver mas</button>
//     </div>
//   </div>
//   <div className={styles.containerImagenesCatalogo}>
//     <img
//       src="src/Imagenes/imagenPrincipalMujer.avif"
//       alt="chica que juega basquet"
//       className={styles.imagenesCatalogo}
//       width="60%"
//       height="60%"
//     />
//     <div className={styles.containerPrecioInfoImagenesCatalogo}>
//       <h6>Precio</h6>
//       <button className={styles.buttonImagenesCatalogo}>Ver mas</button>
//     </div>
//   </div>
//   <div className={styles.containerImagenesCatalogo}>
//     <img
//       src="src/Imagenes/imagenPrincipalMujer.avif"
//       alt="chica que juega basquet"
//       className={styles.imagenesCatalogo}
//       width="60%"
//       height="60%"
//     />
//     <div className={styles.containerPrecioInfoImagenesCatalogo}>
//       <h6>Precio</h6>
//       <button className={styles.buttonImagenesCatalogo}>Ver mas</button>
//     </div>
//   </div>
//   <div className={styles.containerImagenesCatalogo}>
//     <img
//       src="src/Imagenes/imagenPrincipalMujer.avif"
//       alt="chica que juega basquet"
//       className={styles.imagenesCatalogo}
//       width="60%"
//       height="60%"
//     />
//     <div className={styles.containerPrecioInfoImagenesCatalogo}>
//       <h6>Precio</h6>
//       <button className={styles.buttonImagenesCatalogo}>Ver mas</button>
//     </div>
//   </div>
//   <div className={styles.containerImagenesCatalogo}>
//     <img
//       src="src/Imagenes/imagenPrincipalMujer.avif"
//       alt="chica que juega basquet"
//       className={styles.imagenesCatalogo}
//       width="60%"
//       height="60%"
//     />
//     <div className={styles.containerPrecioInfoImagenesCatalogo}>
//       <h6>Precio</h6>
//       <button className={styles.buttonImagenesCatalogo}>Ver mas</button>
//     </div>
//   </div>
//   <div className={styles.containerImagenesCatalogo}>
//     <img
//       src="src/Imagenes/imagenPrincipalMujer.avif"
//       alt="chica que juega basquet"
//       className={styles.imagenesCatalogo}
//       width="60%"
//       height="60%"
//     />
//     <div className={styles.containerPrecioInfoImagenesCatalogo}>
//       <h6>Precio</h6>
//       <button className={styles.buttonImagenesCatalogo}>Ver mas</button>
//     </div>
//   </div>
//   <div className={styles.containerImagenesCatalogo}>
//     <img
//       src="src/Imagenes/imagenPrincipalMujer.avif"
//       alt="chica que juega basquet"
//       className={styles.imagenesCatalogo}
//       width="60%"
//       height="60%"
//     />
//     <div className={styles.containerPrecioInfoImagenesCatalogo}>
//       <h6>Precio</h6>
//       <button className={styles.buttonImagenesCatalogo}>Ver mas</button>
//     </div>
//   </div>
//   <div className={styles.containerImagenesCatalogo}>
//     <img
//       src="src/Imagenes/imagenPrincipalMujer.avif"
//       alt="chica que juega basquet"
//       className={styles.imagenesCatalogo}
//       width="60%"
//       height="60%"
//     />
//     <div className={styles.containerPrecioInfoImagenesCatalogo}>
//       <h6>Precio</h6>
//       <button className={styles.buttonImagenesCatalogo}>Ver mas</button>
//     </div>
//   </div>
// </div>