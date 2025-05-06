import { useShallow } from "zustand/shallow"
import { categoriaStore } from "../store/categoriaStore"
import { getAllCategorias } from "../http/categoria"

export const useCategorias = () => {
    //traer variables y actions de la store de categorias
    const {categorias, setArrayCategorias} = categoriaStore(useShallow((state) => ({
        categorias: state.categorias,
        setArrayCategorias: state.setArrayCategorias
    })))

    //traemos las categorias en el hook y las seteamos en la store
    const getCategoriasHook = async() => {
        try{
            const categorias = await getAllCategorias()
            if (categorias) setArrayCategorias(categorias)

            return categorias
        }catch(error){
            console.log("Error en getCategoriasHook: " + error)
        }
    }

    return ({
        getCategoriasHook
    })

}