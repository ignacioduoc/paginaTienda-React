import {Routes, Route} from 'react-router-dom'

import Productos from './assets/pages/Productos'
import Inicio from './assets/pages/Inicio'
import Navbar from './assets/components/organisms/Navbar'
import Contactanos from './assets/pages/Contactanos'
//import DetalleProducto from './assets/pages/DetalleProducto'
import Nosotros from './assets/pages/Nosotros'
import Login from './assets/pages/Login'
import ListadoContactos from './assets/pages/ListadoContacos'

function App() {

  return (
    <>
      <Navbar/>

        <Routes>

          <Route path="/" element={<Inicio/>}/>

          <Route path="/productos" element={<Productos/>}/>

          <Route path="/Contactanos" element={<Contactanos/>}/>

          <Route path="/Nosotros" element={<Nosotros/>}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="/ListadoContacto" element={<ListadoContactos/>}/>

        </Routes>
    </>
  )
}

export default App

