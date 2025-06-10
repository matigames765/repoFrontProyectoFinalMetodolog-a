import axios from "axios";
import { ILogin } from "../../types/authenticate/ILogin";
import { IUsuario } from "../../types/Usuario/IUsuario";

export const loginController = async(user: ILogin) => {
    try {
        const response = await axios.post("http://localhost:9000/auth/login", user)
        return response.data;
    } catch (error) {
        console.error("Error en el loginController: ", error)
    }
}

export const registerController = async(user: IUsuario) => {
    try {
        const response = await axios.post("http://localhost:9000/auth/register", user)
        return response.data;
    } catch (error) {
        console.error("Error en el loginController: ", error)
    }
}