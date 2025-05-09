import { create } from "zustand"
import { ITalles } from "../../types/Producto/ITalles"

interface ITallesStore{
    talles: ITalles[],

    setArrayTalles: (talles: ITalles[]) => void
}

export const tallesStore = create<ITallesStore>((set) => ({
    talles: [],

    //setear array de talles
    setArrayTalles: (tallesIn) => set(() => ({talles: tallesIn}))
}))