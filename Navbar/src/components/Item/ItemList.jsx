import React, { Fragment } from 'react'
import Item from '../Item/Item';
const itemList = ({book}) => {
    
  return (
    <>
           {book.length > 0 ? 
            (book.map((book, index)=>
              (  
                <>
                    {/* <h1 key={index}>{book.nombre}: {book.stock}</h1>  */}
                   <h1> <Item 
                                   key={book.index}
                                   nombre={book.nombre}
                                    stock={book.stock}/></h1>
                </>  
               )
              ))
              :
              (  <h1>Loading  disponibilidad....</h1>   )
            } 

    </>
            
         );
};

export default itemList