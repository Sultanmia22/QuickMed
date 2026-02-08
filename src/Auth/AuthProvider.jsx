import React from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebase.config'

const AuthProvider = ({children}) => {

    // create user  
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        createUser
    }

  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider