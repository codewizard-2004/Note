import React, { useEffect, useState } from 'react'
import Note from './Note'
import CreateNote from '../pages/CreateNote'
import useContent from '../hooks/useContent'
import {toast} from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const Notes = () => {
  //const test = useGetContent() console.log("UserId:" , userId._id)
  const [messages, setMessages] = useState([]);

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("note-user"))._id;

        async function getUserData() {
            if (!userId) {
                throw new Error('User ID not found in localStorage');
            }

            const url = `/api/content/${userId}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Failed to fetch data from ${url}`);
            }

            return await response.json();
        }

        getUserData()
            .then(result => {
                setMessages(result); // Update state with fetched data
            })
            .catch(error => {
                console.error(error);
            });
    }, []); // Empty dependency array ensures this effect runs only once

    console.log(messages); // This will log the current state value of messages




  return (
    <div className='w-full h-[1.5vh] flex flex-wrap p-10 gap-5 overflow-y-visible'>
      {messages.map((message , index) => (
        <Note key={index} title={message.title} textarea={message.textarea} />
      ))}
      
    </div>
  )
}

export default Notes
