import axios from "axios";
import { ICategoria } from "../../types/Producto/ICategoria";

//obtener categorias
export const getAllCategorias = async(): Promise<ICategoria[] | undefined> => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNYXRpYXMgZ2FtZXMiLCJpYXQiOjE3NDg2NTIwMzAsImV4cCI6MTc0ODY1MzQ3MH0.aPBAcapFTX7xIDiK4cRviZI0_e6JhKL0baEOWCmgivo'
    try{
        const response = await axios.get<ICategoria[]>('http://localhost:9000/categorias', {
            headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
        })
        console
        return response.data
    }catch(error){
        console.log("Error en getAllCategorias http: " + error)
    }
}