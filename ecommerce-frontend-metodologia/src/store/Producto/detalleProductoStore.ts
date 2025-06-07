import { create } from "zustand"
import { IDetalleProductos } from "../../types/Producto/IDetalleProducto"
import { ITalles } from "../../types/Producto/ITalles"

interface IDetalleProductoStore{
    detallesProductos: IDetalleProductos[],
    detalleActivo: IDetalleProductos | null,
    setDetalleActivo: (detalleProducto: IDetalleProductos | null) => void,
    setArrayDetallesProductos: (detallesProductos: IDetalleProductos[]) => void,
    crearDetalleProductoStore: (detalleProducto: IDetalleProductos) => void,
    eliminadoLogicoDetalleProductoStore: (idDetalle: number) => void,
    addTalleOnDetalleProductoStore: (idDetalle: number, talle: ITalles) => void,
    editarDetalleProductoStore: (detalleProducto: IDetalleProductos) => void
}

export const detalleProductoStore = create<IDetalleProductoStore>((set) => ({
    detallesProductos: [],
    detalleActivo: null,

    //setear el detalle activo
    setDetalleActivo: (detalleProducto) => set(() => ({
        detalleActivo: detalleProducto
    }))
    ,
    //setear array de detalles producto
    setArrayDetallesProductos: (detallesProductosIn) => set(() => ({detallesProductos: detallesProductosIn})),

    //crear el detalle
    crearDetalleProductoStore: (detalleProductoIn) => set((state) => ({
        detallesProductos: [...state.detallesProductos, detalleProductoIn]
    })),

    //eliminado logico detalle producto
    eliminadoLogicoDetalleProductoStore: (idDetalleIn) => set((state) => ({
        detallesProductos: state.detallesProductos.map((detalle) => detalle.id === idDetalleIn ? {...detalle, estado: false}: detalle)
    })),

    //añadir talle al detalle
    addTalleOnDetalleProductoStore: (idDetalleIn, talleIn) => set((state) => ({
        detallesProductos: state.detallesProductos.map((detalle) => 
        detalle.id === idDetalleIn
    ?{
        ...detalle,
        tallesDetalleProductos: [...(detalle.tallesDetalleProductos || []), talleIn]
    }
    : detalle)
    })),

    //editar el detalle producto
    editarDetalleProductoStore: (detalleProductoIn) => set((state) => ({
        detallesProductos: state.detallesProductos.map((detalleProducto) => detalleProductoIn.id === detalleProducto.id ? {...detalleProducto, ...detalleProductoIn}: detalleProducto)
    })),


}))