import React from 'react'
              //({ sum })
function Payment(props) {
  
  function pay() {
    // andmebaasi tellimuse -> maksmata kujul

    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";

    const paymentData = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": props.sum,
      // "amount": sum,
      "order_reference": Math.random() * 9999999, // 0-1   * 9999999      0.3     65412313
      "nonce": "a9b7f7eadasd" + Math.random() * 9999999 + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://mihkel-webshop-03-23.web.app"
      };

    const paymentHeaders = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    };

    fetch(url, {"method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders})
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link);
  }

  return (
    <button onClick={pay}>Pay</button>
  )
}

export default Payment