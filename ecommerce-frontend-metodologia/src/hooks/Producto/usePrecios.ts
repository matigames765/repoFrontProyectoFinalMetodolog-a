import { useShallow } from "zustand/shallow"
import { precioStore } from "../../store/Producto/precioStore"
import { crearPrecio, getAllPrecios } from "../../http/Producto/precio"
import { IPrecio } from "../../types/Producto/IPrecio"

export const usePrecios= () => {

    //traemos las variables y las actions de la store de precio
    const {precios, setArrayPrecios, crearPrecioStore} = precioStore(useShallow((state) => ({
        precios: state.precios,
        setArrayPrecios: state.setArrayPrecios,
        crearPrecioStore: state.crearPrecioStore
    })))

    //traemos los descuentos en el hook
    const getPreciosHook = async() => {
        try{
            const precios = await getAllPrecios()
            if(precios) setArrayPrecios(precios)
            return precios
        }catch(error){
            console.log("Error en getPreciosHook: " + error)
        }
    }

    const crearPrecioHook = async(precio: IPrecio) => {
            try{
                const precioBD = await crearPrecio(precio)
                crearPrecioStore({...precioBD, id: precioBD?.id!})

                return precioBD
            }catch(error){
                console.log("Hubo un error al crear el precio en el hook: " + error)
            }
        }

    return({
        getPreciosHook,
        precios,
        crearPrecioHook
    })
}