import React from 'react'

const RidePopUpPanel = ({ setRidePopUpPanelOpen, setAcceptRidePanelOpen }) => {
    return (
        <div className=" bg-white px-3 pb-6 pt-5">
            <i
                onClick={() => setRidePopUpPanelOpen(false)}
                className="fa-solid fa-angle-down text-3xl mb-2 font-semibold text-center w-full"
            ></i>
            <h3 className="font-bold text-2xl text-center">New Ride Available!</h3>
            <div className='flex items-center justify-between mt-5 p-3 bg-yellow-300 rounded-lg'>
                <div className='flex items-center gap-3 '>
                    <img className="h-12 w-12 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                    <h4 className='text-xl font-medium'>Tushar kumar</h4>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className=' flex gap-2 justify-between flex-col items-center mt-5 px-3'>

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
                        setAcceptRidePanelOpen(true);
                        setRidePopUpPanelOpen(false);
                    }}
                >Accept</button>

                <button className='w-full mt-3 bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg'
                    onClick={() => {
                        setRidePopUpPanelOpen(false);
                    }}
                >Ignored</button>
            </div>
        </div>
    )
}

export default RidePopUpPanel
