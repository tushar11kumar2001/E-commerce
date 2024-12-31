import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen '>
            <Link to="/home" className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2  text-xl'>
                <i className=" fa-solid fa-house "></i>
            </Link>

            <div className='h-1/2 p-4 '>
                <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s" alt="" />
            </div>

            <div className='h-1/2  relative'>
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
                <button className='absolute bottom-4 w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
            </div>
        </div>

    )
}

export default Riding
