import { useShallow } from "zustand/shallow"
import { usuarioStore } from "../../store/Usuario/usuarioStore"
import { getAllUsuarios } from "../../http/Usuario/usuario"

export const useUsuarios = () => {

  // Traemos las variables y acciones de la store de usuario
  const { usuarios, setArrayUsuarios } = usuarioStore(useShallow((state) => ({
    usuarios: state.usuarios,
    setArrayUsuarios: state.setArrayUsuarios
  })))

  // Traemos los usuarios en el hook
  const getUsuariosHook = async () => {
    try {
      const users = await getAllUsuarios()
      if (users) setArrayUsuarios(users)
    } catch (error) {
      console.log("Error en getUsuariosHook: " + error)
    }
  }

  return {
    getUsuariosHook,
    usuarios
  }
}
