import { useState } from 'react';
import LocationSearchPanel from '../components/LocationSearchPanel';
import ChooseVehiclePanel from '../components/ChooseVehiclePanel';
import ConfirmedRidePanel from '../components/ConfirmedRidePanel';
import LookingForDriverPanel from '../components/LookingForDriverPanel';
import WaitingForDriverPanel from '../components/WaitingForDriverPanel';


const Home = () => {

  const [pickupLocation, setPickupLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [locationPanelOpen, setLocationPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmedRidePanelOpen, setConfirmedRidePanelOpen] = useState(false);
  const [lookingForDriverPanelOpen, setLookingForDriverPanelOpen] = useState(false);
  const [waitingForDriverPanelOpen, setWaitingForDriverPanelOpen] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div 
    className="h-screen relative overflow-hidden">
      <p className="absolute top-5 left-5 text-3xl font-semibold ">Swift Ride</p>
      <div className="h-screen w-screen ">
        {/* temporary image */}
        <img 
        className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s" alt="" />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[25%] p-5 bg-white relative ">
             <div className='flex justify-between items-center pr-5'>
              <h4 className="text-2xl font-semibold ">Find a trip</h4>
             <i 
             className={`fa-solid fa-angle-down text-3xl font-semibold ${!locationPanelOpen? "hidden" : ""}`}
             onClick={()=>setLocationPanelOpen(false)}></i>
             </div>
             <div className="h-20 w-1 bg-gray-900 rounded-full absolute top-[37%] left-10"></div>
             <form 
             
             onSubmit={formHandler}
             >
              <input 
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5" type="text" 
              placeholder="Add a pick-up location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)
              }
             onClick={() => setLocationPanelOpen(true)}

              />
              <input 
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5" type="text" 
              placeholder="Enter your destination"
              value={destinationLocation}
              onChange={(e) => setDestinationLocation(e.target.value)}
              />
             </form>
        </div> 

        <div className={`bg-white  ${locationPanelOpen ? "h-[75%] " : "h-0"} px-6`}>
            <LocationSearchPanel setLocationPanelOpen={setLocationPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>

        <div className={` fixed bottom-0 w-full ${vehiclePanelOpen? "" :"hidden"}`}>
          <ChooseVehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmedRidePanelOpen={setConfirmedRidePanelOpen}/>
        </div>

        <div className={` fixed bottom-0 w-full ${confirmedRidePanelOpen? "" :"hidden"}`}>
          <ConfirmedRidePanel setConfirmedRidePanelOpen={setConfirmedRidePanelOpen} setLookingForDriverPanelOpen={setLookingForDriverPanelOpen}/>
        </div>

        <div className={` fixed bottom-0 w-full ${lookingForDriverPanelOpen? "" :"hidden"}`}>
          <LookingForDriverPanel/>
        </div>

        <div className={` fixed bottom-0 w-full ${waitingForDriverPanelOpen? "" :"hidden"}`}>
          <WaitingForDriverPanel setWaitingForDriverPanelOpen={setWaitingForDriverPanelOpen}/>
        </div>
      </div>
    </div>
  )
}

export default Home;
