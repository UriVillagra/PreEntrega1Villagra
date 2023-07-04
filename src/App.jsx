import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { ItemContainer } from './components/ItemContainer'

function App() {

  

  return (
    <>
      <Navbar />
      <ItemContainer />
    </>
  )
}

export default App
