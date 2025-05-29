import axios from "axios"
import { IloginUser, IRegisterUser, IToken } from "../types";
import { IDetalleProductos } from "../../../../types/Producto/IDetalleProducto";

export const loginController = async (user: IloginUser) => {
    try {
        if (!user) {
            throw new DOMException("No se encontro el usuaro!!");
        }
        const response = await axios.post<IToken>("http://localhost:9000/auth/login", user);
        return response.data;
    } catch (err) {
        console.error("Error en loginController: ", err)
    }
}

export const registerController = async (user: IRegisterUser) => {
    try {
        if (!user) {
            throw new DOMException("No se encontro el usuaro!!");
        }
        const response = await axios.post<IToken>("http://localhost:9000/auth/register", user);
        return response.data;
    } catch (err) {
        console.error("Error en registerController: ", err)
    }
}


export const getDetallesController = async (token: IToken) => {
    try {
        if (!token) {
            throw new DOMException("No se encontro el token!!");
        }
        const response = await axios.get<IDetalleProductos[]>("http://localhost:9000/detalleProducto", {
            headers: {
                'Authorization': `Bearer ${token.token}`
            }
        }
        );
        return response.data;
    } catch (err) {
        console.error("Error en getProductosController: ", err)
    }
}