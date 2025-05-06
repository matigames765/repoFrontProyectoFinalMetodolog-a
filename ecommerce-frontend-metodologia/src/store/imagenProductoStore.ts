import { create } from "zustand"
import { IImagenProducto } from "../types/Producto/IImagenProducto"

interface IImagenProductoStore{
    imagenesProductos: IImagenProducto[],

    setArrayImagenesProductos: (imagenesProductos: IImagenProducto[]) => void
}

export const imagenProductoStore = create<IImagenProductoStore>((set) => ({
    imagenesProductos: [],

    //setear imagenes de productos
    setArrayImagenesProductos: (imagenesProductosIn) => set(() => ({imagenesProductos: imagenesProductosIn}))
}))