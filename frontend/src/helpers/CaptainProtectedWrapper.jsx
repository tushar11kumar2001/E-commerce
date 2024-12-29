import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/CaptainContext";


const CaptainProtectedWraper = ({children}) => {
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('token'));
    const [isLoading, setIsLoading] = useState(true);
    const { setCaptainData } = useContext(CaptainContext);
    useEffect(()=>{
      if(!token){
        return  navigate('/captain-login');
    } 
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    }).then((response) => {
      if(response.status === 200){
        setCaptainData(response.data.captain);
        setIsLoading(false);
      }
     
    }).catch(err=>{
        console.log(err);
        navigate('/captain-login');
      
    })

    },[token])
    
    if(isLoading){
      return <div>Loading...</div>
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default CaptainProtectedWraper;
