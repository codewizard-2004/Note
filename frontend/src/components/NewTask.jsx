import React from 'react'
import { LuPlusSquare } from "react-icons/lu";
import CreateNote from './CreateNote';

const NewTask = () => {
  const handleNewText = (e) => {
    <CreateNote/>
  }
  return (
    <button className='w-[60px] h-[60px] flex items-center justify-center  bg-black backdrop-filter backdrop:blur-lg bg-opacity-50  text-white px-4 py-2 rounded-lg hover:scale-110 cursor-pointer transition-all' onClick={console.log("test")}>
        <LuPlusSquare size={500}/>
      
    </button>
  )
}

export default NewTask
