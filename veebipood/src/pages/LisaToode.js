import React, { useRef, useState } from 'react';
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();

  // function lisa() {}
  // täpselt sama, mis function variant, aga alumist kasutatakse veidi rohkem
  // const lisa = () => {} 

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Tühja nimetusega toodet ei saa lisada!");
    } else {
      uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
      tootedFailist.push(inputiLuger.current.value);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      {/* ainult <div></div> on see, mis tekitab uue rea */}
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode