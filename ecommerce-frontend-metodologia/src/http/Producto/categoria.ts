import axios from "axios";
import { ICategoria } from "../../types/Producto/ICategoria";

//obtener categorias
export const getAllCategorias = async(): Promise<ICategoria[] | undefined> => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNYXRpYXMgZ2FtZXMiLCJpYXQiOjE3NDg4NzQ1OTYsImV4cCI6MTc0ODg3NjAzNn0.9th5WLGqKadGNOQNJJctdlcODiMZPDoOPNt5xrmhbcQ'
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