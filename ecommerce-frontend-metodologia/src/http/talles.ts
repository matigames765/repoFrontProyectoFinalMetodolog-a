import axios from "axios"
import { ITalles } from "../types/Producto/ITalles"


//obtener talles
export const getAllTalles = async(): Promise<ITalles[] | undefined> => {
    try{
        const response = await axios.get<ITalles[]>('http://localhost:9000/talles')
        return response.data
    }catch(error){
        console.log("Error al traer los productos en getAllTalles http: " + error)
    }
}
