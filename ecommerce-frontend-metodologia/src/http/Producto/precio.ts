import axios from "axios"
import { IPrecio } from "../../types/Producto/IPrecio"

//obtener precios
export const getAllPrecios = async(): Promise<IPrecio[] | undefined> => {
    try{
        const response = await axios.get<IPrecio[]>('http://localhost:9000/precio')
        return response.data
    }catch(error){
        console.log("Error en getAllPrecios http: " + error)
    }
}

export const crearPrecio = async(precio: IPrecio) => {
    const token = localStorage.getItem("authentication");
    try{
        const response = await axios.post<IPrecio>('http://localhost:9000/precio', precio, 
            {headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }})

        return response.data
    }catch(error){
        console.log('Error en crearPrecio http: ' + error)
    }
}