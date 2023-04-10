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
  const [tooted, uuendaTooted] = useState(tootedFailist.slice());

  const lisaOstukorvi = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
  }

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKasv = () => {
    tooted.sort((a,b) => a.hind - b.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKah = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  }

  // const filtreeriN = () => {
  //   const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("N"));
  //   uuendaTooted(vastus);
  // }

  // const filtreeriB = () => {
  //   const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
  //   uuendaTooted(vastus);
  // }

  // const filtreeriT = () => {
  //   const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("T"));
  //   uuendaTooted(vastus);
  // }

  const filtreeri = (esitaht) => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith(esitaht));
    uuendaTooted(vastus);
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A - Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z - A</button>
      <button onClick={sorteeriHindKasv}>Sorteeri hind kasvavalt</button>
      <button onClick={sorteeriHindKah}>Sorteeri kahanevalt</button>
      <br /><br />
      <button onClick={() => filtreeri("B")}>B</button>
      <button onClick={() => filtreeri("N")}>N</button>
      <button onClick={() => filtreeri("T")}>T</button>
      {tooted.map((toode, jrkNr) => 
        <div key={jrkNr}>
          <Link to={"/toode/" + toode.nimi}>
            <img className="pilt" src={toode.pilt} alt="" />
            <div>{toode.nimi}</div>
            <div>{toode.hind}</div>
            <div>{toode.aktiivne}</div>
          </Link>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted