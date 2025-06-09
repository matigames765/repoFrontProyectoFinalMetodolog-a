import axios from "axios";
import { IDetalleProductos } from "../types/Producto/IDetalleProducto";


export const mercadoPago = async(detallesIds: number[], cantidades: number[]) => {
    console.log("Detalles ids: " + detallesIds)
    console.log("Cantidades: " + cantidades)
    try{
        const response = await axios.post('http://localhost:9000/pay/mp', {
            detallesIds: detallesIds,
            cantidades: cantidades
        })

        console.log("Respuesta completa de Mercado Pago:", response.data);

        const {preferenceId} = response.data

        return preferenceId    
    }catch(error){
        console.log("Error en mercado pago http:", error)
    }
}