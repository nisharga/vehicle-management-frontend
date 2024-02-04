
const UpdateVehecleForm = ({ updateID }: any) => {
  return (
    <div>
    <h1>Update Vehecle ID {updateID}</h1>
    <form className="bg-white px-10 rounded-lg shadow-sm py-20 md:w-4/5 mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#04334E] uppercase">
            Update Vehicle
          </h2>
  
          <div className="grid  md:grid-cols-2 gap-6">
            <label className="block mb-4 text-lg">
              Registration Number
              <input
                className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                type="text"
                id="registrationNo"
                name="registrationNo"
                required
              />
            </label>
  
            <label className="block mb-4 text-lg">
              Tax
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
              Seat Capacity
              <input
                className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                type="number"
                id="seatCapacity"
                name="seatCapacity"
                required
              />
            </label>
  
            <label className="block mb-4 text-lg">
              Brand
              <input
                className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                type="text"
                id="brand"
                name="brand"
                required
              />
            </label>
  
            <label className="block mb-4 text-lg">
              Model
              <input
                className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                type="text"
                id="model"
                name="model"
                required
              />
            </label>
  
            <label className="block mb-4 text-lg">
              Fuel Type
              <select
                className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                id="fuelType"
                name="fuelType"
                required
              >
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </label>
  
            <label className="block mb-4 text-lg">
              Is Ac Available ?
              <select
                className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                id="fuelType"
                name="fuelType"
                required
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>
          </div>
  
          <div className="w-full flex justify-center items-center mt-6">
            <button
              className="lg:h-12 uppercase bg-[#04334E] hover:bg-[#FAAB01] text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Create Vehicle
            </button>
          </div>
        </form>
        </div>
  )
}

export default UpdateVehecleForm