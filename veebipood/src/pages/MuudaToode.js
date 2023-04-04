import React, { useRef } from 'react';
import tootedFailist from "../data/tooted.json";
import { useNavigate, useParams } from 'react-router-dom';

// useState()
// useRef()
// useParams()
// useNavigate()
// useEffect()
// useTranslation()
// useContext()

// HOOK - tegemist on Reacti erikoodiga, mille React on välja mõelnud
//    see ei eksisteeri JavaScriptis, 

function MuudaToode() {
  const { index } = useParams();
  const leitud = tootedFailist[index];
  const nimiRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    tootedFailist[index] = nimiRef.current.value;
    navigate("/halda"); // --> sest enne navigeerimist peavad mingid koodilõigud käima minema
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" defaultValue={leitud} /> <br /> 
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode