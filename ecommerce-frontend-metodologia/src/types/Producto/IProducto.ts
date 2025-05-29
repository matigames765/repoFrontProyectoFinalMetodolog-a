import { ICategoria } from "./ICategoria";
import { IDetalleProductos } from "./IDetalleProducto";
import { TipoProducto } from "./TipoProducto";

export interface IProducto{
    id: number,
    nombre: string,
    categoria: ICategoria,
    tipoProducto: TipoProducto;
    sexo: string,
    detallesProductos: IDetalleProductos,
}


