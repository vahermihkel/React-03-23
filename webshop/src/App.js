
import { Link, Route, Routes } from 'react-router-dom';
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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const updateLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

  // loo siia projekti ka 3-4 keel
  // react-toastify
  // Toode kustutamine MaintainProducts sees
  // Favicon muuta
  // Rakenduse nimi muuta tabi nimes
  // Google Font lisada
  // Sorteerimise nupud
  // Tõlkeid lisada

  // Panna mõnele kodusele projektile:
  // react-i18-next (uudised)
  // bootstrap (uudised)

  return (
    <div className="App">
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t("nav.admin")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("nav.shops")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
          </Nav>
          <img className="lang" src="/estonian.png" alt="" onClick={() => updateLanguage("en")} />
          <img className="lang" src="/english.png" alt="" onClick={() => updateLanguage("ee")} />
        </Container>
      </Navbar>

      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        <Route path="admin" element={ <AdminHome /> } />
        <Route path="admin/add-product" element={ <AddProduct /> } />
        <Route path="admin/edit-product/:id" element={ <EditProduct /> } />
        <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
        <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
        <Route path="admin/maintain-shops" element={ <MaintainShops /> } />        
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
// 15. 18.05 13.00-16.15
// 16. 23.05 13.00-16.15
// 17. 25.05 / 01.06 13.00-16.15

// 18. 15.06 13.00-14.30
