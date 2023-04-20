import React from 'react'
import { useState } from 'react'
// import cartFromFile from '../../data/cart.json'
import { t } from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import "../../css/Cart.css";

function Cart() {

  const [cart, updateCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  function clearCart() {
    updateCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    toast.success("Cleared")
  }

  function decreaseQuantity(qnr) {
    cart[qnr].quantity = cart[qnr].quantity - 1;
    if (cart[qnr].quantity <= 0) {
      deleteItem(qnr);
    }
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function increaseQuantity(qnr) {
    cart[qnr].quantity = cart[qnr].quantity + 1;
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function deleteItem(qnr) {
    cart.splice(qnr, 1);
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Item removed");
  }

  function calcSum() {
    let sum = 0;
    cart.forEach(cartLine => sum = sum + cartLine.product.price * cartLine.quantity);
    return sum.toFixed(2);
  }

  return (
    <div>
      {cart.length === 0 && <div>Cart is empty!</div>}

      {cart.length > 0 && <Button variant="contained" onClick={clearCart}>{t("clearcart")}</Button>}
      
      {cart.length > 0 && 
        <div className="totalsection">
          {cart.length > 0 && <div>{t("total")}: {calcSum()} € </div>}
        </div>}

      <br /><br /><br /><br />
      {cart.map((element, qnr) =>
      <div className="product" key={element.product.id}>
        <img className="image" src={element.product.image} alt=""></img>
        <div className="name">{element.product.name}</div>
        <div className="price">{element.product.price}</div>
        <div className="quantity">
          <img className="button" onClick={() => decreaseQuantity(qnr)} src="/minus.png" alt="" />
          {/* <button>-</button> */}
          <div>{element.quantity}</div>
          <img className="button" onClick={() => increaseQuantity(qnr)} src="/plus.png" alt="" />
          {/* <button>+</button> */}
        </div>
        <div className="total">{(element.product.price * element.quantity).toFixed(2)}</div>
        <img className="button" variant="contained" onClick={() => deleteItem(qnr)} src="/remove.png" alt="" />
        {/* <Button >{t("delete")}</Button> */}
      </div>
      )}

      <ToastContainer position='bottom-center'></ToastContainer>
    </div>
  )
}


export default Cart