import { useState } from 'react';
import Map from '../../components/Map';
import Button from '@mui/material/Button';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (<div>
    <Button onClick={() => setCoordinates({lngLat: [58.9525, 25.6233], zoom: 7})}>Kõik poed</Button>

    <Button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4266, 24.7245], zoom: 13})}>Kristiine</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4216, 24.7919], zoom: 13})}>Ülemiste</Button>
    
    <Button onClick={() => setCoordinates({lngLat: [58.3779, 26.7308], zoom: 13})}>Tasku</Button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;