import React, { useEffect, useState } from 'react'
import config from "../../data/config.json";
import { t } from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
// import { useParams } from 'react-router-dom';
// import productsFromFile from '../../data/products.json'
import { useRef } from 'react';
import FileUpload from '../../components/FileUpload';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [imageUpload, setImageUpload] = useState('file'); // file / url
  
  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []); 

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json()) // res ---> headerid, staatuskood
      .then(json => {
        // setProducts(json || []);
        setDbProducts(json || []);
      }) // mis reaalselt sellelt otspunktilt tuleb
  }, []);

  function add() {
    if (idRef.current.value === "") {
      toast("Id not filled");
      return;
    }
    if (/^[0-9]+$/.test(idRef.current.value) === false) {
      toast("Id must contain only numbers");
      return;
    }
    if (nameRef.current.value === "") {
      toast("Name not filled");
      return;
    }
    if (priceRef.current.value === "") {
      toast("Price not filled");
      return;
    }
    if (categoryRef.current.value === "") {
      toast("Category not selected");
      return;
    }
    if (/^[0-9.]+$/.test(priceRef.current.value) === false) {
      toast("Price must contain only numbers");
      return;
    }
    if (descriptionRef.current.value === "") {
      toast("Description not filled");
      return;
    }
    const addProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageUpload === "file" ? imageUrl : imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.value.checked,
    }
    dbProducts.push(addProduct);
    toast(t("product_added"));
    // ANDMEBAASI LISAMINE
    fetch(config.productsDbUrl,{"method": "PUT", "body": JSON.stringify(dbProducts)})
    idRef.current.value = "";
    nameRef.current.value = "";
    priceRef.current.value = "";
    imageUpload === "file" ? setImageUrl("") : imageRef.current.value = "";
    categoryRef.current.value = "";
    descriptionRef.current.value = "";
    activeRef.current.checked = false;
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

  const handleChange = (event) => {
    setImageUpload(event.target.value);
  };

  return (
    <div>
      <label> ID:</label><br />
      <input ref={idRef} onChange={checkIdUniqueness} type="number" /> <br />
      <label> {t("name")}:</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label> {t("price")}:</label><br />
      <input ref={priceRef} type="number" /> <br />
      <label> {t("image")}:</label><br />
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">How to insert image</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={imageUpload}
          onChange={handleChange}
        >
          <FormControlLabel value="file" control={<Radio />} label="File" />
          <FormControlLabel value="url" control={<Radio />} label="Url" />
        </RadioGroup>
      </FormControl>
      {imageUpload === "url" &&
      <>
      <br /><input ref={imageRef} type="text"/> <br />
      </>}
      {imageUpload === "file" && <FileUpload onSendPictureUrl={setImageUrl} />}
      <label> {t("category")}:</label>
      {/* <input ref={categoryRef} type="text"/> <br /> */}
      <select ref={categoryRef}>
        <option value="">Vali kategooria!</option>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select> <br />
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