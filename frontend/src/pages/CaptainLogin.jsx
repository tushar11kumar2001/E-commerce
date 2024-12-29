import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/CaptainContext";

const CaptainLogin =  () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setCaptainData }  = useContext(CaptainContext);
  const formHandler =  async (e)=>{
    e.preventDefault();
    const captainData = {
      emailId: emailId,
      password: password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, captainData);
    // console.log("login ",response);
    if(response.status === 200){
      const { captain, token } = response.data;
      localStorage.setItem('token', JSON.stringify(token));
      setCaptainData(captain);
      navigate('/captain-home');
    }
    
     
    setEmailId('');
    setPassword('');
  };
  return (
    <div className="p-7 pb-10 flex flex-col justify-between h-screen">
      <div>
        <div className="mb-10   text-black">
        <p className="text-4xl font-bold font-serif">SwiftRide</p>
        <i className="fa-solid fa-arrow-right text-2xl "></i>
        </div>
        <form onSubmit={formHandler}>
          <h3 className="text-xl font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-black "
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            type="email"
            placeholder="email@example.com"
            required />

          <h3 className="text-xl mb-2 font-medium">Enter your password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-black "
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required />

          <button
            className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base "
           >Login</button>
        </form>
        <p className="text-center">Join a fleet? <Link to="/captain-signup" className="text-blue-500">Register as a Captain</Link></p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] inline-block text-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base "
        >Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
