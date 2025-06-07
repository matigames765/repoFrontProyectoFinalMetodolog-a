import axios from "axios"
import { ITalles } from "../../types/Producto/ITalles"


//obtener talles
export const getAllTalles = async(): Promise<ITalles[] | undefined> => {
    try{
        const response = await axios.get<ITalles[]>('http://localhost:9000/talles')
        console.log("Talles en http: ", response.data)
        return response.data
    }catch(error){
        console.log("Error al traer los talles en getAllTalles http: " + error)
    }
}

export const getTalleById = async(idTalle: number)=> {
    try{
        const response = await axios.get<ITalles>(`http://localhost:9000/talles/${idTalle}`)

        return response.data
    }catch(error){
        console.log("Hubo un error al traer el talle por id http: ", error)
    }
}
