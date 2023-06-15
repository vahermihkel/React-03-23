import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function OrderEmail({totalSum, cartProducts}) {

  const nameRef = useRef();
  const emailRef = useRef();

  const sendEmail = () => {
    const orderProducts =  
      "<ol>" + 
        cartProducts.map((element) => `
          <li>${element.product.name} 
            <img src=${element.product.image}  alt=""/> 
          </li>`).join("") + 
      "</ol>";

    const data = {
      "client_name": nameRef.current.value,
      "client_email": emailRef.current.value,
      "cart_sum": totalSum,
      "order_products": orderProducts
    }

    emailjs.send('service_fum24bj', 'template_zyogyle', data, 'Xbn0xj_4LjNugxYGl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <TextField inputRef={nameRef} label="Name" variant="outlined" /> <br /><br />
      <TextField inputRef={emailRef} label="Email" variant="outlined" /> <br /><br />
      <Button variant="contained" onClick={sendEmail}>Send</Button> <br />
    </div>
  )
}

export default OrderEmail