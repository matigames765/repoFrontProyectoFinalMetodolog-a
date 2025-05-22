import { useShallow } from "zustand/shallow"
import { descuentoStore } from "../../store/Producto/descuentoStore"
import { getAllDescuentos } from "../../http/Producto/descuento"

export const useDescuentos = () => {

    //traemos las variables y las actions de la store de descuento
    const {descuentos, setArrayDescuentos} = descuentoStore(useShallow((state) => ({
        descuentos: state.descuentos,
        setArrayDescuentos: state.setArrayDescuentos
    })))

    //traemos los descuentos en el hook
    const getDescuentosHook = async() => {
        try{
            const descuentos = await getAllDescuentos()
            if(descuentos) setArrayDescuentos(descuentos)
            return descuentos
        }catch(error){
            console.log("Error en getDescuentosHook: " + error)
        }
    }

    return({
        getDescuentosHook,
        descuentos
    })
}