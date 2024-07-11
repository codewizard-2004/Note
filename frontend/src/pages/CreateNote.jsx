import React, { useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import Home from './Home';
import { Link } from 'react-router-dom';

const CreateNote = ({title , note, id}) => {
    const [Title ,SetTitle ] = useState(title)
    const [Note , setNote] = useState(note)
    const handleClose = (e) => {
        console.log(5)
        
    }
  return (
    <>
    <div className='h-screen w-screen'><Home/></div>
    <div className='absolute top-16 left-0 p-0 h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 flex items-center justify-center' id='create-note-portal'>
        <div className='flex border-blue-500 flex-col h-auto w-[500px] bg-gray-700 rounded-md  p-2 gap-2 relative'>
            <div className='text-white flex justify-center'>
                <h1><b>CREATE NOTE</b></h1>
            </div>
                
            <form>
                <div className='p-3'>
                    <input type="text" placeholder="Enter your Title" className="input input-bordered input-info w-full max-w-xs " value={!Title?'':Title}
                    onChange={(e)=>SetTitle(e.target.value)} />
                </div>
                <div className='p-3'>
                    <textarea className="textarea textarea-info textarea-lg w-full max-h-64" placeholder="Enter your note here" value={!Note?'':Note}
                    onChange={(e)=>setNote(e.target.value)} rows={10} ></textarea>
                </div>
                <div className='p-3'>
                    <button className="btn btn-block btn-primary">Submit</button>
                </div>
            </form>
            <Link to='/'>
                <button className='absolute top-1 right-1' onClick={handleClose}><IoCloseSharp color='white' size={35}/></button>
            </Link>
            
      
        </div>
      
    </div>
    </>
  )
}

export default CreateNote
