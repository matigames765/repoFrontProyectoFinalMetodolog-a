import { IDireccion } from "./IDireccion";
import { IUsuario } from "./IUsuario";

export interface IUsuarioDireccion{
    id: number,
    usuario: IUsuario,
    direcciones: IDireccion[]
}