import {Routes, Route} from 'react-router-dom'

import Productos from './assets/pages/Productos'
import Inicio from './assets/pages/Inicio'
import Navbar from './assets/components/organisms/Navbar'
import Contactanos from './assets/pages/Contactanos'

function App() {

  return (
    <>
      <Navbar/>

        <Routes>

          <Route path="/" element={<Inicio/>}/>

          <Route path="/productos" element={<Productos/>}/>

          <Route path="/Contactanos" element={<Contactanos/>}/>

          <Route path="/Nosotros" element={<Contactanos/>}/>

        </Routes>
    </>
  )
}

export default App

