import { IImagenProducto } from "./IImagenProducto";
import { IPrecio } from "./IPrecio";
import { IProducto } from "./IProducto";
import { ITalles } from "./ITalles";

export interface IDetalleProductos {
    id: number;
    tallesDetalleProductos: ITalles[];
    stock: number;
    producto?: IProducto; 
    color: string;
    estado: boolean;
    precio: IPrecio;
    imagenProducto: IImagenProducto;
}