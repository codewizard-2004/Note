import React, { useState } from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const Signup = () => {
    const [passInfo , setpassInfo] = useState("minimum 3 characters")
    const [password , setPassword] = useState('')
    const [passInfoColor , setpassInfoColor] = useState('text-red-600')

    const handlePassword = (e)=> {
        setPassword(e.target.value)
        if (password.length<3) {
            setpassInfo("minimum 5 characters")
            setpassInfoColor('text-red-600')
        }
        if (password.length >3) {
            setpassInfo("weak")
            setpassInfoColor('text-red-600')
        }
        if (password.length > 6){
            setpassInfo("good")
            setpassInfoColor('text-yellow-600')

        }
        if (password.length >= 9){ 
            setpassInfo("strong")
            setpassInfoColor('text-green-600')
        }

  

    }
  return (
    <div className='flex flex-col items-center w-[500px] overflow-hidden'>
        <div className='h-full w-full bg-green-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-white mt-1'> Create Account <span className='text-blue-500'>NOTE++</span></h1>
        <form className='p-4' onSubmit={handleSubmit}>
            <div>
            <span className=''>Create your Username</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
            </label>

            </div>

            <div className='pt-3'>
            <span >Create Your Password</span>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd" />
                  </svg>
                  <input type="password" className="grow" placeholder='password' value={password} onChange={handlePassword} />
                </label>
                <span className={passInfoColor}>{passInfo}</span>
                

            </div>

            <div className='pt-3'>
            <span >ReEnter your Password</span>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd" />
                  </svg>
                  <input type="password" className="grow" placeholder='confirm password'/>
                </label>
            

            </div>
            <a href="#" className='text hover:text-blue-300 p-2'><span><u>Already have an account? Login</u></span></a>
            <div className='p-2'>
                <button type='submit' className="btn btn-active btn-sm btn-wide btn-primary">Create Account</button>
            </div>
            

        </form>
        </div>
    </div>
  )
}

const handleSubmit = (e)=> {
    toast.info("By creating an account you agree to our terms and conditions", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
    }

export default Signup