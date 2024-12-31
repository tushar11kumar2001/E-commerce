import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUpPanel from '../components/RidePopUpPanel'
import AcceptRidePanel from '../components/AcceptRidePanel'


const CaptainHome = () => {
  const[ridePopUpPanelOpen, setRidePopUpPanelOpen] = useState(true);
  const[acceptRidePanelOpen, setAcceptRidePanelOpen] = useState(false);
  return (
    <div className='h-screen overflow-hidden'>
      <div className='fixed p-6 top-0 flex w-full justify-between items-center '>
        <h2 className='text-3xl font-semibold'>SwiftRide</h2>
        <Link to="/home" className=' h-10 w-10 bg-white flex items-center justify-center rounded-full   text-xl'>
          <i className=" fa-solid fa-arrow-right-from-bracket "></i>
        </Link>
      </div>

      <div className='h-3/5 '>
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s" alt="" />
      </div>

      <div className='h-2/5  p-6'>
        <CaptainDetails />
      </div>

      <div className={` fixed bottom-0 w-full ${ridePopUpPanelOpen? "" :"hidden"}`}>
        <RidePopUpPanel setRidePopUpPanelOpen={setRidePopUpPanelOpen} setAcceptRidePanelOpen={setAcceptRidePanelOpen}/>
      </div>

      <div className={` fixed bottom-0 h-screen w-full ${acceptRidePanelOpen? "" :"hidden"}`}>
        <AcceptRidePanel setRidePopUpPanelOpen={setRidePopUpPanelOpen} setAcceptRidePanelOpen={setAcceptRidePanelOpen}/>
      </div>
    </div>
  )
}

export default CaptainHome
