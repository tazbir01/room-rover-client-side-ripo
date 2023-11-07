import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

const auth = getAuth(app)

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            console.log('user in the state changed', user)
            setUser(user)
            setLoading(false)
        })
        return () => unsubscribe();
    })

    const loginWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logoutUser = () =>{
        setLoading(true)
        return signOut()
    }

    const userInfo = {
        user,
        loading,
        creatUser,
        loginUser,
        logoutUser,
        loginWithGoogle
    }

    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;