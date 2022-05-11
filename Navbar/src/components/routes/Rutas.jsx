import { BrowserRouter,Routes,Route} from "react-router-dom"

import Error from "../Views/Error"
import Contador from "../ItemCount/Contador"
import Beneficios from "../Contenido/Beneficios"
import ItemListContainer from "../Item/ItemListContainer"
import Layout from "../Views/Layout"



const Rutas = () => {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Layout/>}>
                  
                  <Route path="/Beneficios" element={<Beneficios/>}/>
                  <Route path="/Contador" element={<Contador/>}/>
                  <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rutas