
const CreateTrip = () => {
  return (
    <div className="">
    <form className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#04334E] uppercase">Create a New Trip</h2>

      <section className="lg:flex lg:items-center lg:justify-between gap-10 lg:w-full mb-4">
        <label className="block mb-4 lg:w-1/2 text-lg">
          Start Location
          <input
            className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            id="startLocation"
            name="startLocation"
            required
          />
        </label>

        <label className="block mb-4 lg:w-1/2 text-lg">
          End Location
          <input
            className="w-full lg:h-14 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            id="endLocation"
            name="endLocation"
            required
          />
        </label>
      </section>
      <section className="lg:flex lg:items-center lg:justify-between gap-10 lg:w-full mb-8">
      <label className="block mb-4 lg:w-1/2 text-lg">
        Start Time
        <input
          className="w-full lg:h-14 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type="datetime-local"
          id="startTime"
          name="startTime"
          required
        />
      </label>

      <label className="block mb-4 lg:w-1/2 text-lg">
        End Time
        <input
          className="w-full lg:h-14 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type="datetime-local"
          id="endTime"
          name="endTime"
          required
        />
      </label>
      </section>
      <section className="lg:flex lg:items-center lg:justify-between gap-10 lg:w-full mb-8">
      <label className="block mb-4 lg:w-1/2 text-lg">
        Distance (in km)
        <input
          className="w-full lg:h-14  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type="number"
          id="distance"
          name="distance"
          step="0.1"
          required
        />
      </label>

      <label className="block mb-4 lg:w-1/2 text-lg">
        Passenger Count
        <input
          className="w-full lg:h-14  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type="number"
          id="passengerCount"
          name="passengerCount"
          required
        />
      </label>
      </section>

      <label className="block mb-4  text-lg ">
        Expenses
        <input
          className="w-full lg:h-14 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type="number"
          id="expenses"
          name="expenses"
          step="0.01"
          required
        />
      </label>

      <section className="lg:flex lg:items-center lg:justify-between gap-10 lg:w-full my-8">
      <label className="block mb-4 lg:w-1/2 text-lg">
    Driver
    <select
      className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
      id="fuelType"
      name="fuelType"
      required
    >
      <option value="petrol">Sofik</option>
      <option value="diesel">Farok</option>
      <option value="electric">Kabir</option>
      <option value="hybrid">Mobarak</option>
    </select>
  </label>
  <label className="block mb-4 lg:w-1/2 text-lg">
    Vehicle
    <select
      className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
      id="fuelType"
      name="fuelType"
      required
    >
      <option value="petrol">Toyota Camry</option>
      <option value="diesel">Micro Bus</option>
      <option value="electric">BMW Car</option>
      <option value="hybrid">Nissan Altima</option>
    </select>
  </label>


      </section>
      <button
        className="w-full lg:h-12 uppercase bg-[#04334E] hover:bg-[#FAAB01] text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Create Trip
      </button>
    </form>
    </div>
  )
}

export default CreateTrip