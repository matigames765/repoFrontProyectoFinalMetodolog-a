import { create } from "zustand";
import { IOrdenCompraDetalle } from "../../types/Usuario/IOrdenCompraDetalle";

interface IOrdenCompraDetalleStore {
    ordenesCompraDetalle: IOrdenCompraDetalle[],

    setArrayOrdenesCompraDetalle: (detalles: IOrdenCompraDetalle[]) => void
}

export const ordenCompraDetalleStore = create<IOrdenCompraDetalleStore>((set) => ({
    ordenesCompraDetalle: [],

    // setear array de detalles de órdenes de compra
    setArrayOrdenesCompraDetalle: (ordenesCompraDetallesIn) => set(() => ({ ordenesCompraDetalle: ordenesCompraDetallesIn }))
}));
