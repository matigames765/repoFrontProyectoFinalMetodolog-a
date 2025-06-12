import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IUsuario } from "../../types/Usuario/IUsuario";
import axios from "axios";
import { toast } from "react-toastify";

interface IUsuarioStore {
  usuarioActivo: IUsuario | null;
  usuarios: IUsuario[];
  setUsuarioActivo: (usuario: IUsuario | null) => void;
  setArrayUsuarios: (usuarios: IUsuario[]) => void;
  actualizarUsuario: (usuario: IUsuario) => Promise<void>;
}

export const usuarioStore = create<IUsuarioStore>()(
  persist(
    (set) => ({
      usuarioActivo: null,
      usuarios: [],

      setUsuarioActivo: (usuario) => set(() => ({ usuarioActivo: usuario })),
      setArrayUsuarios: (arrayUsuarios) =>
        set(() => ({ usuarios: arrayUsuarios })),

      actualizarUsuario: async (usuario) => {
        try {
          const token = localStorage.getItem("authentication");
          console.log("Token que se envía:", token);

          const response = await axios.put(
            `http://localhost:9000/usuario/${usuario.id}`,
            usuario,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Bearer ${token}` : "",
              },
            }
          );

          set(() => ({
            usuarioActivo: response.data,
          }));

          toast.success("Usuario actualizado correctamente");
        } catch (error) {
          console.error("Error al actualizar el usuario: ", error);
          toast.error("Error al actualizar el usuario, intente nuevamente");
        }
      },
    }),
    {
      name: "usuario-storage", // clave en localStorage
    }
  )
);
