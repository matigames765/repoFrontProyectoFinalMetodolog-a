import { create } from "zustand"
import { IDetalleProductos } from "../../types/Producto/IDetalleProducto"

interface IDetalleProductoStore{
    detallesProductos: IDetalleProductos[],

    setArrayDetallesProductos: (detallesProductos: IDetalleProductos[]) => void
}

export const detalleProductoStore = create<IDetalleProductoStore>((set) => ({
    detallesProductos: [],

    //setear array de detalles producto
    setArrayDetallesProductos: (detallesProductosIn) => set(() => ({detallesProductos: detallesProductosIn}))
}))