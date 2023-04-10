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
        <div key={index} className={ yksToode.aktiivne ? "aktiivne-toode": "mitteaktiivne-toode" }>
          <img className="pilt" src={yksToode.pilt} alt="" />
          <div>{yksToode.nimi}</div>
          <div>{yksToode.hind}</div>
          <div>{yksToode.aktiivne}</div>
          <button onClick={() => kustuta(index)}>Kustuta</button>
          <Link to={"/muuda/" + index}>
            <button>Muuda</button>
          </Link>
        </div>)}
    </div>
  )
}

export default HaldaTooted