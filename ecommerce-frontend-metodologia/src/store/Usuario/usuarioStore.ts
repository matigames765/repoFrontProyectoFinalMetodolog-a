import { create } from "zustand"
import { IUsuario } from "../../types/Usuario/IUsuario"

interface IUsuarioStore {
    usuarioActivo: IUsuario | null
    usuarios: IUsuario[]
    setUsuarioActivo: (usuario: IUsuario | null) => void
    setArrayUsuarios: (usuarios: IUsuario[]) => void
}

export const usuarioStore = create<IUsuarioStore>((set) => ({
    usuarioActivo: null,
    usuarios: [],

    // Setear un usuario activo
    setUsuarioActivo: (usuario) => set(() => ({ usuarioActivo: usuario })),
    //setear array de usuarios
    setArrayUsuarios: (arrayUsuarios) => set(() => ({
        usuarios: arrayUsuarios
    }))
}))