import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { store } from ".."
import {setLoading, setUser} from "../slices/authSlice"


export const initAuthListener = () => {
    store.dispatch(setLoading(true))

    onAuthStateChanged(auth, (user) => {
        store.dispatch(setUser(user))
    })
}
