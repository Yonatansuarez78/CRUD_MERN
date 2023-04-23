import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Usuarios from './components/Usuarios';
import Aprendiz from './components/aprendiz' 

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Usuarios></Usuarios>}></Route>
        <Route path='/aprendiz' element={<Aprendiz></Aprendiz>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
