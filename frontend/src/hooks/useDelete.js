import { toast } from "react-toastify";
import 'react-toastify/ReactToastify.css'


const useDelete = () => {
    //CREATE A FUN TO CHECK LOADING STATE INITIALIZE IT TO FALSE

    const remove = async({userId , textId}) => {
        try {
            const res = await fetch("/api/content/delete",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({userId , textId})
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
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
        }
    }

    return {remove}

}

export default useDelete;