import { IPrecio } from "./IPrecio";
import { IProducto } from "./IProducto";
import { ITalles } from "./ITalles";

export interface IDetalleProductos{
    id: number,
    talles: ITalles[],
    stock: number,
    producto: IProducto,
    color: string,
    estado: boolean,
    precio: IPrecio
}