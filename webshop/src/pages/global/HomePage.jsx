import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// import cartFromFile from '../../data/cart.json';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import "../../css/HomePage.css";  

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
  const { t } = useTranslation(); 
  // const [cart, updateCart] = useState(cartFromFile);


  function filterByCategory() {
    const result = productsFromFile.filter(element => element.category.includes("motorcycle"));
    setProducts(result);
  }

  function addToCart(clickedProduct) {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartLS.findIndex(e => e.product.id === clickedProduct.id);
    if (index >= 0) { // index !== -1
      // KUI ON JUBA OLEMAS, suurendan kogust (quantity <-- ise välja mõeldud)
      cartLS[index].quantity = cartLS[index].quantity + 1;
      // uuendaKogus(kogus + 1);
    } else {
      // KUI EI OLE OLEMAS, pushin kogusega 1 (selle pärast, et kogus peab olema igaühel ja 
        // kui teda varasemalt polnud, on kogus 1)
      cartLS.push({"product": clickedProduct, "quantity": 1});
    }

    localStorage.setItem("cart", JSON.stringify(cartLS));
    // localStorage.setItem("language", "ee"); // i18n
    // localStorage.setItem("keel", "est");
    // localStorage.setItem("theme", "dark-mode");
    // localStorage.setItem("telefon", "51232131");
    // localStorage.setItem("aadress", "Tammsaare 111");
    // localStorage.setItem("email", "adsd@dasda.ee");

    // updateCart(cartFromFile.slice());
    toast(clickedProduct.name + " lisatud")
  }

  function resetFilters() {
    setProducts(productsFromFile);
  }

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

  return (
    <div>
      <Button variant="secondary" onClick={sortAZ}>{t("sort.sorteeriAZ")}</Button>
      <Button variant="secondary" onClick={sortZA}>{t("sort.sorteeriZA")}</Button>
      <Button variant="secondary" onClick={sortPriceAsc}>{t("sort.sorteeriKasvav")}</Button>
      <Button variant="secondary" onClick={sortPriceDesc}>{t("sort.sorteeriKahanev")}</Button>
      <br /><br />
      <div>{products.length} tk</div>
      <Button variant="contained" onClick={filterByCategory}>{t("filter_motorcycle")}</Button>
      <Button  variant="contained" onClick={resetFilters}>Reset</Button>
      <div className="products">
        {products.map(element => 
            <div className="home-product" key={element.id}>
              <Link to={"/product/" + element.id}>
                <img src={element.image} alt="" />
                <div>{element.name}</div>
                <div>{element.price}</div>
              </Link>
              <Button variant="contained" onClick={() => addToCart(element)}>
                {t("add_to_cart")}
              </Button>
            </div>
          )}
      </div>
      <ToastContainer position='bottom-center'></ToastContainer>
    </div>
  )
}

export default HomePage