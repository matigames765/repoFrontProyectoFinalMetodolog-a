import { FC } from "react";
import styles from "./PopUpCart.module.css";
import { CircleAlert, X } from "lucide-react";
import { ArticuloTarjeta } from "./ArticuloTarjeta";
import { useCarritoStore } from "../../../store/Producto/carritoStore";
import { useNavigate } from "react-router";

type ICardPopUp = {
  handleCloseModal: () => void;
  visible: boolean;
};

export const PopUpCart: FC<ICardPopUp> = ({ handleCloseModal, visible }) => {
  const navigate = useNavigate();
  const handleNavigateToCheckout = () => {
    navigate("/checkout");
  };

  const articulosEnCarrito = useCarritoStore((state) => state.carrito);
  const total = articulosEnCarrito.reduce((acc, item) => {
    const price = item.producto.precio?.precioVenta || 0;
    return acc + price * item.cantidad;
  }, 0);
  return (
    <div
      className={`${styles.overlay} ${visible ? styles.show : ""}`}
      onClick={handleCloseModal}
    >
      <div
        className={`${styles.popupCart} ${visible ? styles.show : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.popupContent}>
          <div className={styles.navbarCarrito}>
            <h5>Carrito de compras</h5>
            <button
              className={styles.navbarCarritoBoton}
              onClick={handleCloseModal}
            >
              <X size={40} />
            </button>
          </div>

          {articulosEnCarrito.length > 0 ? (
            <>
              {articulosEnCarrito.map((item) => (
                <ArticuloTarjeta
                  key={`${item.producto.id}-${item.talleId}`}
                  item={item}
                />
              ))}
              <div className={styles.totalCarritoContainer}>
                <h5 className={styles.totalCarrito}>
                  Total: ${total.toLocaleString()}
                </h5>
              </div>
              <div className={styles.checkoutContainer}>
                <button
                  className={styles.checkoutButton}
                  onClick={handleNavigateToCheckout}
                >
                  Ir a pagar
                </button>
              </div>
            </>
          ) : (
            <h6 className={styles.sinArticulos}>
              <CircleAlert /> El carrito de compras está vacío.
            </h6>
          )}
        </div>
      </div>
    </div>
  );
};
