import { IDetalleProductos } from "./IDetalleProducto";

export interface ICarritoItems {
  producto: IDetalleProductos;
  talleId: number;
  cantidad: number;
}
