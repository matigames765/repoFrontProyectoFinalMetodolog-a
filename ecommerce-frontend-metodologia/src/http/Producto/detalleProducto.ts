import axios from "axios"
import { IDetalleProductos } from "../../types/Producto/IDetalleProducto"
import { filterStore } from "../../store/Producto/filterStore"
import { useShallow } from "zustand/shallow"
import { ITalles } from "../../types/Producto/ITalles"





//obtener detalles productos
export const getAllDetallesProductos = async(): Promise<IDetalleProductos[] | undefined> => {
    
    const { talleActivo, categoriaActiva, seccionActiva, ordenPrecioActivo, tipoProductoSeleccionadoActivo, buscadorActivo } = filterStore.getState()

    if(talleActivo === "" && tipoProductoSeleccionadoActivo === "" && ordenPrecioActivo === "" && seccionActiva === "" && ordenPrecioActivo === "" && buscadorActivo === ""){
        console.log(`http://localhost:9000/detalleProducto/filter?seccion=${seccionActiva}&categoria=${categoriaActiva}&talle=${talleActivo}&tipo=${tipoProductoSeleccionadoActivo}&orden=${ordenPrecioActivo}`)
        try{
            const response = await axios.get<IDetalleProductos[]>('http://localhost:9000/detalleProducto')

            return response.data
        }catch(error){
            console.log("Error en obtener todos los productos en getAllDetallesProductos http: " + error)
        }
    }else{
        try{
             console.log(`http://localhost:9000/detalleProducto/filter?seccion=${seccionActiva}&categoria=${categoriaActiva}&talle=${talleActivo}&tipo=${tipoProductoSeleccionadoActivo}&orden=${ordenPrecioActivo}&buscador=${buscadorActivo}`)
            const response = await axios.get<IDetalleProductos[]>(`http://localhost:9000/detalleProducto/filter?seccion=${seccionActiva}&categoria=${categoriaActiva}&talle=${talleActivo}&tipo=${tipoProductoSeleccionadoActivo}&orden=${ordenPrecioActivo}&buscador=${buscadorActivo}`)
            console.log(response.data)
            
            return response.data
        }catch(error){
            console.log("Error en getAllDetallesProductos http: " + error)
        }
    }
}



export const crearDetalleProducto = async(detalleProducto: IDetalleProductos) => {
    try{
        const response = await axios.post<IDetalleProductos>('http://localhost:9000/detalleProducto', detalleProducto)

        return response.data
    }catch(error){
        console.log('Error en crearDetalleProducto http: ' + error)
    }
}

export const eliminadoLogicoDetalleProducto = async(idDetalle: number) => {
    try{
        const response = await axios.patch<IDetalleProductos>(`http://localhost:9000/detalleProducto/${idDetalle}/eliminadoLogico`)

        return response.data
    }catch(error){
        console.log("Error en el eliminado logico detalle producto http: " + error)
    }
}

export const addTalleOnDetalleProducto = async(idDetalle: number, talle: ITalles) => {
    try{
        const response = await axios.put<IDetalleProductos>(`http://localhost:9000/detalleProducto/${idDetalle}/agregarTalle`, talle)

        return response.data
    }catch(error){
        console.log("Error en addTalleOnDetalleProducto http: ", error)
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

