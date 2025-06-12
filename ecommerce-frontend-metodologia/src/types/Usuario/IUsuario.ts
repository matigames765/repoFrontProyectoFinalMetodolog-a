import { IRol } from "./IRol";


export interface IUsuario{
    id: number,
    nombre: string,
    contraseña: string,
    rol: IRol,
    email: string;
    dni: number
}