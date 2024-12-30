
const ChooseVehiclePanel = ({ setVehiclePanelOpen, setConfirmedRidePanelOpen }) => {
  return (
    <div className="bg-white px-3 pb-6 pt-3">
      <i
        onClick={() => setVehiclePanelOpen(false)}
        className="fa-solid fa-angle-down text-3xl mb-2 font-semibold text-center w-full"
      ></i>
      <h3 className="font-bold text-2xl mb-6">Choose a Vehicle</h3>
      <div
        className=" border-2  border-gray-400 py-2 px-3 active:border-black rounded-xl flex items-center justify-between mb-4"
        onClick={() => setConfirmedRidePanelOpen(true)}
      >
        <div className="flex items-center h-20">
          <img
            className="h-16"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className="">
            <h4 className="text-lg font-bold">SwiftRideGO <span><i className="fa-solid fa-user"></i> 4</span></h4>
            <p className="text-sm font-bold">2 min away</p>
            <p className="text-sm text-gray-400">affordable compact ride</p>
          </div>
        </div>
        <h2 className="text-xl font-bold">Rs.193.00</h2>

      </div>

      <div
        className=" border-2  border-gray-400 py-2 px-3 active:border-black rounded-xl flex items-center justify-between mb-4"
        onClick={() => setConfirmedRidePanelOpen(true)}
      >
        <div className="flex items-center h-20">
          <img
            className="h-16"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className="">
            <h4 className="text-lg font-bold">Moto<span><i className="fa-solid fa-user"></i> 1</span></h4>
            <p className="text-sm font-bold">2 min away</p>
            <p className="text-sm text-gray-400">affordable compact ride</p>
          </div>
        </div>
        <h2 className="text-xl font-bold">Rs.193.00</h2>

      </div>

      <div
        className=" border-2  border-gray-400 py-2 px-3 active:border-black rounded-xl flex items-center justify-between mb-4"
        onClick={() => setConfirmedRidePanelOpen(true)}
      >
        <div className="flex items-center h-20">
          <img
            className="h-16"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className="">
            <h4 className="text-lg font-bold">SwiftRideAUTO <span><i className="fa-solid fa-user"></i> 3</span></h4>
            <p className="text-sm font-bold">2 min away</p>
            <p className="text-sm text-gray-400">affordable compact ride</p>
          </div>
        </div>
        <h2 className="text-xl font-bold">Rs.193.00</h2>

      </div>
    </div>
  )
}

export default ChooseVehiclePanel;
