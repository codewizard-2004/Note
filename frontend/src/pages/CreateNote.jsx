import React, { useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import Home from './Home';
import { Link , useNavigate} from 'react-router-dom';
import useCreate from '../hooks/useCreate';

const CreateNote = ({title , note, id}) => {
    const navigate = useNavigate();
    const [Title ,SetTitle ] = useState(title)
    const [Note , setNote] = useState(note)

    const userId = JSON.parse(localStorage.getItem("note-user"))._id;

    const {loading , createNote} = useCreate();
    const handleSubmit = async(e) =>{
        e.preventDefault()
        await createNote({userId , Title , Note});
        navigate('/');

    }
  return (
    <>
    <div className='h-screen w-screen'><Home/></div>
    <div className='absolute top-16 left-0 p-0 h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 flex items-center justify-center' id='create-note-portal'>
        <div className='flex border-blue-500 flex-col h-auto w-[500px] bg-gray-700 rounded-md  p-2 gap-2 relative'>
            <div className='text-white flex justify-center'>
                <h1><b>CREATE NOTE</b></h1>
            </div>
                
            <form onSubmit={handleSubmit}>
                <div className='p-3'>
                    <input type="text" placeholder="Enter your Title" className="input input-bordered input-info w-full max-w-xs " value={!Title?'':Title}
                    onChange={(e)=>SetTitle(e.target.value)} />
                </div>
                <div className='p-3'>
                    <textarea className="textarea textarea-info textarea-lg w-full max-h-64" placeholder="Enter your note here" value={!Note?'':Note}
                    onChange={(e)=>setNote(e.target.value)} rows={10} ></textarea>
                </div>
                <div className='p-3'>
                    <button className="btn btn-block btn-primary">{loading?<div className='loading loading-spinner'></div>:<h2>Submit</h2>}</button>
                </div>
            </form>
            <Link to='/'>
                <button className='absolute top-1 right-1' ><IoCloseSharp color='white' size={35}/></button>
            </Link>
            
      
        </div>
      
    </div>
    </>
  )
}

export default CreateNote
