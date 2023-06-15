import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function CheckPayment() {
  // EDUKAD:
  // payment?order_reference=5703739.096055995&payment_reference=14e2d1114aa0c51b4f00603940b0102eeec3fabe251a80a3cc6383351e25511d
  // payment?order_reference=7553257.193886378&payment_reference=7b57926e31973f390192c31037a8fd9f79e953cec8ddcebaac6f80e4907c6d94
  // payment?order_reference=5968250.805478419&payment_reference=f5b7ec80881092bd97a18c5caf30080598e53ddfaddf19aa03579f11cec0a4d7
  // payment?order_reference=704617.3480062658&payment_reference=2b1763fb32ce88ede2a7acb139a48d04bb1eeec9c6b688a6909a866ac1972f29
  // payment?order_reference=3366793.0999849425&payment_reference=79b5ecfee5a99d95891bff881eb547d5d5d0369c0b07f0239792412397f8281a
  // payment?order_reference=1101140.0638340923&payment_reference=bd023e5a36c89a834a3c8caac135882210d1405920ee521b03105c542d1e1910
  // payment?order_reference=9501567.64190127&payment_reference=c4223f7ff93ccc8bc357e8a82df8a347ff76b302ea3f170b6e56a207aec9bb81

  // FAILED:
  // payment?order_reference=8672377.413238192&payment_reference=75984d43bb37802ea1601e8fec0e6fe19e729a2fb507423032a4e999a048cf0a

  // payment/14e2d1114aa0c51b4f00603940b0102eeec3fabe251a80a3cc6383351e25511d
  // App.js ---> payment/:id
  const [searchParams] = useSearchParams();
  const paymentReference = searchParams.get("payment_reference");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(
      "https://igw-demo.every-pay.com/api/v4/payments/" +
        paymentReference +
        "?api_username=e36eb40f5ec87fa2",
      {
        headers: {
          Authorization:
            "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        switch(json.payment_state) {
          case "settled":
            // OTSIMA TELLIMUSE ANDMEBAASIST ÜLES JA MUUTMA TA MAKSTUKS
            setMessage("Edukalt makstud!");
            return;
          case "failed":
            // OTSIMA TELLIMUSE ANDMEBAASIST ÜLES JA MUUTMA TA MAKSE FEILINUKS
            setMessage("Makse ei õnnestunud!");
            return
          case "voided":
            // OTSIMA TELLIMUSE ANDMEBAASIST ÜLES JA MUUTMA TA MAKSE VOIDEDIKS
            setMessage("Makse ei õnnestunud!");
            return;
          case "abandoned":
            // OTSIMA TELLIMUSE ANDMEBAASIST ÜLES JA MUUTMA TA MAKSE ABANDONE-KS
            setMessage("Makse ei õnnestunud!");
            return;
          default:
            setMessage("Tundmatu viga!");
            return;
        }
      });
  }, [paymentReference]);

  return (
    <div>
      <div>{message}</div>
    </div>
    );
}

export default CheckPayment;
