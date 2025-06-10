import { useShallow } from "zustand/shallow"
import { productoStore } from "../../store/Producto/productoStore"
import { crearProducto, deleteProducto, getAllProductos } from "../../http/Producto/producto"
import { IProducto } from "../../types/Producto/IProducto"
import { toast } from "react-toastify"

export const useProductos = () => {

    //traemos las variables y las actions de la store de producto
    const {productos, setArrayProductos, crearProductoStore, eliminarProductoStore} = productoStore(useShallow((state) => ({
        productos: state.productos,
        setArrayProductos: state.setArrayProductos,
        crearProductoStore: state.crearProductoStore,
        eliminarProductoStore: state.eliminarProductoStore
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

    const crearProductoHook = async(producto: IProducto) => {
        try{
            console.log("Producto antes de BD: ", producto)
            const productoBD = await crearProducto(producto)
            crearProductoStore({...producto, id: productoBD?.id})
            console.log("Producto guardado!", productoBD);
            toast.success("Producto guardado!");
        }catch(error){
            console.log("Hubo un error al crear el producto en el hook: " + error)
        }
    }



    return({
        getProductosHook,
        productos,
        crearProductoHook
    })
}