import axios from "axios"
import { IOrdenCompraDetalle } from "../../types/Usuario/IOrdenCompraDetalle"

export const getAllOrdenesCompraDetalles = async(): Promise<IOrdenCompraDetalle[] | undefined> => {
    try{
        const response = await axios.get<IOrdenCompraDetalle[]>('http://localhost:9000/ordenCommpraDetalle')
        return response.data
    }catch(error){
        console.log("Error al traer los detalles de ordenes de compra en getAllOrdenesCompraDetalle http: " + error)
    }
}
