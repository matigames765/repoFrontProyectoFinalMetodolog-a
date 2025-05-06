import axios from "axios"
import { IDetalleProductos } from "../types/Producto/IDetalleProducto"

//obtener detalles productos
export const getAllDetallesProductos = async(): Promise<IDetalleProductos[] | undefined> => {
    try{
        const response = await axios.get<IDetalleProductos[]>('http://localhost:9000/detalleProducto')
        return response.data
    }catch(error){
        console.log("Error en getAllDetallesProductos http: " + error)
    }
}