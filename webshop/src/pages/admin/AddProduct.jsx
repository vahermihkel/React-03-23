import React, { useEffect, useState } from 'react'
import config from "../../data/config.json";
import { t } from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
// import { useParams } from 'react-router-dom';
// import productsFromFile from '../../data/products.json'
import { useRef } from 'react';

function AddProduct() {
  // const { id } = useParams();  path="add-product/:id"
  // const found = productsFromFile.find(element => element.id === Number(id));

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [idUnique, setIdUnique] = useState(true);
  const [dbProducts, setDbProducts] = useState([]); // 240tk
  
  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json()) // res ---> headerid, staatuskood
      .then(json => {
        // setProducts(json || []);
        setDbProducts(json || []);
      }) // mis reaalselt sellelt otspunktilt tuleb
  }, []);

  function add() {
    const addProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.value.checked,
    }
    dbProducts.push(addProduct);
    toast(t("product_added"));
    // ANDMEBAASI LISAMINE
    fetch(config.productsDbUrl,{"method": "PUT", "body": JSON.stringify(dbProducts)})
  }

  const checkIdUniqueness = () => {
    const index = dbProducts.findIndex(e => e.id === Number(idRef.current.value));
    if (index === -1) {
      setIdUnique(true)
    } else {
      setIdUnique(false)
      toast("Toote ID pole unikaalne");
    }
  }

  return (
    <div>
      <label> ID:</label>
      <input ref={idRef} onChange={checkIdUniqueness} type="number" /> <br />
      <label> {t("name")}:</label>
      <input ref={nameRef} type="text" /> <br />
      <label> {t("price")}:</label>
      <input ref={priceRef} type="number" /> <br />
      <label> {t("image")}:</label>
      <input ref={imageRef} type="text"/> <br />
      <label> {t("category")}:</label>
      <input ref={categoryRef} type="text"/> <br />
      <label> {t("description")}:</label>
      <input ref={descriptionRef} type="text"/> <br />
      <label> {t("active")}:</label>
      <input ref={activeRef} type="checkbox"/> <br />
      <button disabled={idUnique === false}  onClick={add}>{t("add_product")}</button>
      {idUnique === false && <div>{t("id_error")}</div>}
      <ToastContainer position='top-center'></ToastContainer>
    </div>
  )
}
export default AddProduct