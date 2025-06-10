import { create } from "zustand";
import { ICarritoItems } from "../../types/Producto/ICarritoItems";

interface EstadoCarrito {
  carrito: ICarritoItems[];

  agregarAlCarrito: (item: Omit<ICarritoItems, "cantidad">) => void;
  eliminarDelCarrito: (productoId: number, talleId: number) => void;
  setCantidad: (
    producotId: number,
    talleId: number,
    nuevaCantidad: number
  ) => void;
}

export const useCarritoStore = create<EstadoCarrito>((set) => ({
  carrito: [],

  agregarAlCarrito: (item) =>
    set((state: EstadoCarrito) => {
      const existe = state.carrito.find(
        (i) => i.producto.id === item.producto.id && i.talleId === item.talleId
      );
      if (existe) {
        return {
          carrito: state.carrito.map((i) =>
            i.producto.id === item.producto.id && i.talleId === item.talleId
              ? { ...i, cantidad: i.cantidad + 1 }
              : i
          ),
        };
      }
      return {
        carrito: [...state.carrito, { ...item, cantidad: 1 }],
      };
    }),

  eliminarDelCarrito: (productoId, talleId) =>
    set((state: EstadoCarrito) => ({
      carrito: state.carrito.filter(
        (i) => i.producto.id !== productoId || i.talleId !== talleId
      ),
    })),

  setCantidad: (productoId, talleId, nuevaCantidad) =>
    set((state: EstadoCarrito) => ({
      carrito: state.carrito.map((i) =>
        i.producto.id === productoId && i.talleId === talleId
          ? { ...i, cantidad: nuevaCantidad }
          : i
      ),
    })),
}));
