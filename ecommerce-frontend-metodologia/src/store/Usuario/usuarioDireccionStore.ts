import { create } from "zustand";
import { IUsuarioDireccion } from "../../types/Usuario/IUsuarioDireccion";

interface IUsuarioDireccionStore {
    usuariosDireccion: IUsuarioDireccion[],

    setArrayUsuariosDireccion: (usuarios: IUsuarioDireccion[]) => void
}

export const usuarioDireccionStore = create<IUsuarioDireccionStore>((set) => ({
    usuariosDireccion: [],

    // setear array de usuarios con direccion
    setArrayUsuariosDireccion: (usuariosDireccionIn) => set(() => ({ usuariosDireccion: usuariosDireccionIn }))
}));
