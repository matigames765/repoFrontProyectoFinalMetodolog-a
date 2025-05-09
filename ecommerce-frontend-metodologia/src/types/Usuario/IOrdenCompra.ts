import { IDescuento } from "../Producto/IDescuento";
import { IDireccion } from "./IDireccion";
import { IUsuarioDireccion } from "./IUsuarioDireccion";

//despues es posible que tengamos que agregar varios detalles de ordenes compra aca, es decir una lista de ellos
export interface IOrdenCompra{
    id: number,
    usuarioDireccion: IUsuarioDireccion,
    total: number,
    descuento: IDescuento, //aca iria el descuento de tipo descuento o como number?
    fechaCompra: Date,
    direccionEnvio: IDireccion //aca iria la direccion como tipo direccion?
}