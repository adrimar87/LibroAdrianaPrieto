import React,{useEffect,useState} from 'react'
import ItemList from '../Item/ItemList';
import Item from '../Item/Item';

const ItemListContainer = () => {
  //empiezan los promise
   const [book,setBooks]=useState([])
   const libros=[{id:1,nombre:"Alguien te espera", stock:4},{id:2,nombre:"Imaginieria", stock:8},
   {id:3,nombre:"Limites", stock:2}];

   useEffect(() =>{

    const lista= new Promise((resolve,reject)=> {
      setTimeout(() =>{
        resolve(libros)
       },2000 );
      
     });
     lista
     .then ((res) => {
                      setBooks(res);
                      },err => console.log("error",err)
           )
    .then(()=>console.log(book))
     .catch((err)=>console.log(book));

     return()=>{}

  },[]
  ) 
   //termina promise 
  return (

    <div className="container">
    
      <div className="row"> 
        <div className="col-sm">
           
        </div>
       
        
      </div>
      <div className="row">
        <div className="col-sm">
        <h1>Stock Libros</h1>
               
        <ItemList book={book}/>
       

                
        </div>    
      </div>
    </div>
   )
}

export default ItemListContainer;