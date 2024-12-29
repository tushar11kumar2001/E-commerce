import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const navigate = useNavigate();
    useEffect(()=>{
      if(!token){
          return navigate('/captain-login');
      }
        axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {            
            if (response.status === 200) {     
                localStorage.removeItem('token');
                navigate('/captain-login');
            }
        })
    },[token])
  return (
    <div>
      
    </div>
  )
}

export default CaptainLogout
