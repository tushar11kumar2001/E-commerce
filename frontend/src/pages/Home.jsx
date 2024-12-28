import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8)] pt-10 flex justify-between flex-col h-screen w-full ">
          <p className="ml-5   text-5xl font-bold font-serif text-white">SwiftRide</p>
          <div className="bg-white pb-7  py-4 px-4">
            <h2 className="text-3xl font-bold">Get Started with SwiftRide</h2>
            <Link to="/login" className="inline-block text-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
          </div>
      </div>
    </div>
  )
}

export default Home
