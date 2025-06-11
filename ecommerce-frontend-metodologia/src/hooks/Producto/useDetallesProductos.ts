import { detalleProductoStore } from "../../store/Producto/detalleProductoStore"
import { addTalleOnDetalleProducto, crearDetalleProducto, eliminadoLogicoDetalleProducto, getAllDetallesProductos } from "../../http/Producto/detalleProducto"
import { useShallow } from "zustand/shallow"
import { IDetalleProductos } from "../../types/Producto/IDetalleProducto";
import { ITalles } from "../../types/Producto/ITalles";

export const useDetallesProductos = () => {

    //traemos las variables y las actions de la store de detalle producto
    const detallesProductos = detalleProductoStore((state) => state.detallesProductos);
    const setArrayDetallesProductos = detalleProductoStore((state) => state.setArrayDetallesProductos);
    const crearDetalleProductoStore = detalleProductoStore((state) => state.crearDetalleProductoStore)
    const eliminadoLogicoDetalleProductoStore = detalleProductoStore((state) => state.eliminadoLogicoDetalleProductoStore)
    const addTalleOnDetalleProductoStore = detalleProductoStore((state) => state.addTalleOnDetalleProductoStore)
    const editarDetalleProductoStore = detalleProductoStore((state) => state.editarDetalleProductoStore)
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

    const crearDetalleProductoHook = async(detalleProducto: IDetalleProductos) => {
                try{
                    const detalleProductoBD = await crearDetalleProducto(detalleProducto)
                    crearDetalleProductoStore({...detalleProductoBD, id: detalleProductoBD?.id!})
                    return detalleProductoBD
                }catch(error){
                    console.log("Hubo un error al crear el detalle producto en el hook: " + error)
                }
            }


    const eliminadoLogicoDetalleProductoHook = async(idDetalle: number) => {
        try{
            const detalleProductoBD = await eliminadoLogicoDetalleProducto(idDetalle)
            eliminadoLogicoDetalleProductoStore(detalleProductoBD?.id!)
        }catch(error){
            console.log("Hubo un error en el eliminado logico en el hook: " + error)
        }
    }

    const addTalleOnDetalleProductoHook = async(idDetalle: number, talle: ITalles) => {
        try{
            console.log("Talle: ", talle)
            const detalleProductoBD = await addTalleOnDetalleProducto(idDetalle, talle)
            editarDetalleProductoStore(detalleProductoBD!)
        }catch(error){
            console.log("Error al añadir talle en el detalle producto hook, " + error)
        }
    }

    return({
        getDetallesProductosHook,
        detallesProductos,
        crearDetalleProductoHook,
        eliminadoLogicoDetalleProductoHook,
        addTalleOnDetalleProductoHook
    })
}