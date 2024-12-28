import { useState } from "react";
import { Link } from "react-router-dom"

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [captainData, setCaptainData] = useState({});
  const formHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      emailId: emailId,
      password: password,
      vehicle :{
        color: color,
        plate: vehicleNumber,
        capacity: vehicleCapacity,
        vehicleType
      }
    });
    setEmailId("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setColor("");
    setVehicleNumber("");
    setVehicleCapacity("");
    setVehicleType("");

  };
  return (
    <div className="p-7 pb-10 flex flex-col justify-between h-screen">
      <div>
        <div className="mb-10   text-black">
          <p className="text-4xl font-bold font-serif">SwiftRide</p>
          <i className="fa-solid fa-arrow-right text-2xl "></i>
        </div>
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

          <h3 className="text-xl mb-2 font-medium">Add your vechicle details</h3>
          <div className="">
            <div className="flex gap-5">
            <input
              className=" bg-[#eeeeee] mb-7 rounded w-1/2 px-4 py-2 border  text-lg placeholder:text-base outline-black "
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="text"
              placeholder=" Color"
              required />
            <input
              className="bg-[#eeeeee] mb-7 rounded w-1/2 px-4 py-2 border  text-lg placeholder:text-base outline-black "
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              type="text"
              placeholder="Plate Number"
              required />
            </div>
           <div className="flex gap-5">
           <input
              className="bg-[#eeeeee] mb-7 rounded w-1/2 px-4 py-2 border  text-lg placeholder:text-base outline-black "
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type="number"
              placeholder="capacity e.g 2,3,4"
              required />
            <input
              className="bg-[#eeeeee] mb-7 rounded w-1/2 px-4 py-2 border  text-lg placeholder:text-base outline-black "
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              type="text"
              placeholder="Type"
              required />
           </div>
           
          </div>
          <button
            className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base "
          >Sign Up</button>
        </form>
        <p className="text-center">Already have an account? <Link to="/captain-login" className="text-blue-500">Login here</Link></p>
      </div>
      <div>
        <p className="text-[15px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, repudiandae vitae, aspernatur sapiente non cum dignissimos molestiae animi delectus dicta sed consectetur enim. Magni labore asperiores
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup;
