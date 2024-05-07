import React, { createContext, useState, useEffect } from 'react'
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firbase/firebase.config'



export  const AuthContext = createContext();
const auth = getAuth(app);
const gogleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)
 
     // Create an Account

     const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
     }
    // Sign Up with Gmail
     
    const signUpWithGmail = () => {
        return signInWithPopup(auth, gogleProvider)
    }

    // Login using email and password
    
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // const Logout

    const Logout = () => {
        signOut(auth)
    }

    // Update Profile

     const updateUserProfile = (name, photoURL) => {
        return updateProfile (auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
     }


     // check currently signed in user
     
    useEffect(() => {
       const unsubscribe = onAuthStateChanged (auth, (currentUser) => {
            if (currentUser) {
              setUser(currentUser)
              setLoading(false)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
          return () => {
            return unsubscribe
          }
    }, [])
    
    

    // Sign Up with facebook 

    const signUpWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const signUpWithGithub = () => {
      return signInWithPopup(auth, githubProvider)
    }
    const authInfo = {
     user,
     createUser,
     signUpWithGmail,
     signUpWithFacebook,
     signUpWithGithub,
     Login,
     Logout,
    updateUserProfile,
    }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider