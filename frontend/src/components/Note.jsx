import React from 'react'
import { FaExpand } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import useDelete from '../hooks/useDelete';
import Notes from './Notes';

const Note = ({textId ,title , textarea}) => {
  const {remove} = useDelete();
  const handleDelete = async(e) => {
    const userId = JSON.parse(localStorage.getItem("note-user"))._id;
    remove({userId , textId})
    window.location.reload()
  }

  return (
    <div className="card-compact bg-base-100 min-w-[300px] min-h-[250px] max-w-[350px] max-h-[300px] w-auto h-auto  shadow-xl">
      <div className="card-body flex items-center h-full">
        <h2 className="card-title">{title}</h2>
        <p className='flex-1'>{textarea}</p>
        <div className="card-actions justify-end p-0 flex gap-10">
            <button className='hover:scale-110'><FiEdit size={20} color='yellow'/></button>
            <button className='hover:scale-110' onClick={handleDelete}><MdDeleteOutline size={20} color='red'/></button>
            <button className="hover:scale-110"><FaExpand size={20}/></button>
        </div>
      </div>
    </div>
  )
}

export default Note
