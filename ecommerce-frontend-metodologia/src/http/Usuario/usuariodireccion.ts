import axios from "axios";
import { IUsuarioDireccion } from "../../types/Usuario/IUsuarioDireccion";

export const getAllUsuarioDirecciones = async (): Promise<IUsuarioDireccion[] | undefined> => {
    try {
        const response = await axios.get<IUsuarioDireccion[]>('http://localhost:9000/usuarioDireccion');
        return response.data;
    } catch (error) {
        console.log("Error al traer los usuarioDirecciones en getAllUsuarioDirecciones http: " + error);
    }
};
