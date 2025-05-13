import { useEffect } from 'react'
import { useTalles } from '../../../../hooks/Producto/useTalles'
import styles from './ColumnFilterCatalogo.module.css'
// import { getAllTalles } from '../../../../http/Producto/talles'
import { TipoProducto } from '../../../../types/Producto/TipoProducto'
import { tallesStore } from '../../../../store/Producto/tallesStore'
import { precioStore } from '../../../../store/Producto/precioStore'

export const ColumnFilterCatalogo = () => {
    const { talles, getTallesHook } = useTalles()

    const setTalleActivo = tallesStore((state) => state.setTalleActivo)
    const setOrdenPrecio = precioStore((state) => state.setOrdenPrecio)

    useEffect(() => {
        getTallesHook()
    }, [talles])

    const handleSetTalleActivo = (talle: string) => {
        setTalleActivo(talle)
    }

    const handleSetOrdenPrecio = (ordenPrecio: string) => {
        setOrdenPrecio(ordenPrecio)
    }

    return (
        <div className={styles.principalContainerColumFilter}>
            <div className={styles.containerDesplegables}>
                <select className={styles.desplegableFilter} name='talle' defaultValue=''>
                    <option value="" disabled hidden>Talle</option>
                    {
                        talles.map((talle) =>
                            <option key={talle.id} value={talle.talle} onClick={() => {
                                handleSetTalleActivo(talle.talle)
                            }}>{talle.talle}</option>
                        )
                    }
                </select>
                <select className={styles.desplegableFilter} name='tipo producto' defaultValue=''>
                    <option value="" disabled hidden>Tipo producto</option>
                    <option value={TipoProducto.ZAPATILLA}>Zapatilla</option>
                    <option value={TipoProducto.ROPA}>Ropa</option>
                </select>
                <select className={styles.desplegableFilter} name='ordenar por precio'>
                    <option value="" disabled hidden>Ordenar por precio</option>
                    <option value="" onClick={() => {
                        handleSetOrdenPrecio('Ascendente')
                    }}>Ascendente</option>
                    <option value="" onClick={() => {
                        handleSetOrdenPrecio('Descendente')
                    }}>Descendente</option>
                </select>
            </div>
        </div>
    )
}