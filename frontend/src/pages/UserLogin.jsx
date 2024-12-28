import { useState } from "react";
import { Link } from "react-router-dom"

const UserLogin = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const formHandler =  (e)=>{
    e.preventDefault();
    setUserData({
      emailId: emailId,
      password: password
    });
     
    setEmailId('');
    setPassword('');
  };
  return (
    <div className="p-7 pb-10 flex flex-col justify-between h-screen">
      <div>
        <p className="mb-10   text-4xl font-bold font-serif text-black">SwiftRide</p>
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
        <p className="text-center">Don't have an account? <Link to="/signup" className="text-blue-500">Create new Account</Link></p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] inline-block text-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base "
        >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
