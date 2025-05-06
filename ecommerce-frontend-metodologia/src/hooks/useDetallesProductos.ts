import { useShallow } from "zustand/shallow"
import { detalleProductoStore } from "../store/detalleProductoStore"
import { getAllDetallesProductos } from "../http/detalleProducto"

export const useDetallesProductos = () => {

    //traemos las variables y las actions de la store de detalle producto
    const {detallesProductos, setArrayDetallesProductos} = detalleProductoStore(useShallow((state) => ({
        detallesProductos: state.detallesProductos,
        setArrayDetallesProductos: state.setArrayDetallesProductos
    })))

    //traemos los detalles productos en el hook
    const getDetallesProductosHook = async() => {
        try{
            const detallesProductos = await getAllDetallesProductos()
            if(detallesProductos) setArrayDetallesProductos(detallesProductos)
            return detallesProductos
        }catch(error){
            console.log("Error en getDetallesProductosHook: " + error)
        }
    }

    return({
        getDetallesProductosHook
    })
}