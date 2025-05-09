import { useEffect } from "react";
import styles from "./SectionImagenesCatalogo.module.css";
import { imagenProductoStore } from "../../../../store/Producto/imagenProductoStore";
import { useImagenesProductos } from "../../../../hooks/Producto/useImagenesProductos";
import { getAllImagenesProductos } from "../../../../http/Producto/imagenProducto";
import { useDetallesProductos } from "../../../../hooks/Producto/useDetallesProductos";
import { tallesStore } from "../../../../store/Producto/tallesStore";

export const SectionImagenesCatalogo = () => {

  const {detallesProductos, getDetallesProductosHook} = useDetallesProductos()

  const talleActivo = tallesStore((state) => state.talleActivo)

  useEffect(() => {
    getDetallesProductosHook()
  }, [detallesProductos])

  return (
    <div className={styles.principalContainerSectionImagenesCatalogo}>
      {detallesProductos.map((detalleProducto, index) => (
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
      ))}
    </div>
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