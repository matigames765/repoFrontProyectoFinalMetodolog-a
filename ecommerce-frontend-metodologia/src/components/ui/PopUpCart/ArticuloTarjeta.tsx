import { Trash2 } from "lucide-react";
import styles from "./ArticuloTarjeta.module.css";
import { FC } from "react";
import { ICarritoItems } from "../../../types/Producto/ICarritoItems";
import { useCarritoStore } from "../../../store/Producto/carritoStore";
import { toast } from "react-toastify";

type ArticuloTarjetaProps = {
  item: ICarritoItems;
};

export const ArticuloTarjeta: FC<ArticuloTarjetaProps> = ({ item }) => {
  const { setCantidad, eliminarDelCarrito } = useCarritoStore();

  const aumentar = () => {
    setCantidad(item.producto.id, item.talleId, item.cantidad + 1);
  };

  const disminuir = () => {
    if (item.cantidad > 1) {
      setCantidad(item.producto.id, item.talleId, item.cantidad - 1);
    }
  };

  const eliminar = () => {
    eliminarDelCarrito(item.producto.id, item.talleId);
    toast.success("Producto eliminado!", { position: "top-left" });
  };
  const talleNombre =
    item.producto.tallesDetalleProductos.find((t) => t.id === item.talleId)
      ?.talle || "N/A";

  console.log(item);
  return (
    <div className={styles.containerTarjetaArticulo}>
      <div className={styles.ArticuloCargado}>
        <img
          src={
            item.producto.imagenProducto?.url ||
            "https://via.placeholder.com/70"
          }
          alt={item.producto.imagenProducto?.alt || "Imagen no disponible"}
          width="70px"
          height="80px"
        />
        <div className={styles.containerDescripcionArticulo}>
          {item.producto?.producto?.nombre || `Producto ID:${item.producto.id}`}
          <div className={styles.cantidadSelector}>
            <button onClick={disminuir}>&lt;</button>
            <span>{item.cantidad}</span>
            <button onClick={aumentar}>&gt;</button>
          </div>
          <div className={styles.talles}>
            <h3>Talle: {talleNombre}</h3>
          </div>
        </div>
      </div>

      <div className={styles.precioArticulo}>
        <button onClick={eliminar}>
          <Trash2 size={30} />
        </button>
        <div>${item.producto.precio?.precioVenta || 0}</div>
      </div>
    </div>
  );
};
