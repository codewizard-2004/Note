import { useState } from "react"
import { toast } from "react-toastify";
import 'react-toastify/ReactToastify.css'

const useCreate = ()=> {
    const [loading , setLoading] = useState(false)

    const createNote = async({userId , Title , Note}) => {
        console.log({userId , Title , Note})
        const success = handleInputErrors({Title , Note});
        if (!success) return;
        setLoading(true);

        try {
            const res = await fetch("/api/content/create", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({userId: userId ,title: Title ,textarea: Note})
            })

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
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
    return {loading , createNote}
}

export default useCreate

function handleInputErrors({Title ,Note}) {
    if (!Title || !Note) {
        toast.error("Fill all inputs", {
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
    if (Title.length <4) {
        toast.error("Title must contain atleast 4 characters", {
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