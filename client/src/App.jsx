import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import Home from '../src/pages/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='home' element={<Home />} />
    </Routes>
  )
}

export default App
