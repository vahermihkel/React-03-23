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
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    const uuendatudToode = {
      "nimi": nimiRef.current.value,
      "hind": Number(hindRef.current.value),
      "pilt": piltRef.current.value,
      "aktiivne": aktiivneRef.current.checked
    }
    tootedFailist[index] = uuendatudToode;
    navigate("/halda"); // --> sest enne navigeerimist peavad mingid koodilõigud käima minema
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" defaultValue={leitud.nimi} /> <br /> 
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="number" defaultValue={leitud.hind} /> <br /> 
      <label>Toote pilt</label> <br />
      <input ref={piltRef} type="text" defaultValue={leitud.pilt} /> <br /> 
      <label>Toote aktiivne</label> <br />
      <input ref={aktiivneRef} type="checkbox" defaultChecked={leitud.aktiivne} /> <br /> 
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode