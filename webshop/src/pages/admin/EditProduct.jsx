import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import config from "../../data/config.json";
// import productsFromFile from "../../data/products.json";
import { useState } from 'react';

function EditProduct() {
  const { id } = useParams();
  const [dbProducts, setDbProducts] = useState([]); // 240tk
  // productsFromFile[index]      järjekorranumber       productsFromFile[4]

  // productsFromFile[93876610]

  // "Nobe"

  // ["Nobe", "Tesla", "BMW"]
  const found = dbProducts.find( element => element.id === Number(id) ); // "Nobe"
 // const result = productsFromFile.filter( element => element.id === Number(id) ); // ["Nobe"]
 //const index = productsFromFile.findIndex(element => element.id === Number(id)); // 0

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [idUnique, setIdUnique] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json()) // res ---> headerid, staatuskood
      .then(json => {
        // setProducts(json || []);
        setDbProducts(json || []);
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
          <input ref={categoryRef} type="text" defaultValue={found.category} /> <br />
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