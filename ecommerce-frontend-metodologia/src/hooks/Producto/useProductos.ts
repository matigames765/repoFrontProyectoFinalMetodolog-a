import { useShallow } from "zustand/shallow"
import { productoStore } from "../../store/Producto/productoStore"
import { activarProducto, addDetalleProductoOnProducto, crearProducto, deleteProducto, getAllProductos, inactivarProducto } from "../../http/Producto/producto"
import { IProducto } from "../../types/Producto/IProducto"
import { toast } from "react-toastify"
import { IDetalleProductos } from "../../types/Producto/IDetalleProducto"

export const useProductos = () => {

    //traemos las variables y las actions de la store de producto
    const {productos, setArrayProductos, crearProductoStore, editarProductoStore, inactivarProductoStore, activarProductoStore} = productoStore(useShallow((state) => ({
        productos: state.productos,
        setArrayProductos: state.setArrayProductos,
        crearProductoStore: state.crearProductoStore,
        eliminarProductoStore: state.eliminarProductoStore,
        addDetalleProductoOnProductoStore: state.addDetalleProductoOnProductoStore,
        editarProductoStore: state.editarProductoStore,
        inactivarProductoStore: state.inactivarProductoStore,
        activarProductoStore: state.activarProductoStore
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

    const addDetalleProductoOnProductoHook = async(detalleProducto: IDetalleProductos, idProducto: number) => {
        try{
            const productoBD = await addDetalleProductoOnProducto(detalleProducto, idProducto)
            editarProductoStore(productoBD!)
            
        }catch(error){
            console.log("Hubo un error al añadir el detalle del producto en el producto hook: " + error)
        }
    }

    const inactivarProductoHook = async(idProducto: number) => {
        try{
            const productoBD = await inactivarProducto(idProducto)
            inactivarProductoStore(productoBD?.id!)
        }catch(error){
            console.log("Hubo un error en inactivar producto en el hook: " + error)
        }
    }

    const activarProductoHook = async(idProducto: number) => {
        try{
            const productoBD = await activarProducto(idProducto)
            activarProductoStore(productoBD?.id!)
        }catch(error){
            console.log("Hubo un error en activar producto en el hook: " + error)
        }
    }



    return({
        getProductosHook,
        productos,
        crearProductoHook,
        addDetalleProductoOnProductoHook,
        inactivarProductoHook,
        activarProductoHook
    })
}