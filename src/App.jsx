import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Component/Nav'
import Home from './Page/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>

    </Routes>
    </>
  )
}

export default App
