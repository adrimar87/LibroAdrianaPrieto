
import './App.css';
import Menu from './components/Navbar/Menu';
//import CartWidget from './components/Cart/CartWidget';
//import carito from './imagenes/carrito.png'
import logo from './imagenes/LogoL.svg';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemList from './components/Item/ItemList';
import Contador from './components/ItemCount/Contador';
import { useEffect, useState } from 'react';



function App() {
 
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
    <div className="App" >
      <header className="App-header">
             
          <img src={logo} className="App-logo" alt="logo" style={{width:"130px"}} />   
        
           <Menu/> 
           {/* <CartWidget imagen={carito} /> */}
       
      </header>
      <div className="App-items">
            <ItemListContainer/>
            <Contador/>
            
      </div> 
      <div className='stock'>
            <h1>Stock Libros</h1>
            <ItemList book={book}/>
      
      </div>  
    </div>
    
      
     

  );
}

export default App;
