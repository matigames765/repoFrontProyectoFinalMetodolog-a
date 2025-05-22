export interface ICategoria{
    id: number,
    nombre: string,
    categoriaPadre: null | ICategoria
}