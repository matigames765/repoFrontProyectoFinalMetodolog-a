import styles from './ColumnFilterCatalogo.module.css'

export const ColumnFilterCatalogo = () => {
  return (
    <div className={styles.principalContainerColumFilter}>
        <div className={styles.containerDesplegables}>
            <select className={styles.desplegableFilter} name='talle'>
                <option value="">Talle</option>
            </select>
            <select className={styles.desplegableFilter} name='tipo producto'>
                <option value="">Tipo producto</option>
            </select>
            <select className={styles.desplegableFilter} name='ordenar por precio'>
                <option value="">Ordenar por precio</option>
            </select>
        </div>
    </div>
  )
}