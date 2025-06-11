import axios from "axios"
import { IOrdenCompra } from "../../types/Usuario/IOrdenCompra"

export const getAllOrdenesCompra = async(): Promise<IOrdenCompra[] | undefined> => {
    const token = localStorage.getItem("authentication")
    try{
        const response = await axios.get<IOrdenCompra[]>('http://localhost:9000/ordenCompra',
            {headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }}
        )
        return response.data
    }catch(error){
        console.log("Error al traer las ordenes de compra en getAllOrdenesCompra http: " + error)
    }
}
