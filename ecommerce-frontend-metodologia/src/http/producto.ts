import axios from "axios";
import { IProducto } from "../types/Producto/IProducto";


//obtener productos
export const getAllProductos = async(): Promise<IProducto[] | undefined> => {
    try{
        const response = await axios.get<IProducto[]>('http://localhost:9000/producto')
        return response.data
    }catch(error){
        console.log("Error al traer los productos en getAllProductos http: " + error)
    }
}

