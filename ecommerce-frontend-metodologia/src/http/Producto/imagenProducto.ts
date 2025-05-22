import axios from "axios"
import { IImagenProducto } from "../../types/Producto/IImagenProducto"

//obtener imagenes productos
export const getAllImagenesProductos = async(): Promise<IImagenProducto[] | undefined> => {
    try{
        const response = await axios.get<IImagenProducto[]>('http://localhost:9000/imagenProducto')
        return response.data
    }catch(error){
        console.log("Error en getAllImagenesProductos http: " + error)
    }
}

