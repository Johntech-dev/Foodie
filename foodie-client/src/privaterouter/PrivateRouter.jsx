import React, { useContext } from 'react'
import AuthContext from '../contexts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import Loadingspinner from '../components/Loadingspinner';

const PrivateRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();


    if(loading) {
        return (
            <Loadingspinner />
        )
    }

    if (user) {
        return children;
    }
  return (
    <Navigate to="/Signup"  state={{from: location}} replace></Navigate>
  )
}

export default PrivateRouter