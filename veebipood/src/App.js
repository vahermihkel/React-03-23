import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';

function App() {
  return (
    <div className="App">
      <Link to="/avaleht">
        <img className="pilt" src="https://nobecars.com/wp-content/uploads/2022/01/Untitled-2-5-1024x473.png" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>      
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>      
      </Link>

      <Routes>
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
      </Routes>

      {/* <div>FOOTER</div> */}

    </div>
  );
}

export default App;
