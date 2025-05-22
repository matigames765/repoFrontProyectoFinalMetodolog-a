import axios from "axios"
import { IDireccion } from "../../types/Usuario/IDireccion"

export const getAllDirecciones = async(): Promise<IDireccion[] | undefined> => {
    try{
        const response = await axios.get<IDireccion[]>('http://localhost:9000/direccion')
        return response.data
    }catch(error){
        console.log("Error al traer las direcciones en getAllDirecciones http: " + error)
    }
}
