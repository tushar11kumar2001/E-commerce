import React from 'react'

const ConfirmedRidePanel = ({ setConfirmedRidePanelOpen, setLookingForDriverPanelOpen }) => {
  return (
    <div className=" bg-white px-3 pb-6 pt-5">
       <i
        onClick={() => setConfirmedRidePanelOpen(false)}
        className="fa-solid fa-angle-down text-3xl mb-2 font-semibold text-center w-full"
      ></i>
      <h3 className="font-bold text-2xl text-center">Confirm your Ride</h3>
      <div className=' flex gap-2 justify-between flex-col items-center mt-5 px-3'>
        <img className="h-24" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        
        <div className='w-full'>

            <div className='flex items-center gap-5 p-3 border-b-2 '>
            <i className="fa-solid fa-location-dot text-2xl"></i>
            <div>
              <h3 className='text-2xl font-medium'>562/11-A</h3>
              <p className='text-gray-600 text-lg'>Kankariya talab</p>
            </div>
            </div>

            <div className='flex items-center gap-5 p-3 border-b-2 '>
            <i className="fa-solid fa-location-crosshairs text-2xl"></i>
            <div>
              <h3 className='text-2xl font-medium'>562/11-A</h3>
              <p className='text-gray-600 text-lg'>Kankariya talab</p>
            </div>
            </div>

            <div className='flex items-center gap-5 p-3  '>
            <i className="fa-regular fa-money-bill-1 text-2xl"></i>
            <div>
              <h3 className='text-2xl font-medium'>Rs.193.20</h3>
              <p className='text-gray-600 text-lg'>Case</p>
            </div>
            </div>
        </div>
        <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'
        onClick={() => {
          setLookingForDriverPanelOpen(true);
          setConfirmedRidePanelOpen(false);
        }}
        >Confirmed</button>
      </div>
    </div>
  )
}


export default ConfirmedRidePanel
