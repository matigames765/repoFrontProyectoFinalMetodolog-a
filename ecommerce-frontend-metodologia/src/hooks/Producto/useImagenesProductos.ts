import { useShallow } from "zustand/shallow"
import { imagenProductoStore } from "../../store/Producto/imagenProductoStore"
import { getAllImagenesProductos } from "../../http/Producto/imagenProducto"

export const useImagenesProductos = () => {

    //traemos las variables y las actions de la store de imagen producto
    const {imagenesProductos, setArrayImagenesProductos} = imagenProductoStore(useShallow((state) => ({
        imagenesProductos: state.imagenesProductos,
        setArrayImagenesProductos: state.setArrayImagenesProductos
    })))

    //traemos las imagenes productos en el hook
    const getImagenesProductosHook = async() => {
        try{
            const imagenesProductos = await getAllImagenesProductos()
            if(imagenesProductos) setArrayImagenesProductos(imagenesProductos)
            return imagenesProductos
        }catch(error){
            console.log("Error en getImagenesProductosHook: " + error)
        }
    }

    return({
        getImagenesProductosHook,
        imagenesProductos
    })
}