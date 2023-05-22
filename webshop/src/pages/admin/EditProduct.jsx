import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import config from "../../data/config.json";
// import productsFromFile from "../../data/products.json";
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

function EditProduct() {
  const { id } = useParams();
  const [dbProducts, setDbProducts] = useState([]); // 240tk
  const found = dbProducts.find( element => element.id === Number(id) ); // "Nobe"

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [idUnique, setIdUnique] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []); 

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json()) // res ---> headerid, staatuskood
      .then(json => {
        setDbProducts(json || []);
        setLoading(false);
      }) // mis reaalselt sellelt otspunktilt tuleb
  }, []);

  const edit = () => {
    const index = dbProducts.findIndex(element => element.id === Number(id));

    const updatedProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked,
    }

    dbProducts[index] = updatedProduct;
    fetch(config.productsDbUrl,{"method": "PUT", "body": JSON.stringify(dbProducts)})
      .then(() => navigate("/admin/maintain-products"))
  }

  const checkIdUniqueness = () => {
    const index = dbProducts.findIndex(e => e.id === Number(idRef.current.value)); // 0...240      -1
    // const found = productsFromFile.find(e => e.id === idRef.current.value); // {"name": "", ..}    undefined
    // const filtered = productsFromFile.filter(e => e.id === idRef.current.value); // [{},{}]       []
    if (index === -1) {
      setIdUnique(true); // ei leitud kelleltki
    } else {
      setIdUnique(false); // leiti kelleltki
    }
  }

  if (isLoading === true) {
    return <Spinner variant="primary"/>
  }

  return (
    <div>
      { idUnique === false && <div>Inserted ID is not unique!</div>}
      {found !== undefined && 
        <div>
          <label>ID</label> <br />
          <input ref={idRef} onChange={checkIdUniqueness} type="number" defaultValue={found.id} /> <br />
          <label>Name</label> <br />
          <input ref={nameRef} type="text" defaultValue={found.name} /> <br />
          <label>Price</label> <br />
          <input ref={priceRef} type="number" defaultValue={found.price} /> <br />
          <label>Image</label> <br />
          <input ref={imageRef} type="text" defaultValue={found.image} /> <br />
          <label>Category</label> <br />
          {/* <input ref={categoryRef} type="text" defaultValue={found.category} /> <br /> */}
          <select ref={categoryRef} defaultValue={found.category}>
            <option value="">Vali kategooria!</option>
            {categories.map(category => <option key={category.name}>{category.name}</option>)}
          </select> <br />
          <label>Description</label> <br />
          <input ref={descriptionRef} type="text" defaultValue={found.description} /> <br />
          <label>Active</label> <br />
          <input ref={activeRef} type="checkbox" defaultChecked={found.active} /> <br />
          <button disabled={idUnique === false} onClick={edit}>Edit</button>
        </div>}
      {found === undefined && <div>Product not found</div>}
    </div>
  )
}

export default EditProduct