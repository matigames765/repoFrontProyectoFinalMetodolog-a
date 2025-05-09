import { create } from "zustand"
import { IPrecio } from "../../types/Producto/IPrecio"

interface IPrecioStore{
    precios: IPrecio[],
    ordenPrecio: string | null,
    setArrayPrecios: (precios: IPrecio[]) => void,
    setOrdenPrecio: (ordenPrecio: string | null) => void
}

export const precioStore = create<IPrecioStore>((set) => ({
    precios: [],
    ordenPrecio: null,

    //setear la ordenacion por precion en catalogo
    setOrdenPrecio: (ordenPrecioIn) => (() => ({ordenPrecio: ordenPrecioIn})),

    //setear array de descuentos
    setArrayPrecios: (preciosIn) => set(() => ({precios: preciosIn}))
}))