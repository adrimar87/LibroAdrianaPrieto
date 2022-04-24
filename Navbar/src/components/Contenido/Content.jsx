import React from 'react'

const Content = ({titulo,fotobook,texto}) => {
  return (
    <div >
      <h1 className="font-weight-bold">{titulo}</h1>
      <p >{texto}</p> 
    </div>
  )
}

export default Content
