// rfce
import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(6);
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");
  const [laigitud, uuendaLaigitud] = useState(false); // JavaScripti sissekirjutatud - jutumärke ei kasuta
                                          //  true
  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Kogus nullitud!")
  }

  function vahenda() { // <--- funktsioonil on nimi, sulud lõpus ja ta algab loogelisest sulust
    uuendaKogus(kogus - 1);
    uuendaSonum("Kogus vähendatud!")
  } // funktsioon lõppeb loogelise suluga

  function suurenda() { // funktsioonid on alati sama kujuga, lihtsalt nimi võib olla teine
    uuendaKogus(kogus + 1);
    uuendaSonum("Kogus suurendatud!")
  }

  return (
    <div>
      {/* HÄKK: kui ma tahan näidata booleani (true/false) välja HTMLs, pean talle liitma mingi numbri */}
      {/* <div>{laigitud + 0}</div> */}
      { laigitud === true && <img src="/laigitud.svg" alt="" />}
      { laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      {/* <button onClick={() => uuendaLaigitud(true)}>Muuda like peale</button>
      <button onClick={() => uuendaLaigitud(false)}>Muuda like maha</button> */}
          {/* hüüumärk kehti ainult kahendväärtustele ---> keerab vastupidiseks */}
      <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda like</button>
      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Nulli tagasi</button>}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      {/*           if (kogus >= 10) {    } else {     } */}
      <span className={kogus >= 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht


// rafce
// import React from 'react'

// const Avaleht = () => {
//   return (
//     <div>Avaleht</div>
//   )
// }

// export default Avaleht

// rcc
// import React, { Component } from 'react'

// export default class Avaleht extends Component {
//   render() {
//     return (
//       <div>Avaleht</div>
//     )
//   }
// }


// 
// import React from 'react'

// export default function Avaleht() {
//   return (
//     <div>Avaleht</div>
//   )
// }


// rfcp
// import React from 'react'
// import PropTypes from 'prop-types'

// function Avaleht(props) {
//   return (
//     <div>Avaleht</div>
//   )
// }

// Avaleht.propTypes = {}

// export default Avaleht


// rafc
// import React from 'react'

// export const Avaleht = () => {
//   return (
//     <div>Avaleht</div>
//   )
// }
