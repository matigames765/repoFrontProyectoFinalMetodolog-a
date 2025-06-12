import axios from "axios";
import { IUsuario } from "../../types/Usuario/IUsuario";
import { IRegister } from "../../types/authenticate/IRegister";

export const getAllUsuarios = async (): Promise<IUsuario[] | undefined> => {
    const token = localStorage.getItem("authentication")
    try {
        const response = await axios.get<IUsuario[]>('http://localhost:9000/usuario',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.log("Error al traer los usuarios en getAllUsuarios http: " + error);
    }
};
export const crearUsuarioAdmin = async(usuarioAdmin: IRegister) =>  {
    try{
        const response = await axios.post<IUsuario>('http://localhost:9000/auth/registerAdmin', usuarioAdmin)

        return response.data
    }catch(error){
        console.log("Error al crear el usuario admin http: ", error)
    }
}
