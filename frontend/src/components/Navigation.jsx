import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import Theme from './Theme';
import useLogout from '../hooks/useLogout';


const Navigation = () => {

  const {loading , logout} = useLogout()

    
  return (
    <div className="navbar bg-black">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl pl-5 text-white">NOTE++</a>
  </div>
  <div className="flex-none gap-8">
    <div>
        <Theme/>
    </div>
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto text-white" />
    </div>
    <div className='pr-5'>
      {!loading?(
        <IoIosLogOut size={30} color='white' onClick={logout}/>):(
          <span className='loading loading-spinner'></span>
        )
      }
    </div>
  </div>
</div>
  )
}

export default Navigation
