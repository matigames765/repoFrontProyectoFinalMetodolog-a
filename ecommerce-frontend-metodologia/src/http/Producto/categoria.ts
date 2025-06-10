import axios from "axios";
import { ICategoria } from "../../types/Producto/ICategoria";

//obtener categorias
export const getAllCategorias = async(): Promise<ICategoria[] | undefined> => {
    //const token = localStorage.getItem("authentication")
    try{
        const response = await axios.get<ICategoria[]>('http://localhost:9000/categorias', {
            headers: {
                "Content-Type": "application/json",
                //"Authorization": `Bearer ${token}`
            }
        })
        return response.data
    }catch(error){
        console.log("Error en getAllCategorias http: " + error)
    }
}

export const getCategoriaById = async(idCategoria: number): Promise<ICategoria | undefined> => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNYXRpYXMgZ2FtZXMiLCJpYXQiOjE3NDg4NzYyNDgsImV4cCI6MTc0ODg3NzY4OH0.fv466ZKbAZ4cY6_uZYWpJaNs28bQhJQDdXQNqV3Zhj'
    try{
        const response = await axios.get<ICategoria>(`http://localhost:9000/categorias/${idCategoria}`, {
            headers: {
    "Content-Type": "application/json"
  }
        })
        return response.data
    } catch (error) {
        console.log("Error en getAllCategorias http: " + error)
    }
}