import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const { user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <p className='text-lg py-32'>Loading....</p>
            
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;