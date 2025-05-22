import { IImagenProducto } from "./IImagenProducto";
import { IPrecio } from "./IPrecio";
import { IProducto } from "./IProducto";
import { ITalles } from "./ITalles";

export interface IDetalleProductos{
    id: number,
    tallesDetalleProductos: ITalles[],
    stock: number,
    color: string,
    estado: boolean,
    producto: IProducto,
    precio: IPrecio,
    imagenProducto: IImagenProducto
}