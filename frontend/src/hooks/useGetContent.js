// import { useEffect, useState } from "react";
// import useContent from "./useContent"
// import {toast} from 'react-toastify';
// import 'react-toastify/ReactToastify.css'
// import { AuthContext } from "../context/AuthContext";

// const useGetContent = () => {
//     const {messages, setMessages} = useContent();
//     // const [loading , setLoading] = useState(false);
    
//     useEffect( () => {
//         const fetchContents = async() => {
//             try {
//                 const res = await fetch('/api/content/'+ JSON.parse(localStorage.getItem("note-user"))._id)

//                 const data = await res.json();
//                 if (data.error) throw new Error(data.error)
//                 setMessages(data)
//                 console.log(data)

//             } catch (error) {
//                 toast.error(error.message, {
//                     position: "top-center",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "colored",
//                     })
//             }
//         }
//         if (AuthContext) fetchContents()
//     },[AuthContext , setMessages]) 
//     return messages

// }

// export default useGetContent