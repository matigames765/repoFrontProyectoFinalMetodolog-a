import { create } from "zustand"
import { IImagenProducto } from "../../types/Producto/IImagenProducto"

interface IImagenProductoStore{
    imagenesProductos: IImagenProducto[],
    setArrayImagenesProductos: (imagenesProductos: IImagenProducto[]) => void,
    crearImagenProductoStore: (imagenProducto: IImagenProducto) => void
}

export const imagenProductoStore = create<IImagenProductoStore>((set) => ({
    imagenesProductos: [],

    //setear imagenes de productos
    setArrayImagenesProductos: (imagenesProductosIn) => set(() => ({imagenesProductos: imagenesProductosIn})),

    //crear imagen del producto
    crearImagenProductoStore: (imagenProductoIn) => set((state) => ({
        imagenesProductos: [...state.imagenesProductos, imagenProductoIn]
    }))
}))