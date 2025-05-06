import { IDescuento } from "./IDescuento";

export interface IPrecio{
    id: number,
    precioCompra: number,
    precioVenta: number,
    descuento: IDescuento
}