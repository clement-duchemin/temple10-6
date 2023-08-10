import {createContext, useContext, useEffect, useState} from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {auth} from '../firebase';
import { getAnalytics, logEvent } from "firebase/analytics";

const UserContext = createContext()
const analytics = getAnalytics();


export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setUser(currentUser);
        // if(currentUser) {
        //     logEvent(analytics, 'set_user_id', { user_id: currentUser.uid });
        // }
    })
    return () => {
        unsubscribe();
    };
}, []);

useEffect(() => {
    if (user) {
        logEvent(analytics, 'login', {
            user_id: user.uid,
            timestamp: Date.now()
        });
    }
}, [user]);


    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn }}>
            {children}
        </UserContext.Provider>
    )
}


export const UserAuth = () => {
    return useContext(UserContext)
};