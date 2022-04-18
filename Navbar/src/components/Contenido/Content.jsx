import React from 'react'

const Content = ({titulo,fotobook}) => {
  return (
    <div >
      <h1 className="font-weight-bold">{titulo}</h1>
      <img src={fotobook} alt="" style={{width:"85px"}}  />
      {/* <p >{texto}</p> */}
    </div>
  )
}

export default Content
