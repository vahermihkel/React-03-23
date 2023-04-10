import React, { useRef, useState } from 'react';
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  // function lisa() {}
  // täpselt sama, mis function variant, aga alumist kasutatakse veidi rohkem
  // const lisa = () => {} 

  const lisa = () => {
    if (nimiRef.current.value === "") {
      uuendaSonum("Tühja nimetusega toodet ei saa lisada!");
    } else {
      uuendaSonum("Toode lisatud: " + nimiRef.current.value);
      const uusToode = {
        "nimi": nimiRef.current.value,
        "hind": Number(hindRef.current.value),
        "pilt": piltRef.current.value,
        "aktiivne": aktiivneRef.current.checked
      }
      tootedFailist.push(uusToode);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      {/* ainult <div></div> on see, mis tekitab uue rea */}
      <label>Uue toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Uue toote hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Uue toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Uue toote aktiivsus</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode