import { create } from "zustand";
import { IProducto } from "../../types/Producto/IProducto";
import { IDetalleProductos } from "../../types/Producto/IDetalleProducto";

interface IProductoStore{
    productos: IProducto[],
    productosInactivos: IProducto[]
    setArrayProductos: (productos: IProducto[]) => void,
    crearProductoStore: (producto: IProducto) => void,
    eliminarProductoStore: (idProducto: number) => void,
    addDetalleProductoOnProductoStore: (detalleProducto: IDetalleProductos, idProducto: number) => void,
    editarProductoStore: (producto: IProducto) => void,
    inactivarProductoStore: (idProducto: number) => void,
    activarProductoStore: (idProducto: number) => void
}

export const productoStore = create<IProductoStore>((set) => ({
    productos: [],
    productosInactivos: [],

    //setear array de productos
    setArrayProductos: (productosIn) => set(() => ({productos: productosIn})),

    //crear producto
    crearProductoStore: (productoIn) => set((state) => ({
        productos: [...state.productos, productoIn]
    })),

    //eliminar producto
    eliminarProductoStore: (idProductoIn) => set((state) => ({
        productos: state.productos.filter((producto) => producto.id ! == idProductoIn)
    })),

    //editar un producto
    editarProductoStore: (productoIn) => set((state) => ({
        productos: state.productos.map((producto) => productoIn.id === producto.id ? {...producto, ...productoIn}: producto)
    })),

    //inactivar un producto
    inactivarProductoStore: (idProductoIn) => set((state) => ({
        productos: state.productos.map((producto) => producto.id === idProductoIn ? {...producto, estado: false}: producto)
    })),

    //activar un producto
    activarProductoStore: (idProductoIn) => set((state) => ({
        productos: state.productos.map((producto) => producto.id === idProductoIn ? {...producto, estado: true}: producto)
    })),


    //añadir un detalle a un producto
    addDetalleProductoOnProductoStore: (detalleProductoIn, idProductoIn) => set((state) => ({
    productos: state.productos.map((producto) => 
        producto.id === idProductoIn
            ? {
                ...producto,
                detallesProductos: [...(producto.detallesProductos || []), detalleProductoIn]
              }
            : producto
    )
    }))
}))