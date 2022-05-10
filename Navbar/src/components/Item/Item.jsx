import React from 'react'

export const Item = ({nombre,stock}) => {
    
  return (
  
    <div>
        <h1>{nombre}: {stock}</h1> 
    </div>
  )
}

export default Item