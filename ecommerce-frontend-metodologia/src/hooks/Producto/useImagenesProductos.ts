import { useShallow } from "zustand/shallow"
import { imagenProductoStore } from "../../store/Producto/imagenProductoStore"
import { crearImagenProducto, getAllImagenesProductos } from "../../http/Producto/imagenProducto"
import { IImagenProducto } from "../../types/Producto/IImagenProducto"

export const useImagenesProductos = () => {

    //traemos las variables y las actions de la store de imagen producto
    const {imagenesProductos, setArrayImagenesProductos, crearImagenProductoStore} = imagenProductoStore(useShallow((state) => ({
        imagenesProductos: state.imagenesProductos,
        setArrayImagenesProductos: state.setArrayImagenesProductos,
        crearImagenProductoStore: state.crearImagenProductoStore
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

    const crearImagenProductoHook = async(imagenProducto: IImagenProducto) => {
                try{
                    const imagenProductoBD = await crearImagenProducto(imagenProducto)
                    crearImagenProductoStore({...imagenProductoBD, id: imagenProductoBD?.id!})

                    return imagenProductoBD
                }catch(error){
                    console.log("Hubo un error al crear la imagen del producto en el hook: " + error)
                }
            }

    return({
        getImagenesProductosHook,
        imagenesProductos,
        crearImagenProductoHook
    })
}