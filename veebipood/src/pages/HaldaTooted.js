import React, { useState } from 'react';
import tootedFailist from "../data/tooted.json";
import { Link } from 'react-router-dom';

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (index) => {
    tootedFailist.splice(index, 1);
    uuendaTooted(tootedFailist.slice());
  }

  // sort((a,b) =>)
  // filter(yksPood => )

  return (
    <div>
      {tooted.map((yksToode, index) => 
        <div key={index}>
          <span>{yksToode}</span>
          <button onClick={() => kustuta(index)}>Kustuta</button>
          <Link to={"/muuda/" + index}>
            <button>Muuda</button>
          </Link>
        </div>)}
    </div>
  )
}

export default HaldaTooted