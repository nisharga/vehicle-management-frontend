 

const AddDriver = () => {
  return (
    <div>
          <div className="">
      <form className="bg-white px-10 rounded-lg shadow-sm py-20 md:w-4/5 mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#04334E] uppercase">
          Create Driver
        </h2>

        <div className="flex flex-col justify-center items-center">
          <label className="block mb-4 text-lg">
            Full Name
            <input
              className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              id="full_name"
              name="full_name"
              required
            />
          </label>
          <label className="block mb-4 text-lg">
            User Email
            <input
              className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              required
            />
          </label>
          <label className="block mb-4 text-lg">
            Password
            <input
              className="w-full p-2 lg:h-14 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="password"
              id="password"
              name="password"
              required
            />
          </label>
        </div>

        <div className="w-full flex justify-center items-center mt-6">
          <button
            className="lg:h-12 uppercase bg-[#04334E] hover:bg-[#FAAB01] text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Create Driver
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddDriver