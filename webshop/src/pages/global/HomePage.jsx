import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  return (
    <div>
      {/* 
        sortAZ
        sortZA
        sortPriceAsc
        sortPriceDesc
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