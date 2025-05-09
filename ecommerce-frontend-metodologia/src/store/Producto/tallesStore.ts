import { create } from "zustand"
import { ITalles } from "../../types/Producto/ITalles"

interface ITallesStore{
    talles: ITalles[],
    talleActivo: string | null,
    setArrayTalles: (talles: ITalles[]) => void,
    setTalleActivo: (talleActivo: string | null) => void
}

export const tallesStore = create<ITallesStore>((set) => ({
    talles: [],
    talleActivo: null,

    //setear el talle activo cuando se selecciona un talle en el catalogo
    setTalleActivo: (talleActivoIn) => set(() => ({talleActivo: talleActivoIn})),

    //setear array de talles
    setArrayTalles: (tallesIn) => set(() => ({talles: tallesIn}))
}))