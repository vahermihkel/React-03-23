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
      <table>
        <tr>
          <th>Image</th>
          <th>ID</th>
          {/* <th>Image URL</th> */}
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
        {products.map((element) => 
            <tr key={element.id} className={element.active === true ? "active-product" : "inactive-product"}>
              <td><img className="image" src={element.image} alt="" /></td>
              <td>{element.id}</td>
              {/* <td style={{"width": "10%"}}>{element.image}</td> */}
              <td>{element.name}</td>
              <td>{element.price}</td>
              <td>{element.description}</td>
              <td>{element.category}</td>
              <td>
                <Link to={"/admin/edit-product/" + element.id}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteProduct(element.id)}>Delete</button>
              </td>
            </tr>
          )}
      </table>
    </div>
  )
}

export default MaintainProducts