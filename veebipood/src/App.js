import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import Poed from './pages/Poed';
import HaldaTooted from './pages/HaldaTooted';
import MuudaToode from './pages/MuudaToode';
import Tooted from './pages/Tooted';
import YksikToode from './pages/YksikToode';
import { useState } from 'react';

// Kõik suure tähega rohelised tuleb importida
// Nad ei eksisteeri tavalises HTMLs
function App() {
  const [veebileheVarv, uuendaVeebileheVarv] = useState(localStorage.getItem("värv") || "hele-leht");
  const [url, uuendaUrl] = useState(window.location.href.split("localhost:3000")[1]);
  // 0,1     .split() teeb sõna tükkideks    http://localhost:3000/poed   
  // akna asukoha URL   

  const muudaVeebileheVarvTume = () => {
    uuendaVeebileheVarv("tume-leht");
    localStorage.setItem("värv", "tume-leht")
  }

  const muudaVeebileheVarvHele = () => {
    uuendaVeebileheVarv("hele-leht");
    localStorage.setItem("värv", "hele-leht")
  }

  return (
    <div className={veebileheVarv}>
      <Link to="/avaleht">
        <img className="pilt" src="https://nobecars.com/wp-content/uploads/2022/01/Untitled-2-5-1024x473.png" alt="" />
      </Link>

      {veebileheVarv === "hele-leht" && <button onClick={muudaVeebileheVarvTume}>Tume</button>}
      {veebileheVarv === "tume-leht" && <button onClick={muudaVeebileheVarvHele}>Hele</button>}

      <Link to="/ostukorv">
        <button className={ url === "/ostukorv" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/ostukorv")}>Ostukorv</button>      
      </Link>

      <Link to="/lisa-toode">
        <button className={ url === "/lisa-toode" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/lisa-toode")}>Lisa toode</button>      
      </Link>

      <Link to="/meist">
        <button className={ url === "/meist" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/meist")}>Meist</button>      
      </Link>

      <Link to="/seaded">
        <button className={ url === "/seaded" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/seaded")}>Seaded</button>      
      </Link>

      <Link to="/poed">
        <button className={ url === "/poed" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/poed")}>Poed</button>      
      </Link>

      <Link to="/halda">
        <button className={ url === "/halda" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/halda")}>Halda tooteid</button>      
      </Link>

      <Link to="/tooted">
        <button className={ url === "/tooted" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/tooted")}>Tooted</button>      
      </Link>

      <Routes>
        <Route path="" element={ <Navigate to="avaleht" /> } />
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="poed" element={ <Poed /> } />
        <Route path="halda" element={ <HaldaTooted /> } />
        <Route path="muuda/:index" element={ <MuudaToode /> } />
        <Route path="tooted" element={ <Tooted /> } />
        <Route path="toode/:jrkNr" element={ <YksikToode /> } />
      </Routes>

      {/* <div>FOOTER</div> */}

    </div>
  );
}

export default App;
