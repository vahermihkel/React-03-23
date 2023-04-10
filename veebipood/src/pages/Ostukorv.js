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

  const arvutaKogusumma = () => {
    let summa = 0;
    ostukorv.forEach(toode => summa = summa + toode.hind);
    return summa;
  }

  return (
    <div>
      { ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button> }
      { ostukorv.length > 0 && <div>Kokku tooteid: {ostukorv.length} tk</div> }
      { ostukorv.map((toode, jrkNr) => 
        <div key={jrkNr}>
          <img className="pilt" src={toode.pilt} alt="" />
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <div>{toode.aktiivne}</div>
          <button onClick={() => lisa(toode)}>+</button> 
          <button onClick={() => kustuta(jrkNr)}>x</button> 
        </div>)}
      { ostukorv.length === 0 &&
        <div>
          <div>Ostukorv on tühi</div>
          <Link to="/avaleht">Tooteid lisama</Link>
        </div>
      }
      { ostukorv.length > 0 && <div>Kokku: {arvutaKogusumma()} €</div> }
    </div>
  );
}

export default Ostukorv;
