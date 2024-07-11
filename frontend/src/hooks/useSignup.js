import { useState } from "react"
import { useAuthContext}  from "../context/AuthContext";
import { toast } from "react-toastify";
import 'react-toastify/ReactToastify.css'

const useSignup = () => {
    //CREATE A FUN TO CHECK LOADING STATE INITIALIZE IT TO FALSE
    const [loading  , setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async({username , password , confirmPassword}) => {
        const success = handleInputErrors({username , password , confirmPassword})
        console.log({username , password , confirmPassword})
        if (!success) return;
        setLoading(true);

        try {
            const res = await fetch("/api/auth/signup" , {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({username , password , confirmPassword})
            })

            const data = await res.json();
            if (data.error){
                throw new Error(data.error)
            }
            //If everything is successful add the cookie to local storage
            localStorage.setItem("note-user" , JSON.stringify(data))
            setAuthUser(data)
            console.log(data)
            
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
        }finally{
            setLoading(false)
        }
    }

    return {loading , signup}
}

export default useSignup

function handleInputErrors({username , password ,confirmPassword}) {
    if (!username || !password || !confirmPassword) {
        toast.error('Fill all inputs!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
        return false
    }
    if (password !== confirmPassword){
        toast.error('Passwords do not match', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
        return false
    }
    if (password.length < 6){
        toast.error('Password must be atleast 6 characters!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
        return false
    }
    return true
}