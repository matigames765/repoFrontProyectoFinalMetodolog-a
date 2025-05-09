import { create } from "zustand"
import { IPrecio } from "../../types/Producto/IPrecio"

interface IPrecioStore{
    precios: IPrecio[],

    setArrayPrecios: (precios: IPrecio[]) => void
}

export const precioStore = create<IPrecioStore>((set) => ({
    precios: [],

    //setear array de descuentos
    setArrayPrecios: (preciosIn) => set(() => ({precios: preciosIn}))
}))