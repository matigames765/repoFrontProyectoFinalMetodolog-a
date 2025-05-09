import { Trash2 } from "lucide-react";
import styles from "./ArticuloTarjeta.module.css";
import { useState } from "react";

export const ArticuloTarjeta = () => {
  const [cantidad, setCantidad] = useState(1);

  const aumentar = () => setCantidad((prev) => prev + 1);
  const disminuir = () => {
    if (cantidad > 1) setCantidad((prev) => prev - 1);
  };
  return (
    <div className={styles.containerTarjetaArticulo}>
      <div className={styles.ArticuloCargado}>
        <img
          src="src/Imagenes/ImagenPrincipalNiño.avif"
          alt="articulo en el carrito"
          width="70px"
          height="80px"
        />
        <div className={styles.containerDescripcionArticulo}>
          Remera Running(M)
        <div className={styles.cantidadSelector}>
          <button onClick={disminuir}>&lt;</button>
          <span>{cantidad}</span>
          <button onClick={aumentar}>&gt;</button>
        </div>
      </div>
      </div>
      
      <div className={styles.precioArticulo}>
        <button>
          <Trash2 size={30}/>
        </button>
        <div>$100.000</div>
      </div>
    </div>
  );
};
