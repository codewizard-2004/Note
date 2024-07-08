import React, { useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";

const CreateNote = () => {
    const handleClose = (e) => {
        const ele = document.querySelector("#create-note-portal");
        console.log(ele)
        ele.style.display = "hidden";
        
    }
  return (
    <div className='absolute top-16 left-0 p-0 h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 flex items-center justify-center' id='create-note-portal'>
        <div className='flex border-blue-500 flex-col h-auto w-[500px] bg-gray-700 rounded-md  p-2 gap-2 relative'>
            <div className='text-white flex justify-center'>
                <h1><b>CREATE NOTE</b></h1>
            </div>
                
            <form>
                <div className='p-3'>
                    <input type="text" placeholder="Enter your Title" className="input input-bordered input-info w-full max-w-xs " />
                </div>
                <div className='p-3'>
                    <textarea className="textarea textarea-info textarea-lg w-full" placeholder="Enter your note here"></textarea>
                </div>
                <div className='p-3'>
                    <button className="btn btn-block btn-primary">Submit</button>
                </div>
            </form>
            <button className='absolute top-1 right-1' onClick={handleClose}><IoCloseSharp color='white' size={35}/></button>
      
        </div>
      
    </div>
  )
}

export default CreateNote
