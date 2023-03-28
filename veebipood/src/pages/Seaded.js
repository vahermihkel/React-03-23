import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

// 1. andmebaas   ->  arendajad, kogu info tellimuste, kasutajate osas
// 2. brauserisse
// 3. fail

function Seaded() {              // tühjus - kui sellist võtit pole (pole kunagi setItem tehtud) ---> null
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est"); 
  // kaks püstist kriipsu ütlevad et kui vasakul on tühjus, siis võta parempoolne
  const aadressViide = useRef(); // addressRef
  const emailViide = useRef(); // emailRef
  const telefonViide = useRef(); // phoneRef

  const muudaKeelEst = () => {
    uuendaKeel("est");
    localStorage.setItem("keel", "est");  // võti   ,   väärtus
          // brauseri lokaalmälu, pane sinna midagi
          // salvestatakse sinna brauserisse, sellesse arvutisse, kus käib setItem()
          // kui cookied tühjendatakse / avatakse teine brauser / avatakse teine arvuti
          // seaded lähevad nii nagu esimest korda lehele tulles
  }

  const muudaKeelEng = () => {
    uuendaKeel("eng");
    localStorage.setItem("keel", "eng");
    // parem klõps lehel -> inspect (kontrolli) -> application (rakendus), storage
  }

  const muudaKeelRus = () => {
    uuendaKeel("rus");
    localStorage.setItem("keel", "rus");
  }

  const salvestaAadress = () => {
    // aadressViide.current.value ---> mis sisestati inputi sisse
    // [0] ---> esimene täht
    // .toLowerCase() ---> on JavaScripti sissekirjutatud
    // tammsaare === tammsaare
    // tammsaare === Tammsaare
 // if (aadressViide.current.value[0].toLowerCase() === aadressViide.current.value[0]) {
    if (/^[A-ZÜÕÖÄ0-9]/.test(aadressViide.current.value) === false) {
      toast.error("Ei saanud sisestada! Aadress on väikse tähega!");
      return;
    }
    localStorage.setItem("aadress", aadressViide.current.value);
    aadressViide.current.value = "";
    toast.success("Edukalt aadress salvestatud!");
  }

  const salvestaEmail = () => {
    if (emailViide.current.value.includes("@") === false) {
      toast.error("Ei saanud sisestada! Emailil ei ole @ märki!");
      return;
    }
    localStorage.setItem("email", emailViide.current.value);
    emailViide.current.value = "";
    toast.success("Edukalt email salvestatud!");
  }

  const salvestaTelefon = () => {
    if (/^[0-9]+$/.test(telefonViide.current.value) === false ) {
      toast.error("Ei saanud sisestada! Peab koosnema vaid numbritest!");
      return;
    }
    localStorage.setItem("telefon", telefonViide.current.value);
    telefonViide.current.value = "";
    toast.success("Edukalt telefon salvestatud!");
  }

  return (
    <div>
      <br /><br />

      <label>Aadress</label>
      <input ref={aadressViide} type="text" />
      <button onClick={salvestaAadress}>Salvesta</button>
      <br /> <br />
      <label>Email</label>
      <input ref={emailViide} type="text" />
      <button onClick={salvestaEmail}>Salvesta</button>
      <br /> <br />
      <label>Telefon</label>
      <input ref={telefonViide} type="text" />
      <button onClick={salvestaTelefon}>Salvesta</button>
      <br /> <br />

      <button onClick={muudaKeelEst}>Eesti keelseks</button>
      <button onClick={muudaKeelEng}>To English</button>
      <button onClick={muudaKeelRus}>Du Pycckuj</button>
      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Šdeš Pycckij rsõk</div>}

      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  )
}

export default Seaded