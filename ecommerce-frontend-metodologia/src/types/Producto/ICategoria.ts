import { IProducto } from "./IProducto";

export interface ICategoria{
    id?: number,
    nombre?: string,
    categoriaPadre?: null | ICategoria,
    productos?: IProducto[]
}