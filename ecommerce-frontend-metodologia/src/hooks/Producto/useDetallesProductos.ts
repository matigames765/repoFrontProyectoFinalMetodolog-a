
import { detalleProductoStore } from "../../store/Producto/detalleProductoStore"
import { getAllDetallesProductos } from "../../http/Producto/detalleProducto"

export const useDetallesProductos = () => {

    //traemos las variables y las actions de la store de detalle producto
    const detallesProductos = detalleProductoStore((state) => state.detallesProductos);
    const setArrayDetallesProductos = detalleProductoStore((state) => state.setArrayDetallesProductos);
    //traemos los detalles productos en el hook
    const getDetallesProductosHook = async() => {
        try{
            const detallesProductos = await getAllDetallesProductos()
            console.log('detalles productos: ' + detallesProductos)
            if(detallesProductos) setArrayDetallesProductos(detallesProductos)
            return detallesProductos
        }catch(error){
            console.log("Error en getDetallesProductosHook: " + error)
        }
    }

    return({
        getDetallesProductosHook,
        detallesProductos
    })
}