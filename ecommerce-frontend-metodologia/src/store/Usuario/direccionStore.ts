import { create } from "zustand";
import { IDireccion } from "../../types/Usuario/IDireccion";

interface IDireccionStore {
    direcciones: IDireccion[],

    setArrayDirecciones: (direcciones: IDireccion[]) => void
}

export const direccionStore = create<IDireccionStore>((set) => ({
    direcciones: [],

    // setear array de direcciones
    setArrayDirecciones: (direccionesIn) => set(() => ({ direcciones: direccionesIn }))
}));
