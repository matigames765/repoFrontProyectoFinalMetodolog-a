import axios from "axios"
import { IOrdenCompra } from "../../types/Usuario/IOrdenCompra"

export const getAllOrdenesCompra = async(): Promise<IOrdenCompra[] | undefined> => {
    try{
        const response = await axios.get<IOrdenCompra[]>('http://localhost:9000/ordenCompra')
        return response.data
    }catch(error){
        console.log("Error al traer las ordenes de compra en getAllOrdenesCompra http: " + error)
    }
}
