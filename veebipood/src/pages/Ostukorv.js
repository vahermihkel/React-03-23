import React, { useState } from "react";
import { Link } from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {                      
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  const tyhjenda = () => {
    uuendaOstukorv([]);
  };

  const lisa = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode); // lisab kõige lõppu juurde selle, mis on sulgude sees
    uuendaOstukorv(ostukorvFailist.slice()); // alati pean tegema useState uuenda funktsiooni HTML uuendamiseks
  }

  const kustuta = (nr) => {
    ostukorvFailist.splice(nr,1); // esimene nr: mitmendat, teine nr: mitu tükki
    uuendaOstukorv(ostukorvFailist.slice());
  }

  return (
    <div>
      { ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button> }
      { ostukorv.length > 0 && <div>Kokku tooteid: {ostukorv.length} tk</div> }
      { ostukorv.map((toode, jrkNr) => 
        <div key={jrkNr}>
          {toode}  
          <button onClick={() => lisa(toode)}>+</button> 
          <button onClick={() => kustuta(jrkNr)}>x</button> 
        </div>)}
      { ostukorv.length === 0 &&
        <div>
          <div>Ostukorv on tühi</div>
          <Link to="/avaleht">Tooteid lisama</Link>
        </div>
      }
    </div>
  );
}

export default Ostukorv;
