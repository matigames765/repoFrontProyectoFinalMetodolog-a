import { useShallow } from "zustand/shallow"
import { productoStore } from "../../store/Producto/productoStore"
import { getAllProductos } from "../../http/Producto/producto"

export const useProductos = () => {

    //traemos las variables y las actions de la store de producto
    const {productos, setArrayProductos} = productoStore(useShallow((state) => ({
        productos: state.productos,
        setArrayProductos: state.setArrayProductos
    })))

    //traemos los productos en el hook
    const getProductosHook = async() => {
        try{
            const productos = await getAllProductos()
            if(productos) setArrayProductos(productos)
            return productos
        }catch(error){
            console.log("Error en getProductosHook: " + error)
        }
    }

    return({
        getProductosHook,
        productos
    })
}