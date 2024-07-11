import React from 'react'
import Note from './Note'
import CreateNote from '../pages/CreateNote'

const Notes = () => {
  return (
    <div className='w-full h-[1.5vh] flex flex-wrap p-10 gap-5 overflow-y-visible'>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
      
    </div>
  )
}

export default Notes
