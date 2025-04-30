import { ColumnFilterCatalogo } from '../../ui/ColumnFilterCatalogo/ColumnFilterCatalogo'

import { FooterCatalogo } from '../../ui/FooterCatalogo/FooterCatalogo'
import { HeaderDescuento } from '../../ui/HeaderDescuento/HeaderDescuento'
import { NavBarCatalogo } from '../../ui/NavBarCatalogo/NavBarCatalogo'
import { SectionImagenesCatalogo } from '../../ui/SectionImagenesCatalogo/SectionImagenesCatalogo'
import styles from './CatalogoScreen.module.css'

export const CatalogoScreen = () => {
  return (
    <div className={styles.catalogoContainer}>
        <HeaderDescuento />
        <NavBarCatalogo />
        <ColumnFilterCatalogo />
        <SectionImagenesCatalogo />
        <FooterCatalogo />
    </div>
  )
}