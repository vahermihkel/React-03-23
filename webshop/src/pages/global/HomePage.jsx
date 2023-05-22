import React, { useEffect, useState } from 'react'
import config from "../../data/config.json";
import { ToastContainer} from 'react-toastify';
import styles from "../../css/HomePage.module.css";  
import SortButtons from '../../components/home/SortButtons';
import Product from '../../components/home/Product';
import FilterButtons from '../../components/home/FilterButtons';
import { Spinner } from 'react-bootstrap';
import CarouselGallery from '../../components/home/CarouselGallery';
import Pagination from 'react-bootstrap/Pagination';

function HomePage() {
  const [products, setProducts] = useState([]); // väljanäidatav ---> kõikuvas koguses xxxx 20tk
  const [filteredProducts, setFilteredProducts] = useState([]); // pärast filtreerimist tooted 59, 60, 1
  const [dbProducts, setDbProducts] = useState([]); // 240tk ALATI KÕIK
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [activePage, setActivePage] = useState(1);
  // const [pages, setPages] = useState([]);

  const pages = [];
  for (let number = 1; number <= Math.ceil(filteredProducts.length/20); number++) {
    pages.push(number);
  }
  // setPages(pagesArray);


  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
  }, []);
  
  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json()) // res ---> headerid, staatuskood
      .then(json => {
        setProducts(json.slice(0,20) || []);
        setFilteredProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      }) // mis reaalselt sellelt otspunktilt tuleb
  }, []);
                  // 1   2   3
  const changePage = (newPage) => {
    setActivePage(newPage);
    setProducts(filteredProducts.slice(20*newPage-20,20*newPage));
    
    // setProducts(0,20);
    // setProducts(20,40);
    // setProducts(40,60);
  }

  if (isLoading === true) {
    return <Spinner />
  }

  return (
    <div>
      <CarouselGallery />
      
      <SortButtons 
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        setProducts={setProducts}
        page={activePage}
        />
      <br /><br />
      
      <div>Showing products: {products.length < 20 ? filteredProducts.length : products.length * activePage}/{filteredProducts.length}</div>
      
      <FilterButtons
        dbProducts={dbProducts}
        setFilteredProducts={setFilteredProducts}
        setProducts={setProducts}
        setActivePage={setActivePage}
        categories={categories}
      />
      
      <img className="ad" src={"https://picsum.photos/id/237/100/300"} alt="" />
      
      <Pagination>
        {pages.map(number => 
          <Pagination.Item onClick={() => changePage(number)} key={number} active={number === activePage}>
           {number}
         </Pagination.Item>
        )}
      </Pagination>
      
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