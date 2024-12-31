import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRidePanel from '../components/FinishRidePanel';

const CaptainRiding = () => {
  const [finishRidePanelOpen, setFinishRidePanelOpen] = useState(false);
  return (
    <div className='h-screen overflow-hidden'>
      <div className='fixed p-6 top-0 flex w-full justify-between items-center '>
        <h2 className='text-3xl font-semibold'>SwiftRide</h2>
        <Link to="" className=' h-10 w-10 bg-white flex items-center justify-center rounded-full   text-xl'>
          <i className=" fa-solid fa-arrow-right-from-bracket "></i>
        </Link>
      </div>

      <div className='h-4/5 '>
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s" alt="" />
      </div>

      <div className='relative  h-1/5  p-6 flex items-center justify-between bg-yellow-400'
      >
       
        <i
           onClick={() => {
            setFinishRidePanelOpen(true)}}
          className="absolute top-2  fa-solid fa-chevron-up text-3xl mb-2 font-semibold text-center w-full"
        ></i>

        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className=' text-xl bg-green-600 text-white font-semibold px-7 py-3 rounded-lg'
        >Complete Ride</button>
      </div>

      <div className={`fixed bottom-0  w-full ${finishRidePanelOpen ? "" : "hidden"}`}>
        <FinishRidePanel setFinishRidePanelOpen={setFinishRidePanelOpen}/>
      </div>

    </div>
  )
}

export default CaptainRiding
