import React from 'react'
import Content from '../Contenido/Content'
import ItemList from './Item';
import { useState } from 'react';

// Abre Peticion

// const libros=[{id:1,nombre:"Alguien te espera", stock:4},{id:2,nombre:"Imaginieria", stock:8},
// {id:3,nombre:"Limites", stock:2}];

// const listita= new Promise((resolve,reject)=> {
  
//   setTimeout(() =>{
//     resolve(libros)
//    },2000 );
  
//  });
//  listita . then(
//    result =>{
     
//       console.log(result);
//        },
//    err=>{
//        console.log(err);
//        }
//        );

//Cierra Peticion


const ItemListContainer = () => {
  return (

<div class="container">
  <div class="row">
    <div class="col-sm">
        <Content
       
         titulo={'Beneficios de Leer'}
         texto={'Leer es como llevar nuestro cerebro a un gimnasio, aumenta la inteligencia, estimula la creatividad, atrasa la aparicion de enfermedades neurodegenerativas y demencia, genera empatia, quita el estres, ayuda al insomnio.'}
        />
    </div>
    
    
  </div>
  {/* <div class="row">
    <div class="col-sm">
    <h1>Stock Libros</h1>
             <ItemList book={libros}/>
    </div>    
  </div> */}
</div>
     
     
     
     


    
  )
}

export default ItemListContainer