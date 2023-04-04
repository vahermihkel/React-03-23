import React from 'react';
import { useParams } from 'react-router-dom';
import tootedFailist from "../data/tooted.json";

function YksikToode() {
  // <Route path="toode/:jrkNr" element={ <YksikToode /> } />
  const { jrkNr } = useParams();


  const leitud = tootedFailist[jrkNr];
  //        ["Audi", "Opel", "BMW", "Mercdedes"][2];

  return (
    <div>
      {leitud !== undefined && 
        <div>
          <div>Toote järjekorranumber: {jrkNr}</div>
          <div>Toote nimi: {leitud}</div>
          <div>Toote pilt: ....</div>
        </div>}
        { leitud === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default YksikToode