import { IProducto } from "../Producto/IProducto";
import { IOrdenCompra } from "./IOrdenCompra";

export interface IOrdenCompraDetalle{
    id: number,
    ordenCompra: IOrdenCompra,
    producto: IProducto,
    cantidad: number
}