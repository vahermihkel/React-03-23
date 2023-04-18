import React from 'react'

function SingleProduct() {
  // HomePage.jsx pealt SingleProduct URL peale sattumine ja saatma element.id
  // App.js sees tee võimekus see vastu võtta

  // Siin failis useParams abil võta see ID url-st

  // Otsi üles õige toode
  // MITTE: productsFromFile[id]      productsFromFile[99412312]

  // ÕIGE: productsFromFile.find(e => e.id === Number(URLST_ID))

  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct