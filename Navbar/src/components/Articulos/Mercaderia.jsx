import React from 'react'

const Mercaderia = ({titulo,fotobook}) => {
  return (
    <div>
        <h1 className="font-weight-bold">{titulo}</h1>
        <img src={fotobook} alt="" style={{width:"85px", height:"120px"}}  />
    </div>
  )
}

export default Mercaderia