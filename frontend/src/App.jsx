import React from 'react'
import Homepage from './pages/Homepage'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import { Toaster } from 'react-hot-toast'
const App = () => {
  
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/logout' element={<Homepage/>}></Route>
    </Routes>
    </>
  )
}

export default App
