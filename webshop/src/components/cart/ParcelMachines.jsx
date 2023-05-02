import React from 'react'
import { useEffect, useState } from 'react'

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelMachines(json));
  }, []);

  return (
    <select>
      {parcelMachines
        // .filter(element => element.NAME !== "1. eelistus Omnivas")
        // .filter(element => element.A0_NAME === "EE")
        .filter(element => element.A0_NAME === "EE" && element.NAME !== "1. eelistus Omnivas")
        .map(element => <option key={element.NAME}>{element.NAME}</option>)}
    </select>
  )
}

export default ParcelMachines