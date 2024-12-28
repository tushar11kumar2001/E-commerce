import { useState } from "react";
import { Link } from "react-router-dom"

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const formHandler = (e) => {
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      emailId: emailId,
      password: password
    });
    console.log(userData);
    setEmailId("");
    setPassword("");
    setFirstName("");
    setLastName("");
    
    e.preventDefault();
  };
  return (
    <div className="p-7 pb-10 flex flex-col justify-between h-screen">
      <div>
        <p className="mb-10   text-4xl font-bold font-serif text-black">SwiftRide</p>
        <form onSubmit={formHandler}>
          <h3 className="text-xl font-medium mb-2">What's your Name</h3>
          <div className="flex gap-5 ">
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base outline-black "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              required />
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base outline-black "
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
          </div>

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
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            required />

          <button
            className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base "
          >Sign Up</button>
        </form>
        <p className="text-center">Already have an account? <Link to="/login" className="text-blue-500">Login here</Link></p>
      </div>
      <div>
        <p className="text-[15px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, repudiandae vitae, aspernatur sapiente non cum dignissimos molestiae animi delectus dicta sed consectetur enim. Magni labore asperiores 
        </p>
      </div>
    </div>
  )
}

export default UserSignup;
