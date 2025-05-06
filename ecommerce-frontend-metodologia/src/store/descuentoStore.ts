import { create } from "zustand";
import { IDescuento } from "../types/Producto/IDescuento";

interface IDescuentoStore{
    descuentos: IDescuento[],

    setArrayDescuentos: (descuentos: IDescuento[]) => void
}

export const descuentoStore = create<IDescuentoStore>((set) => ({
    descuentos: [],

    //setear array de descuentos
    setArrayDescuentos: (descuentosIn) => set(() => ({descuentos: descuentosIn}))
}))