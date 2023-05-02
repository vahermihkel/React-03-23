import React, { useEffect, useState } from 'react'
import config from "../../data/config.json";
import { ToastContainer} from 'react-toastify';
import styles from "../../css/HomePage.module.css";  
import SortButtons from '../../components/home/SortButtons';
import Product from '../../components/home/Product';
import FilterButtons from '../../components/home/FilterButtons';
import { Spinner } from 'react-bootstrap';
import CarouselGallery from '../../components/home/CarouselGallery';

function HomePage() {
  const [products, setProducts] = useState([]); // väljanäidatav ---> kõikuvas koguses
  const [dbProducts, setDbProducts] = useState([]); // 240tk
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
  }, []);
  
  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json()) // res ---> headerid, staatuskood
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      }) // mis reaalselt sellelt otspunktilt tuleb
  }, []);

  if (isLoading === true) {
    return <Spinner />
  }

  return (
    <div>
      <CarouselGallery />
      <SortButtons 
        products={products}
        setProducts={setProducts}
        />
      <br /><br />
      <div>{products.length} tk</div>
      <FilterButtons
        dbProducts={dbProducts}
        setProducts={setProducts}
        categories={categories}
      />
      <div className={styles.products}>
        {products.map(element => 
            <Product key={element.id} element={element} />
          )}
      </div>
      <ToastContainer position='bottom-center'></ToastContainer>
    </div>
  )
}

export default HomePage