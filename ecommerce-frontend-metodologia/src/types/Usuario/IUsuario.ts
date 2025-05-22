import { IRol } from "./IRol";
import { IUsuarioDireccion } from "./IUsuarioDireccion";

export interface IUsuario{
    id: number,
    nombre: string,
    rol: IRol,
    email: string;
    dni: number,
    usuarioDireccion: IUsuarioDireccion
}