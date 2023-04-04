import React, { useState } from 'react';
import ostukorvFailist from "../data/ostukorv.json";
import tootedFailist from "../data/tooted.json";
import { Link } from 'react-router-dom';

// 2 faili omavahel suhtlema
// 1. localStorage (brauseri lokaalmälu)
// 2. andmebaas (siis saab panna ka võõrad arvutid omavahel suhtlema)
// 3. child ja parent componentideks tegemine (props) ---> keerulised
          // refreshiga andmed kaovad
// 4. contexti kasutamine ---> keerulised
          // refreshiga andmed kaovad
// 5. faili kaudu (.json faili, mille sisse lisamine ja mille seest kustutamine)
          // refreshiga andmed kaovad

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
  }

  return (
    <div>
      {tooted.map((toode, jrkNr) => 
        <div key={jrkNr}>
          <Link to={"/toode/" + jrkNr}>{toode} </Link>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted