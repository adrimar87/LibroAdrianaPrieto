import React from 'react'
import Content from '../Contenido/Content'
//import fotobook  from '../../imagenes/imaing.jpg'

const ItemListContainer = () => {
  return (

<div class="container">
  <div class="row">
    <div class="col-sm">
        <Content
        titulo={'Alguien te espera'}
        fotobook={"https://http2.mlstatic.com/D_NQ_NP_900880-MLA44582860601_012021-O.webp"}
        //  titulo={'Beneficios de Leer'}
        //  texto={'Leer es como llevar nuestro cerebro a un gimnasio, aumenta la inteligencia, estimula la creatividad, atrasa la aparicion de enfermedades neurodegenerativas y demencia, genera empatia, quita el estres, ayuda al insomnio.'}
        />
    </div>
    <div class="col-sm">
        <Content
        titulo={'Imaginieria'}
        fotobook={"https://http2.mlstatic.com/D_NQ_NP_822774-MLA48578703026_122021-O.webp"}
        />
    </div>
    <div class="col-sm">
        <Content
        titulo={'Limites'}
        fotobook={"https://http2.mlstatic.com/D_NQ_NP_886602-MLM47121031247_082021-O.webp"}
        
        />
    </div>
  </div>
</div>
     
     
     
     


    
  )
}

export default ItemListContainer