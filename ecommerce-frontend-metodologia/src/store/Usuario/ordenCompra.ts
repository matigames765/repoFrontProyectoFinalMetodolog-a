import { create } from "zustand";
import { IOrdenCompra } from "../../types/Usuario/IOrdenCompra";

interface IOrdenCompraStore {
    ordenesCompra: IOrdenCompra[],

    setArrayOrdenesCompra: (ordenes: IOrdenCompra[]) => void
}

export const ordenCompraStore = create<IOrdenCompraStore>((set) => ({
    ordenesCompra: [],

    // setear array de órdenes de compra
    setArrayOrdenesCompra: (ordenesCompraIn) => set(() => ({ ordenesCompra: ordenesCompraIn }))
}));
