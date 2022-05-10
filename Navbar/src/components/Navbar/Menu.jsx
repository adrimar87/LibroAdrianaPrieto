import React from 'react'
import CartWidget from '../Cart/CartWidget'
import carito from '../../imagenes/carrito.png'

const Menu = () => {
  return (
    
    
    <div>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Libros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Comentarios</a>
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