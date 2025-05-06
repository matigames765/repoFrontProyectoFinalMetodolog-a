import axios from "axios";
import { ICategoria } from "../types/Producto/ICategoria";

//obtener categorias
export const getAllCategorias = async(): Promise<ICategoria[] | undefined> => {
    try{
        const response = await axios.get<ICategoria[]>('http://localhost:9000/categorias')
        return response.data
    }catch(error){
        console.log("Error en getAllCategorias http: " + error)
    }
}