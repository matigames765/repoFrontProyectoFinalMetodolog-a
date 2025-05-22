import axios from "axios"
import { IDetalleProductos } from "../../types/Producto/IDetalleProducto"
import { filterStore } from "../../store/Producto/filterStore"
import { useShallow } from "zustand/shallow"





//obtener detalles productos
export const getAllDetallesProductos = async(): Promise<IDetalleProductos[] | undefined> => {
    
    const { talleActivo, categoriaActiva, seccionActiva, ordenPrecioActivo, tipoProductoSeleccionadoActivo } = filterStore.getState()

    if(talleActivo === "" && tipoProductoSeleccionadoActivo === "" && ordenPrecioActivo === "" && seccionActiva === "" && ordenPrecioActivo === ""){
        console.log(`http://localhost:9000/detalleProducto?seccion=${seccionActiva}&categoria=${categoriaActiva}&talle=${talleActivo}&tipo=${tipoProductoSeleccionadoActivo}&orden=${ordenPrecioActivo}`)
        try{
            const response = await axios.get<IDetalleProductos[]>('http://localhost:9000/detalleProducto')

            return response.data
        }catch(error){
            console.log("Error en obtener todos los productos en getAllDetallesProductos http: " + error)
        }
    }else{
        try{
            console.log(`http://localhost:9000/detalleProducto?seccion=${seccionActiva}&categoria=${categoriaActiva}&talle=${talleActivo}&tipo=${tipoProductoSeleccionadoActivo}&orden=${ordenPrecioActivo}`)
            //response para el filtrado
            const response = await axios.get<IDetalleProductos[]>(`http://localhost:9000/detalleProducto?seccion=${seccionActiva}&categoria=${categoriaActiva}&talle=${talleActivo}&tipo=${tipoProductoSeleccionadoActivo}&orden=${ordenPrecioActivo}`)
            return response.data
        }catch(error){
            console.log("Error en getAllDetallesProductos http: " + error)
        }
    }
}



export const crearDetalleProducto = async(detalleProducto: IDetalleProductos) => {
    try{
        const response = await axios.post<IDetalleProductos>('http://localhost:9000/detalleProducto', {detalleProducto})

        return response.data
    }catch(error){
        console.log('Error en crearDetalleProducto http: ' + error)
    }
}

export const editarDetalleProducto = async(detalleProductoActualizado: IDetalleProductos) => {
    try{
        const response = await axios.put<IDetalleProductos>('http://localhost:9000/detalleProducto', {detalleProductoActualizado})

        return response.data
    }catch(error){
        console.log('Error en editarDetalleProducto http: ' + error)
    }
}

export const deleteDetalleProducto = async(id: number) => {
    try{
        await axios.delete(`http://localhost:9000/detalleProducto/:${id}`)
    }catch(error){
        console.log('Error en eliminar deleteDetalleProducto http: ' + error)
    }
}
