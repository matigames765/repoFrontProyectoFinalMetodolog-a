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
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNYXRpYXMgZ2FtZXMiLCJpYXQiOjE3NDg2NTIwMzAsImV4cCI6MTc0ODY1MzQ3MH0.aPBAcapFTX7xIDiK4cRviZI0_e6JhKL0baEOWCmgivo"
    try{
        const response = await axios.post<IPrecio>('http://localhost:9000/precio', precio, {headers: {
    "Content-Type": "application/json"
  }})

        return response.data
    }catch(error){
        console.log('Error en crearPrecio http: ' + error)
    }
}