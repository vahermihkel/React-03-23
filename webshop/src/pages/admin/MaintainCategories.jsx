import React, { useEffect, useRef, useState } from 'react';
import config from "../../data/config.json";

// https://mihkel-webshop-03-23-default-rtdb.europe-west1.firebasedatabase.app/

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []); 
// kandiliste sulgude vahel on loetletud muutujad mille muutumisel läheb uuesti useEffect käima

  const add = () => {
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice()); // HTMLi uuenduseks
    // andmebaasi uuendamise
    // TOAST.success("Category added");
    fetch(config.categoriesDbUrl,{"method": "PUT", "body": JSON.stringify(categories)})
    // {"method": "PUT", "body": JSON.stringify(categories), "headers": {"Authorization": TOKEN, "Content-Type": "application/json"}}
  }

  const deleteCategory = (index) => {
    // categories.push({"name": categoryRef.current.value});
    categories.splice(index,1);
    setCategories(categories.slice());
    categoryRef.current.value = "";
    // TOAST.success("Category deleted");
    fetch(config.categoriesDbUrl,{"method": "PUT", "body": JSON.stringify(categories)})
  }

  // ÜHE kaupa lisamine method: "POST"
  // MITME kaupa lisamine method: "PUT"
  // MUUTMINE on method: "PUT"
  // VÕTMINE kõiki method: "GET"
  // VÕTA ÜKS method: "GET"
  // KUSTUTAMINE method: "DELETE"
  // ÜHE VÄLJA MUUMINE ANDMEBAASIS: method: "PATCH"    hinda, aktiivne

  return (
    <div>
      {categories.length === 0 && <div>No categories!</div>}
      <label>Category</label><br />
      <input ref={categoryRef} type="text" /><br />
      <button onClick={add}>Add</button> <br />
      {categories.map((element, index) => 
        <div>
          {element.name}
          <button onClick={() => deleteCategory(index)}>x</button>
        </div>)}
    </div>
  )
}

export default MaintainCategories