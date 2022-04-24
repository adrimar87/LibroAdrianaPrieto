import React from 'react'
import CartWidget from '../Cart/CartWidget'
import carito from '../../imagenes/carrito.png'

const Menu = () => {
  return (
    
    
    <div>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Libros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Comentarios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Contactanos</a>
            </li>
          
          <a href="">   <CartWidget imagen={carito} /></a>
          </ul>
          
       
    </div>
    
  )
}

export default Menu