import React from 'react'

const LocationSearchPanel = ({ setLocationPanelOpen, setVehiclePanelOpen }) => {
  const sampleLocations = [1, 2, 3, 4, 5]
  return (
    <div>
      {/* this is sample data */}
      {sampleLocations.map((index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setLocationPanelOpen(false);
              setVehiclePanelOpen(true);
            }}
           className='flex items-center gap-4 my-2 border-2 border-gray-100 active:border-black p-3 rounded-xl'>
            <i className="fa-solid fa-location-dot text-2xl bg-[#eee] px-3 py-2 rounded-full"></i>
            <h4 className='text-lg font-medium'> E-17/584 Amar colony, East Gokal pur </h4>
          </div>
      )
        })}
    </div>
  )
}

export default LocationSearchPanel
