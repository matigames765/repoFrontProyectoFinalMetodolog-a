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

export const crearImagenProducto = async(imagenProducto: IImagenProducto) => {
  const token = localStorage.getItem("authentication");
    try{
        const response = await axios.post<IImagenProducto>('http://localhost:9000/imagenProducto', imagenProducto,{headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }})

        return response.data
    }catch(error){
        console.log('Error en crearImagenProducto http: ' + error)
    }
}

