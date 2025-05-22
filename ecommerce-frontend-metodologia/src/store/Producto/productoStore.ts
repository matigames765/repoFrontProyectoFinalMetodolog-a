import { create } from "zustand";
import { IProducto } from "../../types/Producto/IProducto";

interface IProductoStore{
    productos: IProducto[],
    setArrayProductos: (productos: IProducto[]) => void
}

export const productoStore = create<IProductoStore>((set) => ({
    productos: [],

    //setear array de productos
    setArrayProductos: (productosIn) => set(() => ({productos: productosIn}))
}))