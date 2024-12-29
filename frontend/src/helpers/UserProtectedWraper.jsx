import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";


const UserProtectedWraper = ({children}) => {
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('token'));
    const [isLoading, setIsLoading] = useState(true);
    const { setUserData } = useContext(UserContext);
    useEffect(()=>{
      if(!token){
        return  navigate('/login');
    } 
    axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    }).then((response) => {
      if(response.status === 200){
        setUserData(response.data.user);
        setIsLoading(false);
      }
     
    }).catch(err=>{
        console.log(err);
        navigate('/login');
      
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

export default UserProtectedWraper;
