import React, { useState } from 'react'
import poedFailist from "../data/poed.json";
// .. <-- kausta võrra mine üles
// data kaustas, poed.json fail

function Poed() { // Reacti funktsionaalsus (pean importima)
  const [poed, uuendaPoed] = useState(poedFailist.slice());
  // const [poed, uuendaPoed] = useState([...poedFailist]);

  const muudaTagasi = () => {
    uuendaPoed(poedFailist.slice());
  }

  const sorteeriAZ = () => {
    //poed.sort(); // default, panebki A-Z
    poed.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaPoed(poed.slice());  // .slice() -- array-del vajalik, 
    // uuendaPoed([...poed]) <--- teine variant
    // kustutab mälukoha ehk pärinevuskoha, teeb koopia
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.nimi.localeCompare(a.nimi)); // ei ole default, pean täitma sulud
    // uuendaPoed(poed.slice());
    uuendaPoed([...poed]);
  }

  const sorteeriTahedKasv = () => {
    poed.sort((a,b) => a.nimi.length - b.nimi.length); 
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKah = () => {
    poed.sort((a,b) => b.nimi.length - a.nimi.length); 
    uuendaPoed(poed.slice());
  }

  const sorteeriKolmasTaht = () => {
    // 012345
    // Kristiine
    poed.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2])); 
    uuendaPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.endsWith("e"));
    uuendaPoed(vastus);
  }

  const filtreeri9Tahelised = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.length === 9);
    uuendaPoed(vastus);
  }

  const filtreeriVah7Tahte = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.length >= 7);
    uuendaPoed(vastus);
  }

  const filtreeriSisaldabIsLyhendit = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.includes("is"));
    uuendaPoed(vastus);
  }

  const filtreeriKolmasTahtI = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi[2] === "i");
    uuendaPoed(vastus);
  }

  const muudaSuurteks = () => {               // ... on kõik varasemad väärtused
    // const vastus = poed.map(yksPood => {return{ ...yksPood, "nimi": yksPood.nimi.toUpperCase() }});
    const vastus = poed.map(yksPood => {return{ "nimi": yksPood.nimi.toUpperCase(), "tel": yksPood.tel }});
    uuendaPoed(vastus);
  }

  const muudaVaikesteks = () => {
    const vastus = poed.map(yksPood => {return{ "nimi": yksPood.nimi.toLowerCase(), "tel": yksPood.tel }});
    uuendaPoed(vastus);
  }

  const muudaITahedOTahtedeks = () => {
    const vastus = poed.map(yksPood => {return{ "nimi": yksPood.nimi.replaceAll("i", "o"), "tel": yksPood.tel }});
    uuendaPoed(vastus);
  }

  const muudaKriipsudAlgusesse = () => {
    // {"nimi": "Ülemiste", "tel": "5412310"} => "--Ülemiste"
    // minu objekti array ---> tagasi string arrayks
    const vastus = poed.map(yksPood => {return{ "nimi": "--" + yksPood.nimi, "tel": yksPood.tel }});
    uuendaPoed(vastus);
  }

  const muudaTagurpidi = () => {
    const vastus = poed.map(yksPood => {return{ "nimi": yksPood.nimi.split("").reverse().join(""), "tel": yksPood.tel }});
    uuendaPoed(vastus);
  }

  const arvutaTahedKokku = () => {
    let summa = 0;
    // summa = summa + 8;
    // summa = summa + 6;
    // summa = summa + 13;
    // summa = summa + 9;
    poed.forEach(yksPood => summa = summa + yksPood.nimi.length);
    return summa;
  }

  // function sorteeriAZ() {}

  // .map() -> JS sissekirjutatud funktsionaalsus
  return (
    <div>
      <button onClick={muudaTagasi}>Tagasi originaali</button>
      <div>Poode: {poed.length} tk</div>
      <div>Kokku tähti poodidel: {arvutaTahedKokku()} tk</div>
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

      {poed.map(yksPood => <div key={yksPood.nimi}>{yksPood.nimi} {yksPood.tel}</div> )}
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