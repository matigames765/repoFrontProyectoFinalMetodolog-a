import { create } from "zustand"
import { TipoProducto } from "../../types/Producto/TipoProducto"

interface IFilterStore{
    categoriaActiva: string | '',
    seccionActiva: string | '',
    talleActivo: string | '',
    ordenPrecioActivo: string | '',
    tipoProductoSeleccionadoActivo: TipoProducto | string,
    precioMaxActivo: string | '',
    precioMinActivo: string | '',
    setCategoriaActiva: (categoria: string | '') => void,
    setSeccionActiva: (seccion: string | '') => void,
    setTalleActivo: (talle: string | '') => void,
    setOrdenPrecioActivo : (ordenPrecio: string | '') => void,
    setTipoProductoSeleccionadoActivo: (tipoProducto: TipoProducto | string) => void,
    setPrecioMaxActivo: (precioMax: string | '') => void,
    setPrecioMinActivo: (precioMin: string | '') => void,
    resetFiltros: () => void
}

export const filterStore = create<IFilterStore>((set) => ({
    categoriaActiva: '',
    seccionActiva: '',
    talleActivo: '',
    ordenPrecioActivo: '',
    tipoProductoSeleccionadoActivo: '',
    precioMaxActivo: '',
    precioMinActivo: '',

    //setear categoria activa
    setCategoriaActiva: (categoriaActivaIn) => set(() => ({categoriaActiva: categoriaActivaIn})),

    //setear seccion activa
    setSeccionActiva: (seccionActivaIn) => set(() => ({seccionActiva: seccionActivaIn.toUpperCase()})),

    //setear talle activo
    setTalleActivo: (talleActivoIn) => set(() => ({talleActivo: talleActivoIn})),

    //setear orden precio activo
    setOrdenPrecioActivo : (ordenPrecioActivoIn) => set(() => ({ordenPrecioActivo: ordenPrecioActivoIn})),

    //setear tipo producto activo
    setTipoProductoSeleccionadoActivo: (tipoProductoActivoIn) => set(() => ({tipoProductoSeleccionadoActivo: tipoProductoActivoIn})),

    //setear precio Maximo activo
    setPrecioMaxActivo: (precioMaximoActivoIn) => set(() => ({precioMaxActivo: precioMaximoActivoIn})),

    //setear precio activo minimo
    setPrecioMinActivo: (precioMinActivoIn) => set(() => ({precioMinActivo: precioMinActivoIn})),

    //resetear todos los filtros
    resetFiltros: () => set(() => ({
        categoriaActiva: '',
        talleActivo: '',
        ordenPrecioActivo: '',
        tipoProductoSeleccionadoActivo: '',
        precioMaxActivo: '',
        precioMinActivo: '',
    }))
}))