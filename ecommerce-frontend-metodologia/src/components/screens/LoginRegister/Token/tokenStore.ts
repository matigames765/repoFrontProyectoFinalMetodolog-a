import { create } from "zustand"
import { IToken } from "../types"
import { IDetalleProductos } from "../../../../types/Producto/IDetalleProducto"

interface ITokenStore {
    token: IToken | null,
    detalleProductos: IDetalleProductos[] | []
    setToken: (token: IToken | null) => void,
    setDetalles: (newDetalles: IDetalleProductos[] | []) => void
}

export const tokenStore =  create<ITokenStore>((set) => ({
    token: null,
    detalleProductos: [],
    setToken: (newToken) => set(() => ({
        token: newToken
    })),
    setDetalles: (newDetalles) => set(() => ({
        detalleProductos: newDetalles
    }))
}))