import React from 'react'
import CartWidget from '../Cart/CartWidget'
import carito from '../../imagenes/carrito.png'
import  {Link,NavLink} from "react-router-dom"

const Menu = () => {
  return (
    
    
    <div className="App-header">
          <ul className="nav">
            <li className="nav-item">
              {/* <a className="nav-link active" href="#">Inicio</a> */}
              <NavLink className='nav-link'to="/Beneficios">Inicio</NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Libros</a> */}
              <NavLink className='nav-link'to="/Contador">Libros</NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Stock</a> */}
              <NavLink className='nav-link' to="ItemListContainer/">Stock</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Contactanos</a>
            </li>
          
          <a href="">   <CartWidget imagen={carito} /></a>
          </ul>
          
       
    </div>
    
  )
}

export default Menu