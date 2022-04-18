
import './App.css';
import Menu from './components/Navbar/Menu';
import CartWidget from './components/Cart/CartWidget';
import carito from './imagenes/carrito.png'
import logo from './imagenes/LogoL.svg';
import ItemListContainer from './components/Item/ItemListContainer';



function App() {
  return (
    <div className="App" >
      <header className="App-header">
             
          <img src={logo} className="App-logo" alt="logo" style={{width:"130px"}} />   
        
           <Menu/> 
           <CartWidget imagen={carito} />
       
      </header>
      <div className="App-items">
            <ItemListContainer/>
            
      </div> 
    </div>
    
      
     

  );
}

export default App;
