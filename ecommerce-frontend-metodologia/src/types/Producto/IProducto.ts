import { ICategoria } from "./ICategoria";
import { IDetalleProductos } from "./IDetalleProducto";
import { TipoProducto } from "./TipoProducto";

export interface IProducto{
    id?: number,
    nombre?: string,
    categoria?: ICategoria,
    seccion?: string,
    estado?: boolean,
    tipoProducto?: TipoProducto
    detallesProductos?: IDetalleProductos[],
}


