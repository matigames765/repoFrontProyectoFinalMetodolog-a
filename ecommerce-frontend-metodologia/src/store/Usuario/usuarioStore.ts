import { create } from "zustand"
import { IUsuario } from "../../types/Usuario/IUsuario"

interface IUsuarioStore{
    usuarios: IUsuario[],

    setArrayUsuarios: (usuarios: IUsuario[]) => void
}

export const usuarioStore = create<IUsuarioStore>((set) => ({
    usuarios: [],

    //setear array de usuarios
    setArrayUsuarios: (usuariosIn) => set(() => ({usuarios: usuariosIn}))
}))