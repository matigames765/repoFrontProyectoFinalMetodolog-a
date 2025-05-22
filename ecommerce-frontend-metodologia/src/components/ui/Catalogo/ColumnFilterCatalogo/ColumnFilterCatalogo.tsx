import { useEffect } from 'react'
import { useTalles } from '../../../../hooks/Producto/useTalles'
import styles from './ColumnFilterCatalogo.module.css'
import { TipoProducto } from '../../../../types/Producto/TipoProducto'
import { filterStore } from '../../../../store/Producto/filterStore'

export const ColumnFilterCatalogo = () => {
  const { talles, getTallesHook } = useTalles()

  const setTalleActivo = filterStore(state => state.setTalleActivo)
  const ordenPrecioActivo = filterStore(state => state.ordenPrecioActivo)
  const talleActivo = filterStore(state => state.talleActivo)
  const tipoProductoSeleccionadoActivo = filterStore(state => state.tipoProductoSeleccionadoActivo)
  const setOrdenPrecioActivo = filterStore(state => state.setOrdenPrecioActivo)
  const setTipoProductoSeleccionadoActivo = filterStore(state => state.setTipoProductoSeleccionadoActivo)

  // Solo para ver cuándo cambia en consola:
  useEffect(() => {
  }, [ordenPrecioActivo, talleActivo, tipoProductoSeleccionadoActivo])

  useEffect(() => {
    getTallesHook()
    console.log("talles: " + talles)
  }, [])


  return (
    <div className={styles.principalContainerColumFilter}>
      <div className={styles.containerDesplegables}>
        {/* Talle */}
        <select
          className={styles.desplegableFilter}
          name="talle"
          value={talleActivo ?? ''}
          onChange={e => {
            if(e.target.value === 'deseleccionar'){
              setTalleActivo('')
            }else{
              setTalleActivo(e.target.value)
            }
          }}
        >
          <option value="" disabled hidden>
            Talle
          </option>
          <option value='deseleccionar'>Deseleccionar talle</option>
          {talles.map((talle, idx) => (
            <option key={idx} value={talle.talle}>
              {talle.talle}
            </option>
          ))}
        </select>

        {/* Tipo de producto */}
        <select
          className={styles.desplegableFilter}
          name="tipo producto"
          value={tipoProductoSeleccionadoActivo ?? ''}
          onChange={e => {
            if(e.target.value === 'deseleccionar'){
              setTipoProductoSeleccionadoActivo('')
            }else{
              setTipoProductoSeleccionadoActivo(e.target.value as TipoProducto)
            }
          }}
        >
          <option value="" disabled hidden>
            Tipo producto
          </option>
          <option value='deseleccionar'>Deseleccionar tipo producto</option>
          <option value={TipoProducto.ZAPATILLA}>Zapatilla</option>
          <option value={TipoProducto.ROPA}>Ropa</option>
        </select>

        {/* Ordenar por precio */}
        <select
          className={styles.desplegableFilter}
          name="ordenar por precio"
          value={ordenPrecioActivo ?? ''}
          onChange={e =>{
              if(e.target.value === 'deseleccionar'){
                setOrdenPrecioActivo('')
              }else{
                setOrdenPrecioActivo(e.target.value)
              }}}
        >
          <option value="" disabled hidden>
            Ordenar por precio
          </option>
          <option value='deseleccionar'>Deseleccionar orden precio</option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>
      </div>
    </div>
  )
}
