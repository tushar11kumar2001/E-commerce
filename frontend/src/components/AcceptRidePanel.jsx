import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AcceptRidePanel = ({ setRidePopUpPanelOpen, setAcceptRidePanelOpen }) => {
    const[ otp, setOtp ] = useState('');
    const formHandler = (e) => { 
        e.preventDefault();
    }

    return (
        <div className="h-full bg-white px-3 pb-6 pt-5">
            <i
                onClick={() => setAcceptRidePanelOpen(false)}
                className="fa-solid fa-angle-down text-3xl mb-2 font-semibold text-center w-full"
            ></i>
            <h3 className="font-bold text-2xl text-center">Confirm to Start to this ride </h3>
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
                <div className=' mt-6 '>
                    <form 
                    onSubmit={formHandler}
                    className=''>
                        <input
                            className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5 outline-black"
                            type="text"
                            placeholder='Enter OTP'
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />

                        <Link to="/captain-riding" className='inline-block w-full mt-5 text-center  bg-green-600 text-white font-semibold p-4 rounded-lg'
                        >Confirmed</Link>

                        <button className='w-full mt-5 bg-red-600 text-white  font-semibold p-4 rounded-lg'
                            onClick={() => {
                                setAcceptRidePanelOpen(false);
                                setRidePopUpPanelOpen(false);
                            }}
                        >Cancel</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AcceptRidePanel
