import {create} from 'zustand';


const useLogUser = create((set)=> ({
    currentUser: null,
    setCurrentUser: (currentUser)=> set({currentUser}),
    /*contents: [],
    setContents: (contents)=> set({contents})*/
}))

export default useLogUser