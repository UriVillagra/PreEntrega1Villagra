import { Header } from './components/Header/Header'
import { ItemContainer } from './components/ItemContainer/ItemContainer'
import './App.css'
import PokeApi from './Ejemplos/PokeApi'
import PokeList from './Ejemplos/PokeList'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Inicio } from './components/inicio/Inicio'
import { ItemDetailContainer } from './components/ItemContainer/ItemDetailContainer'

function App() {

  

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={ <Inicio/> }/>
        <Route path="'*'" element={ <h2> pagina no existente </h2> }/>
        <Route path='/Productos' element={ <ItemContainer /> }/>
        <Route path='/Productos/:categoryId' element={ <ItemContainer /> }/>
        <Route path='/pokelist' element={ <PokeList /> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer />}/>
      </Routes>


      
      
    </BrowserRouter>


  )
}

export default App
