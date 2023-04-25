import React, { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json";
// import productsFromFile from "../../data/products.json";
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState([]); // otsingujärgne, muutuvas seisundis
  const [dbProducts, setDbProducts] = useState([]); // 240tk
  const searchedRef = useRef();

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json()) // res ---> headerid, staatuskood
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
      }) // mis reaalselt sellelt otspunktilt tuleb
  }, []);

                    // products seest järjekorranumber      "ebay"   ["ebay", "ebay", "ebay"]    ---> 1
  function deleteProduct(productId) {
    const index = dbProducts.findIndex(element => element.id === productId);
    dbProducts.splice(index, 1);
    setProducts(dbProducts.slice());
    fetch(config.productsDbUrl,{"method": "PUT", "body": JSON.stringify(dbProducts)})
  }

  const searchFromProducts = () => {
    const result = dbProducts.filter(e => 
      e.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  }

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <div>{products.length} tk</div>
       {products.map((element) => 
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
            <button onClick={() => deleteProduct(element.id)}>Delete</button>
          </div>
        )}
    </div>
  )
}

export default MaintainProducts