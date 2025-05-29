import { create } from "zustand"
import { IDetalleProductos } from "../../types/Producto/IDetalleProducto"

interface IDetalleProductoStore{
    detallesProductos: IDetalleProductos[],
    detalleActivo: IDetalleProductos | null,
    setDetalleActivo: (detalleProducto: IDetalleProductos | null) => void,
    setArrayDetallesProductos: (detallesProductos: IDetalleProductos[]) => void
}

export const detalleProductoStore = create<IDetalleProductoStore>((set) => ({
    detallesProductos: [],
    detalleActivo: null,
    setDetalleActivo: (detalleProducto) => set(() => ({
        detalleActivo: detalleProducto
    }))
    ,
    //setear array de detalles producto
    setArrayDetallesProductos: (detallesProductosIn) => set(() => ({detallesProductos: detallesProductosIn}))
}))