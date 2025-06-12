import axios from "axios";
import { ILogin } from "../../types/authenticate/ILogin";
import { IRegister } from "../../types/authenticate/IRegister";
import Swal from "sweetalert2";
// import { IToken } from "../../types/authenticate/IToken";

export const loginController = async (user: ILogin): Promise<string | undefined> => {
    const token = localStorage.getItem("authentication")
    try {
        const response = await axios.post("http://localhost:9000/auth/login", user, {headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }})
        return response.data.token;
    } catch (error) {
        Swal.fire({
            title: "Credenciales incorrectas",
            icon: "error",
            draggable: true
        });
        console.error("Error en el loginController: ", error)
    }
}

export const registerController = async (user: IRegister): Promise<string | undefined> => {
    const token = localStorage.getItem("authentication")
    try {
        const response = await axios.post("http://localhost:9000/auth/register", user, {headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }})
        return response.data.token;
    } catch (error) {

        console.error("Error en el loginController: ", error)
    }
}