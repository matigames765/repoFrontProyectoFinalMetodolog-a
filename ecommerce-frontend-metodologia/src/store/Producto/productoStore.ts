import { create } from "zustand";
import { IProducto } from "../../types/Producto/IProducto";

interface IProductoStore{
    productos: IProducto[],
    setArrayProductos: (productos: IProducto[]) => void,
    crearProductoStore: (producto: IProducto) => void,
    eliminarProductoStore: (idProducto: number) => void
}

export const productoStore = create<IProductoStore>((set) => ({
    productos: [],

    //setear array de productos
    setArrayProductos: (productosIn) => set(() => ({productos: productosIn})),

    //crear producto
    crearProductoStore: (productoIn) => set((state) => ({
        productos: [...state.productos, productoIn]
    })),

    //eliminar producto
    eliminarProductoStore: (idProductoIn) => set((state) => ({
        productos: state.productos.filter((producto) => producto.id ! == idProductoIn)
    }))
}))