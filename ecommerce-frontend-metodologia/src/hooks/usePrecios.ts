import { useShallow } from "zustand/shallow"
import { precioStore } from "../store/precioStore"
import { getAllPrecios } from "../http/precio"

export const usePrecios= () => {

    //traemos las variables y las actions de la store de precio
    const {precios, setArrayPrecios} = precioStore(useShallow((state) => ({
        precios: state.precios,
        setArrayPrecios: state.setArrayPrecios
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

    return({
        getPreciosHook
    })
}