import { ColumnFilterCatalogo } from '../../../ui/ColumnFilterCatalogo/ColumnFilterCatalogo'
import { HeaderDescuento } from '../../../ui/HeaderDescuento/HeaderDescuento'
import { NavBarCatalogo } from '../../../ui/NavBarCatalogo/NavBarCatalogo'
import { SectionImagenesCatalogo } from '../../../ui/SectionImagenesCatalogo/SectionImagenesCatalogo'
import styles from './CatalogoScreen.module.css'

export const CatalogoScreen = () => {
  return (
    <div>
        <HeaderDescuento />
        <NavBarCatalogo />
        <ColumnFilterCatalogo />
        <SectionImagenesCatalogo />
    </div>
  )
}
