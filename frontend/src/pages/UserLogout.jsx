import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const UserLogout = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const navigate = useNavigate();
   
    useEffect(() => {
        if(!token){
            return navigate('/login');
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {            
            if (response.status === 200) {     
                localStorage.removeItem('token');
                navigate('/login');
            }
        })
    }, [token])
   


    return (
        <div>
            logout
        </div>
    )
}

export default UserLogout
