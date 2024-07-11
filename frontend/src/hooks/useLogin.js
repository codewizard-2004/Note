import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import {toast} from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const useLogin = () => {
    const [loading , setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async(username , password) => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login",{
                method:"POST" ,
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({username , password})
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.setItem("note-user" , JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                })
        }finally {
            setLoading(false);
        }
    }

    return {loading , login}
}

export default useLogin