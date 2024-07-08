import React from 'react'
import { FaExpand } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Note = () => {
    const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic similique ad eveniet adipisci obcaecati! Dolores, velit fugit molestiae sapiente incidunt officia modi, illum accusantium quo voluptates ratione soluta esse deleniti.'
  return (
    <div className="card-compact bg-base-100 min-w-[300px] min-h-[250px] max-w-[350px] max-h-[300px] w-auto h-auto  shadow-xl">
      <div className="card-body flex items-center h-full">
        <h2 className="card-title">Study Javascript</h2>
        <p className='flex-1'>{text.slice(0,100)}</p>
        <div className="card-actions justify-end p-0 flex gap-10">
            <button className='hover:scale-110'><FiEdit size={20} color='yellow'/></button>
            <button className='hover:scale-110'><MdDeleteOutline size={20} color='red'/></button>
            <button className="hover:scale-110"><FaExpand size={20}/></button>
        </div>
      </div>
    </div>
  )
}

export default Note
