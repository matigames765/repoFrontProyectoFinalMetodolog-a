import axios from "axios"
import { ITalles } from "../../types/Producto/ITalles"


//obtener talles
export const getAllTalles = async (): Promise<ITalles[] | undefined> => {
    const token = localStorage.getItem("authentication");
    try {
        const response = await axios.get<ITalles[]>('http://localhost:9000/talles',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        )
        return response.data
    } catch (error) {
        console.log("Error al traer los talles en getAllTalles http: " + error)
    }
}

export const getTalleById = async(idTalle: number): Promise<ITalles | undefined>=> {
    try{
        const response = await axios.get<ITalles>(`http://localhost:9000/talles/${idTalle}`)

        return response.data
    }catch(error){
        console.log("Hubo un error al traer el talle por id http: ", error)
    }
}
