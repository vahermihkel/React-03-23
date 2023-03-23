import React, { useState } from 'react'

function Seaded() {
  const [keel, uuendaKeel] = useState("est");

  const muudaKeelEst = () => {
    uuendaKeel("est");
  }

  const muudaKeelEng = () => {
    uuendaKeel("eng");
  }

  const muudaKeelRus = () => {
    uuendaKeel("rus");
  }

  return (
    <div>
      <button onClick={muudaKeelEst}>Eesti keelseks</button>
      <button onClick={muudaKeelEng}>To English</button>
      <button onClick={muudaKeelRus}>Du Pycckuj</button>
      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Šdeš Pycckij rsõk</div>}
    </div>
  )
}

export default Seaded