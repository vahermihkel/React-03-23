
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/global/HomePage";
import Cart from "./pages/global/Cart";
import { ContactUs } from "./pages/global/ContactUs";
import Shops from "./pages/global/Shops";
import SingleProduct from "./pages/global/SingleProduct";
import AdminHome from "./pages/admin/AdminHome";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainShops from "./pages/admin/MaintainShops";
import NavigationBar from './components/NavigationBar';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';
import Profile from './pages/auth/Profile';
import CheckPayment from './pages/global/CheckPayment';

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        <Route path="payment" element={ <CheckPayment /> } />
        {loggedIn === true && <>
          <Route path="profile" element={ <Profile /> } />
          <Route path="admin" element={ <AdminHome /> } />
          <Route path="admin/add-product" element={ <AddProduct /> } />
          <Route path="admin/edit-product/:id" element={ <EditProduct /> } />
          <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
          <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
          <Route path="admin/maintain-shops" element={ <MaintainShops /> } />  
        </>}
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <Signup /> } />
        <Route path="*" element={ <div>404 Not Found</div> } />
      </Routes>
    </div>
  );
}

export default App;

// 70ak/h / 4 ---> 17.5

// Varasemalt: 45min
// 12.04: 1h

// 12.04   13.00-15.00

// 11. 27.04 13.30-16.45
// 12. 02.05 13.00-16.15
// 04.05 jätame ära - lükkame lõppu
// 09.05 jätame ära
// 13. 11.05 13.00-16.15
// 14. 16.05 13.00-16.15
// lisamisel kontroll, kategooria dropdownist, mobiilivaade

// 15. 18.05 13.00-16.15
// leheküljed avalehel, Firebase-i pilt, RADIO button

// 16. 23.05 13.00-16.15
// Makse kinni püüdmist, E-mailiga maksmine (tooted saata e-maili)

// 17. 02.06 13.00-16.15
// proovitöö Nortalis aastast 2021

// 18. 15.06 13.00-14.30
// lõpuprojekti esitlemine