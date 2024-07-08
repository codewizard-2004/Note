import React from 'react'
import Navigation from '../components/Navigation'
import useBackground from '../hooks/useBackground'
import NewTask from '../components/NewTask'
import Notes from '../components/Notes'
import CreateNote from '../components/CreateNote'


const Home = () => {
    const {isDark , setIsDark} = useBackground()
  return (
    <div className={`p-0 mt-0 h-screen w-screen flex flex-col ${!isDark?'bg-slate-400':''} overflow-auto`}>
        <div className='fixed w-screen'>
           <Navigation/> 
        </div>
        <div className="fixed bottom-10 right-10 w-[70px] h-[70px]">
            <NewTask/>
        </div>
        
        <div className='pt-14'>
              <Notes/>
              
        </div>
        <CreateNote/>
        


    </div>
  )
}

export default Home