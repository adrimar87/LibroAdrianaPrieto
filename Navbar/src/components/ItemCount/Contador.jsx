import React, {useState} from 'react'
import Mercaderia from '../Articulos/Mercaderia'

const Contador = () => {

  const [contador,setContador] = useState(1)
  const [contador1,setContador1] = useState(1)
  const [contador2,setContador2] = useState(1)

  //Logica contadores
  function resta(params){
      if(contador>1){
        setContador(contador-1)
      }
  }
  function resta1(params){
    if(contador1>1){
      setContador1(contador1-1)
    }
  }
  function resta2(params){
        if(contador2>1){
        setContador2(contador2-1)
        }
    }
    function sumar(params){
        if(contador<4){
          setContador(contador+1)
        }
    }
    function sumar1(params){
        if(contador1<8){
          setContador1(contador1+1)
        }
    }
    function sumar2(params){
        if(contador2<2){
          setContador2(contador2+1)
        }
    }
    //Fin logica contadores
  return (
    
   <div > 
        
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <Mercaderia
                    titulo={'Alguien te espera'}
                    fotobook={"https://http2.mlstatic.com/D_NQ_NP_900880-MLA44582860601_012021-O.webp"}
                    />
                    <div className='conta'>
                        <button onClick={resta} type="button" class="btn btn-outline-info  btn-lg font-weight-bold">-</button>
                        <h1>{contador}</h1>
                        <button onClick={sumar}type="button" class="btn btn-outline-info btn-lg font-weight-bold">+</button>
                    </div>
                   
                </div>
                <div class="col-sm">
                    <Mercaderia
                    titulo={'Imaginieria'}
                    fotobook={"https://http2.mlstatic.com/D_NQ_NP_822774-MLA48578703026_122021-O.webp"}
                    />
                      <div className='conta'>
                      <button onClick={resta1} type="button" class="btn btn-outline-info  btn-lg font-weight-bold">-</button>
                        <h1>{contador1}</h1>
                        <button onClick={sumar1}type="button" class="btn btn-outline-info btn-lg font-weight-bold">+</button>
                    </div>
                </div>
                <div class="col-sm">
                    <Mercaderia
                    titulo={'Limites'}
                    fotobook={"https://http2.mlstatic.com/D_NQ_NP_886602-MLM47121031247_082021-O.webp"}
                    /> 
                      <div className='conta'>
                      <button onClick={resta2} type="button" class="btn btn-outline-info  btn-lg font-weight-bold">-</button>
                        <h1>{contador2}</h1>
                        <button onClick={sumar2}type="button" class="btn btn-outline-info btn-lg font-weight-bold">+</button>
                     </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Contador