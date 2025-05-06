import { ICategoria } from "./ICategoria";
import { IDetalleProductos } from "./IDetalleProducto";
import { TipoProducto } from "./TipoProducto";

export interface IProducto{
    id: string,
    nombre: string,
    categoria: ICategoria,
    tipoProducto: TipoProducto;
    sexo: string,
    detallesProductos: IDetalleProductos,
}