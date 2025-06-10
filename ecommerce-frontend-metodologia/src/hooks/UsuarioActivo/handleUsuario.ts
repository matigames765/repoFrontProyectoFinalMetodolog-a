import { IUsuario } from "../../types/Usuario/IUsuario"

export const handleUsuario = (
  nombre: string,
  usuarios: IUsuario[],
  setUsuarioActivo: (usuario: IUsuario | null) => void
) => {
  console.log("Aca estoyyy: ", usuarios)

  if (usuarios) {
    const user = usuarios.find((usuario) => usuario.nombre === nombre)
    if (user) {
      setUsuarioActivo(user)
    }
  } else {
    console.log("No hay usuarios!!")
  }
}
