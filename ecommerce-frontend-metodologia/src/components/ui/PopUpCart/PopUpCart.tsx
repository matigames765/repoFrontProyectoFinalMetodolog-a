import { FC } from "react";
import styles from "./PopUpCart.module.css";
import { CircleAlert, X } from 'lucide-react';
import { ArticuloTarjeta } from "./ArticuloTarjeta";

type ICardPopUp = {
  handleCloseModal: () => void;
  visible: boolean;
};
const articulosEnCarrito = " "

export const PopUpCart: FC<ICardPopUp> = ({ handleCloseModal, visible }) => {

  return (
    <div
      className={`${styles.overlay} ${visible ? styles.show : ""}`}
      onClick={handleCloseModal}>
      <div className={`${styles.popupCart} ${visible ? styles.show : ""}`}
      onClick={(e) => e.stopPropagation()}>
        <div className={styles.popupContent}>
          <div className={styles.navbarCarrito}>
          <h5>Carrito de compras</h5>
          <button className={styles.navbarCarritoBoton} onClick={handleCloseModal} ><X size={40}/></button>
          </div>
          <div>

            <ArticuloTarjeta/>
          </div>
          {/* {articulosEnCarrito.length > 0 ?(
              ArticuloTarjeta()
            ):(
              <h6 className={styles.sinArticulos}> <CircleAlert /> El carrito de compras esta vacío.</h6>
            )} */}

        </div>
      </div>
    </div>
  );
};
