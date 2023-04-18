import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
  
function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
  const { t } = useTranslation(); 

  function sortAZ() {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice())
  }

  function sortZA() {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice())
  }

  function sortPriceAsc() {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice())
  }

  function sortPriceDesc() {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice())
  }

  const addToCart = () => {
    // LISA OSTUKORVI.

    // TEE UUS FAIL: cart.json
    // lisa sinna sinna

    // Siia ka Toast
  }

  const filterByCategory = () => {

  }

  return (
    <div>
      <Button variant="secondary" onClick={sortAZ}>{t("sorteeriAZ")}</Button>
      <Button variant="secondary" onClick={sortZA}>{t("sorteeriZA")}</Button>
      <Button variant="secondary" onClick={sortPriceAsc}>{t("sorteeriKasvav")}</Button>
      <Button variant="secondary" onClick={sortPriceDesc}>{t("sorteeriKahanev")}</Button>
      {/* Button USB DRIVE
          Button Memory bank
      */}
      {products.map(element => 
          <div key={element.id}>
            <img src={element.image} alt="" />
            <div>{element.name}</div>
            <div>{element.price}</div>
            <button>Add to cart</button>
          </div>
        )}
    </div>
  )
}

export default HomePage