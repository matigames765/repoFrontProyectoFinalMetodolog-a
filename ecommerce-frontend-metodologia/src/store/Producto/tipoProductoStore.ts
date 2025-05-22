import { create } from "zustand"
import { TipoProducto } from "../../types/Producto/TipoProducto"

interface ITipoProductoStore{
    tipoProductoSeleccionado: TipoProducto | null,
    
    setTipoProductoSeleccionado: (tipoProductoSeleccionado: TipoProducto | null) => void
}

export const tipoProductoStore = create<ITipoProductoStore>((set) => ({
    tipoProductoSeleccionado: null,

    //setear el producto seleccionado
    setTipoProductoSeleccionado: (tipoProductoSeleccionadoIn) => set(() => ({tipoProductoSeleccionado: tipoProductoSeleccionadoIn}))
}))