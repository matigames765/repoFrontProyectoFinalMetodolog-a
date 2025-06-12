import { create } from "zustand"
import { persist } from "zustand/middleware"
import { IUsuario } from "../../types/Usuario/IUsuario"

interface IUsuarioStore {
    usuarioActivo: IUsuario | null
    usuarios: IUsuario[]
    setUsuarioActivo: (usuario: IUsuario | null) => void
    setArrayUsuarios: (usuarios: IUsuario[]) => void
}

export const usuarioStore = create<IUsuarioStore>()(
    persist(
        (set) => ({
            usuarioActivo: null,
            usuarios: [],

            setUsuarioActivo: (usuario) => set(() => ({ usuarioActivo: usuario })),
            setArrayUsuarios: (arrayUsuarios) => set(() => ({ usuarios: arrayUsuarios }))
        }),
        {
            name: "usuario-storage", // clave en localStorage
        }
    )
)