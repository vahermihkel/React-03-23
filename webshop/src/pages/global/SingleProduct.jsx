import React from 'react'
import { useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json"

function SingleProduct() {
  const { id } = useParams();
  const found = productsFromFile.find(e => e.id === Number(id));

  return (
    <div>
      {found !== undefined && 
        <div>
          <img  src={found.image} alt="" />
          <div>ID: {id}</div>
          <div> Name: {found.name} </div>
          <div> Price: {found.price} </div>
          <div> Description: {found.description} </div>
          <div> Category: {found.category} </div>
        </div>}
      {found === undefined && <div>Not found</div>}
    </div>
  )
}

export default SingleProduct