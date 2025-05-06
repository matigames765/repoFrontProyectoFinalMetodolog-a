import axios from "axios"
import { IDescuento } from "../types/Producto/IDescuento"

//obtener descuentos
export const getAllDescuentos = async(): Promise<IDescuento[] | undefined> => {
    try{
        const response = await axios.get<IDescuento[]>('http://localhost:9000/descuento')
        return response.data
    }catch(error){
        console.log("Error en getAllDescuentos http: " + error)
    }
}