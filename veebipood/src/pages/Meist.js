import React, { useState } from 'react'

function Meist() {
  const [aadress, uuendaAadressi] = useState(localStorage.getItem("aadress") || "Aadressi pole veel sisestatud");
  const email = localStorage.getItem("email") || "";
  const [telefon, uuendaTelefoni] = useState(localStorage.getItem("telefon") || "");
  const [naitaEmaili, uuendaNaitaEmaili] = useState(false);

  return (
    <div>
      <div>Meie aadress: 
        {aadress}
        <button onClick={() => uuendaAadressi(aadress.toUpperCase())}>Suurteks tähtedeks</button>
        <button onClick={() => uuendaAadressi(aadress.toLowerCase())}>Väikesteks tähtedeks</button>
      </div>
      <div>Meie email: 
          {naitaEmaili === false && <button onClick={() => uuendaNaitaEmaili(true)}>Näita e-maili</button>} 
          {naitaEmaili === true && <span className={email.endsWith(".ee") ? "kuldne" : undefined }>{email}</span>}
      </div>
      <div>Meie telefon: 
         {/* {naitaSuunakoodi === true && <span>+372</span>} {telefon}
          {naitaSuunakoodi === false && <button onClick={() => uuendaNaitaSuunakoodi(true)}>Lisa suunakood</button>} */}
          {telefon}
          {telefon.startsWith("+372") === false && 
            <button onClick={() => uuendaTelefoni("+372" + telefon)}>Lisa suunakood</button>}
      </div>
    </div>
  )
}

export default Meist

// span - tühjus, ei tee uut rida
// div - tühjus, teeb uue rea     division