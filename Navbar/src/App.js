
import './App.css';
import Menu from './components/Navbar/Menu';
//import CartWidget from './components/Cart/CartWidget';
//import carito from './imagenes/carrito.png'
import logo from './imagenes/LogoL.svg';
import ItemListContainer from './components/Item/ItemListContainer';
import Contador from './components/ItemCount/Contador';

import Content from './components/Contenido/Content'


function App() {
  return (
    <div className="App" >
      <header className="App-header">
             
          <img src={logo} className="App-logo" alt="logo" style={{width:"130px"}} />   
        
           <Menu/> 
           {/* <CartWidget imagen={carito} /> */}
       
      </header>
      <div className="App-items">
        <strong>
            <Content
            
            titulo={'Beneficios de Leer'}
            texto={'Leer es como llevar nuestro cerebro a un gimnasio, aumenta la inteligencia, estimula la creatividad, atrasa la aparicion de enfermedades neurodegenerativas y demencia, genera empatia, quita el estres, ayuda al insomnio.'}
            />
        </strong>
            <Contador/>
                              
      </div> 
      <div className='stock'>
          <ItemListContainer/>  
      
      </div>  
    </div>
    
      
     

  );
}

export default App;
