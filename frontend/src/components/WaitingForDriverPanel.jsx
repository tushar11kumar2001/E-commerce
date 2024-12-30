import React from 'react'

const WaitingForDriverPanel = ({ setWaitingForDriverPanelOpen }) => {
  return (
    <div className=" bg-white px-3 pb-6 pt-5">
         <i
        onClick={() => setWaitingForDriverPanelOpen(false)}
        className="fa-solid fa-angle-down text-3xl mb-2 font-semibold text-center w-full"
      ></i>
    <div className=' flex gap-2 justify-between flex-col items-center mt-5 px-3'>

      <div className='w-full flex items-center justify-between '>
      <img className="h-20" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
      <div className='text-right'>
        <h2 className='text-xl font-medium'>Tushar</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP 02 r ewr</h4>
        <p className='text-sm text-gray-600 '>Marutii Suzuki Alto</p>
      </div>
      </div>

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
    </div>
  </div >
  )
}

export default WaitingForDriverPanel
