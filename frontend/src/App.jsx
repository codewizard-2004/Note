import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {ToastContainer , toast} from 'react-toastify'
import Home from './pages/Home'
import {Navigate , Route ,Routes} from 'react-router-dom'
import CreateNote from './pages/CreateNote'
import { useAuthContext } from './context/AuthContext'

function App() {

  const {authUser} = useAuthContext();

  return (
  
      <div className='p-0 mt-0 h-screen flex items-center justify-center overflow-hidden'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={authUser?<Navigate to='/'/>:<Signup/>}/>
          <Route path='/create' element={<CreateNote/>}/>
        </Routes>
        <ToastContainer/>
      </div>
      
 
  )
}

export default App
