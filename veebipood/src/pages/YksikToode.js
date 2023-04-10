import React from 'react';
import { useParams } from 'react-router-dom';
import tootedFailist from "../data/tooted.json";

function YksikToode() {
  // <Route path="toode/:jrkNr" element={ <YksikToode /> } />
  const { jrkNr } = useParams();


  // const leitud = tootedFailist.filter(e => e.nimi === jrkNr)[0];
  const leitud = tootedFailist.find(e => e.nimi === jrkNr);
  //        ["Audi", "Opel", "BMW", "Mercdedes"][0];

  return (
    <div>
      {leitud !== undefined && 
        <div>
          <img src={leitud.pilt} alt="" />
          <div>Toote järjekorranumber: {jrkNr}</div>
          <div>Toote nimi: {leitud.nimi}</div>
          <div>Toote hind: {leitud.hind} €</div>
          <div>Toote kirjeldus: ....</div>
        </div>}
        { leitud === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default YksikToode