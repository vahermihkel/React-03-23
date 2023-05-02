import React from 'react'
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

//  props variandi
function SortButtons(props) {
  const { t } = useTranslation(); 

  function sortAZ() {
    props.products.sort((a, b) => a.name.localeCompare(b.name));
    props.setProducts(props.products.slice())
  }

  function sortZA() {
    props.products.sort((a, b) => b.name.localeCompare(a.name));
    props.setProducts(props.products.slice())
  }

  function sortPriceAsc() {
    props.products.sort((a, b) => a.price - b.price);
    props.setProducts(props.products.slice())
  }

  function sortPriceDesc() {
    props.products.sort((a, b) => b.price - a.price);
    props.setProducts(props.products.slice())
  }

  return (
    <div>
      <Button variant="secondary" onClick={sortAZ}>{t("sort.sorteeriAZ")}</Button>
      <Button variant="secondary" onClick={sortZA}>{t("sort.sorteeriZA")}</Button>
      <Button variant="secondary" onClick={sortPriceAsc}>{t("sort.sorteeriKasvav")}</Button>
      <Button variant="secondary" onClick={sortPriceDesc}>{t("sort.sorteeriKahanev")}</Button>
    </div>
  )
}

export default SortButtons