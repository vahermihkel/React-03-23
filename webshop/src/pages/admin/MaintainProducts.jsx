import React, { useRef, useState } from 'react'
import productsFromFile from "../../data/products.json";
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();

  function deleteProduct(index) {
    products.splice(index, 1);
    setProducts(productsFromFile.slice());
  }

  const searchFromProducts = () => {
    const result = productsFromFile.filter(e => 
      e.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  }

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <div>{products.length} tk</div>
       {products.map((element, index) => 
          <div key={element.id}>
            <img src={element.image} alt="" />
            <div>{element.id}</div>
            <div>{element.image}</div>
            <div>{element.name}</div>
            <div>{element.price}</div>
            <div>{element.description}</div>
            <div>{element.category}</div>
            <div>{element.active}</div>
            <Link to={"/admin/edit-product/" + element.id}>
              <button>Edit</button>
            </Link>
            <button onClick={() => deleteProduct(index)}>Delete</button>
          </div>
        )}
    </div>
  )
}

export default MaintainProducts