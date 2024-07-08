import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {ToastContainer , toast} from 'react-toastify'
import Home from './pages/Home'

function App() {


  return (
    <>
    <div className='p-0 mt-0 h-screen flex items-center justify-center overflow-hidden'>
      <Home/>

    </div>
    <ToastContainer/>
    </>
  )
}

export default App
