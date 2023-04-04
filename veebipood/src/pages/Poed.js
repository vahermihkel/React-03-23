import React, { useState } from 'react'
import poedFailist from "../data/poed.json";
// .. <-- kausta võrra mine üles
// data kaustas, poed.json fail

function Poed() { // Reacti funktsionaalsus (pean importima)
  const [poed, uuendaPoed] = useState(poedFailist);

  const muudaTagasi = () => {
    uuendaPoed(poedFailist);
  }

  const sorteeriAZ = () => {
    //poed.sort(); // default, panebki A-Z
    poed.sort((a,b) => a.localeCompare(b));
    uuendaPoed(poed.slice());  // .slice() -- array-del vajalik, 
    // uuendaPoed([...poed]) <--- teine variant
    // kustutab mälukoha ehk pärinevuskoha, teeb koopia
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.localeCompare(a)); // ei ole default, pean täitma sulud
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKasv = () => {
    poed.sort((a,b) => a.length - b.length); 
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKah = () => {
    poed.sort((a,b) => b.length - a.length); 
    uuendaPoed(poed.slice());
  }

  const sorteeriKolmasTaht = () => {
    // 012345
    // Kristiine
    poed.sort((a,b) => a[2].localeCompare(b[2])); 
    uuendaPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.endsWith("e"));
    uuendaPoed(vastus);
  }

  const filtreeri9Tahelised = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.length === 9);
    uuendaPoed(vastus);
  }

  const filtreeriVah7Tahte = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.length >= 7);
    uuendaPoed(vastus);
  }

  const filtreeriSisaldabIsLyhendit = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.includes("is"));
    uuendaPoed(vastus);
  }

  const filtreeriKolmasTahtI = () => {
    const vastus = poedFailist.filter(yksPood => yksPood[2] === "i");
    uuendaPoed(vastus);
  }

  const muudaSuurteks = () => {
    const vastus = poed.map(yksPood => yksPood.toUpperCase());
    uuendaPoed(vastus);
  }

  const muudaVaikesteks = () => {
    const vastus = poed.map(yksPood => yksPood.toLowerCase());
    uuendaPoed(vastus);
  }

  const muudaITahedOTahtedeks = () => {
    const vastus = poed.map(yksPood => yksPood.replaceAll("i", "o"));
    uuendaPoed(vastus);
  }

  const muudaKriipsudAlgusesse = () => {
    const vastus = poed.map(yksPood => "--" + yksPood);
    uuendaPoed(vastus);
  }

  const muudaTagurpidi = () => {
    const vastus = poed.map(yksPood => yksPood.split("").reverse().join(""));
    uuendaPoed(vastus);
  }

  // function sorteeriAZ() {}

  // .map() -> JS sissekirjutatud funktsionaalsus
  return (
    <div>
      <button onClick={muudaTagasi}>Tagasi originaali</button>
      <div>Poode: {poed.length} tk</div>
      {/* <br /><br /> */}
      {/* <button onClick={() => sorteeriAZ()}>Sorteeri A-Z</button> */}
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähed kasv</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähed kah</button>
      <button onClick={sorteeriKolmasTaht}>Sorteeri kolmanda tähe järgi</button>
      <br /><br />
      <button onClick={filtreeriEgaLoppevad}>Filtreeri 'e'ga lõppevad</button>
      <button onClick={filtreeri9Tahelised}>Filtreeri 9 tähelised</button>
      <button onClick={filtreeriVah7Tahte}>Filtreeri rohkem või 7 tähte</button>
      <button onClick={filtreeriSisaldabIsLyhendit}>Filtreeri sisaldab is lühendit</button>
      <button onClick={filtreeriKolmasTahtI}>Filtreeri kolmas täht i</button>
      <br /><br />
      <button onClick={muudaSuurteks}>Muuda kõik suurteks tähtedeks</button>
      <button onClick={muudaVaikesteks}>Muuda kõik väikesteks tähtedeks</button>
      <button onClick={muudaITahedOTahtedeks}>Muuda kõik i tähed o tähtedeks</button>
      <button onClick={muudaKriipsudAlgusesse}>Muuda kõikidele kriipsud ette</button>
      <button onClick={muudaTagurpidi}>Muuda kõik tagurpidi</button>
      <br /><br />

      {poed.map(yksPood => <div key={yksPood}>{yksPood}</div> )}
      {/* <div>----------</div>
      <div>Ülemiste</div>
      <div>Viimsi</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div> */}
    </div>
  )
}

export default Poed