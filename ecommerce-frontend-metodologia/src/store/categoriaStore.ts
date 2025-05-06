import { create } from "zustand";
import { ICategoria } from "../types/Producto/ICategoria";

interface ICategoriaStore{
    categorias: ICategoria[],
    setArrayCategorias: (categorias: ICategoria[]) => void
}

export const categoriaStore = create<ICategoriaStore>((set) => ({
    categorias: [],

    //setear arrays de categorias
    setArrayCategorias: (categoriasIn) => set(() => ({categorias: categoriasIn}))
}))