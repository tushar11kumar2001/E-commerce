import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-between'>  
          <div className='flex items-center justify-start gap-3'>
            <img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
            <h4 className='text-xl font-semibold'>Tushar kumar</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>Rs.295.20</h4>
            <p className='text-sm text-gray-600'>Earned</p>
          </div>
        </div>

        <div className='p-3 mt-10 bg-gray-100 rounded-xl  flex justify-evenly gap-5 items-start'>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin   fa-regular fa-clock"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin fa-solid fa-gauge-high"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin fa-regular fa-clipboard"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails
