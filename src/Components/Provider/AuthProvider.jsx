
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // loader
    const [loading, setLoading] = useState(true)

    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // OnAuthStateChange 
   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('From OnAuthState', currentUser);
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        unSubscribe()
    }
   },[])

    // login user 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out user 
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }



    const userInfo = {user, createUser, loginUser, logOutUser, loading}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes = {
    
};

export default AuthProvider;