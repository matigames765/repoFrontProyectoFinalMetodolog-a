import { useShallow } from "zustand/shallow"
import { tallesStore } from "../store/tallesStore"
import { getAllTalles } from "../http/talles"

export const useTalles = () => {

    //traemos las variables y las actions de la store de talle
    const {talles, setArrayTalles} = tallesStore(useShallow((state) => ({
        talles: state.talles,
        setArrayTalles: state.setArrayTalles
    })))

    //traemos los talles en el hook
    const getTallesHook = async() => {
        try{
            const talles = await getAllTalles()
            if(talles) setArrayTalles(talles)
            return talles
        }catch(error){
            console.log("Error en getTallesHook: " + error)
        }
    }

    return({
        getTallesHook
    })
}