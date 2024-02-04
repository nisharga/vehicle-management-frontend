
const UpdateTripForm = ({ updateID }: any) => {
    return (
      <div>
      <h1>Update Trip Location {updateID}</h1>
      <form className="bg-white px-10 rounded-lg shadow-sm py-20 md:w-4/5 mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#04334E] uppercase">
              Update Trip
            </h2>
    
            <div className="grid  md:grid-cols-2 gap-6">
              <label className="block mb-4 text-lg">
              start location
                <input
                  className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  type="text"
                  id="registrationNo"
                  name="registrationNo"
                  required
                />
              </label>
    
              <label className="block mb-4 text-lg">
              end Location
                <input
                  className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  type="number"
                  id="tax"
                  name="tax"
                  step="0.01"
                  required
                />
              </label>
    
              <label className="block mb-4 text-lg">
              startTime
                <input
                  className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  type="number"
                  id="seatCapacity"
                  name="seatCapacity"
                  required
                />
              </label>
    
              <label className="block mb-4 text-lg">
              possibleEndTime
                <input
                  className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  type="text"
                  id="brand"
                  name="brand"
                  required
                />
              </label>
    
              <label className="block mb-4 text-lg">
              passengerCount
                <input
                  className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  type="text"
                  id="model"
                  name="model"
                  required
                />
              </label>
              
              <label className="block mb-4 text-lg">
              Driver
                <input
                  className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  type="text"
                  id="model"
                  name="model"
                  required
                />
              </label>
    
              <label className="block mb-4 text-lg">
                Vehecle Type
                <select
                  className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  id="fuelType"
                  name="fuelType"
                  required
                >
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="van">Van</option>
                  <option value="compact">Compact</option>
                </select>
              </label>
    
            </div>
    
            <div className="w-full flex justify-center items-center mt-6">
              <button
                className="lg:h-12 uppercase bg-[#04334E] hover:bg-[#FAAB01] text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Update Trip
              </button>
            </div>
          </form>
          </div>
    )
  }
  
  export default UpdateTripForm