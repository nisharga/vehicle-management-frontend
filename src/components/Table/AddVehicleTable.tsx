"use client";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

const AddVehicleTable = () => {
  const vehiclesFields = [
    {
      id: 1,
      fields: "Reg.Id",
    },
    {
      id: 2,
      fields: "PurchaseDate",
    },
    {
      id: 3,
      fields: "RegistrationDate",
    },
    {
      id: 4,
      fields: "Color",
    },
    {
      id: 6,
      fields: "Mileage",
    },
    {
      id: 7,
      fields: "Price",
    },
    {
      id: 8,
      fields: "Tax",
    },
    {
      id: 9,
      fields: "seatCapacity",
    },
    {
      id: 10,
      fields: "AC/no-AC",
    },

    {
      id: 11,
      fields: "Brand",
    },
    {
      id: 12,
      fields: "Model",
    },
    {
      id: 13,
      fields: "Fuel Type",
    },
    {
      id: 14,
      fields: "Action",
    },
  ];

  const vehicles = [
    {
      registration_no: "ABC123",
      purchaseDate: "2023-01-05",
      registrationDate: "2023-02-10",
      color: "Red",
      mileage: 5000,
      price: 25000,
      tax: 1500,
      seatCapacity: 5,
      isAc: "Yes",
      brand: "Toyota",
      model: "Corolla",
      fuelType: "Petrol",
    },
    {
      registration_no: "JKL012",
      purchaseDate: "2023-02-28",
      registrationDate: "2023-04-05",
      color: "Black",
      mileage: 6000,
      price: 28000,
      tax: 1600,
      seatCapacity: 5,
      isAc: "Yes",
      brand: "Nissan",
      model: "Sentra",
      fuelType: "Petrol",
    },
    {
      registration_no: "MNO345",
      purchaseDate: "2023-05-10",
      registrationDate: "2023-06-15",
      color: "Silver",
      mileage: 4000,
      price: 22000,
      tax: 1300,
      seatCapacity: 5,
      isAc: "Yes",
      brand: "Chevrolet",
      model: "Cruze",
      fuelType: "Petrol",
    },
    {
      registration_no: "PQR678",
      purchaseDate: "2023-04-03",
      registrationDate: "2023-05-08",
      color: "Green",
      mileage: 7000,
      price: 32000,
      tax: 2000,
      seatCapacity: 7,
      isAc: "Yes",
      brand: "Hyundai",
      model: "Elantra",
      fuelType: "Diesel",
    },
    {
      registration_no: "YZA567",
      purchaseDate: "2023-08-30",
      registrationDate: "2023-10-05",
      color: "Brown",
      mileage: 5500,
      price: 27000,
      tax: 1700,
      seatCapacity: 5,
      isAc: "Yes",
      brand: "Honda",
      model: "Accord",
      fuelType: "Petrol",
    },

    {
      registration_no: "EFG890",
      purchaseDate: "2024-08-10",
      registrationDate: "2024-09-15",
      color: "Orange",
      mileage: 8300,
      price: 40000,
      tax: 2500,
      seatCapacity: 6,
      isAc: "Yes",
      brand: "Toyota",
      model: "RAV4",
      fuelType: "Petrol",
    },
    {
      registration_no: "DEF456",
      purchaseDate: "2022-12-15",
      registrationDate: "2023-01-20",
      color: "Blue",
      mileage: 8000,
      price: 30000,
      tax: 1800,
      seatCapacity: 7,
      isAc: "Yes",
      brand: "Honda",
      model: "Civic",
      fuelType: "Petrol",
    },
    {
      registration_no: "GHI789",
      purchaseDate: "2023-03-20",
      registrationDate: "2023-04-25",
      color: "White",
      mileage: 3000,
      price: 20000,
      tax: 1200,
      seatCapacity: 4,
      isAc: "No",
      brand: "Ford",
      model: "Focus",
      fuelType: "Diesel",
    },
    {
      registration_no: "ABC123",
      purchaseDate: "2023-01-05",
      registrationDate: "2023-02-10",
      color: "Red",
      mileage: 5000,
      price: 25000,
      tax: 1500,
      seatCapacity: 5,
      isAc: "Yes",
      brand: "Toyota",
      model: "Corolla",
      fuelType: "Petrol",
    },
    {
      registration_no: "DEF456",
      purchaseDate: "2022-12-15",
      registrationDate: "2023-01-20",
      color: "Blue",
      mileage: 8000,
      price: 30000,
      tax: 1800,
      seatCapacity: 7,
      isAc: "Yes",
      brand: "Honda",
      model: "Civic",
      fuelType: "Petrol",
    },
    {
      registration_no: "GHI789",
      purchaseDate: "2023-03-20",
      registrationDate: "2023-04-25",
      color: "White",
      mileage: 3000,
      price: 20000,
      tax: 1200,
      seatCapacity: 4,
      isAc: "No",
      brand: "Ford",
      model: "Focus",
      fuelType: "Diesel",
    },
  ];
  return (
    <div>
      {/* table start */}
      <div className="overflow-x-auto rounded-lg">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <div className="flex justify-center border-b pb-3">
            <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
              <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                <div className="flex">
                  <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                    <svg
                      width="18"
                      height="18"
                      className="w-4 lg:w-auto"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                        stroke="#455A64"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.9993 16.9993L13.1328 13.1328"
                        stroke="#455A64"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs text-gray-500 font-thin"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <table className="min-w-full">
            <thead>
              <tr>
                {vehiclesFields?.map((vehiclesField) => (
                  <th
                    key={vehiclesField?.id}
                    className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider"
                  >
                    {vehiclesField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white">
              {vehicles?.map((vehicle) => (
                <tr>
                  <td
                    key={vehicle?.registration_no}
                    className="px-6 py-4 whitespace-no-wrap border-b border-gray-500"
                  >
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm leading-5 text-gray-800">
                          {vehicle?.registration_no}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div className="text-sm leading-5 text-blue-900">
                      {vehicle?.purchaseDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {vehicle?.registrationDate}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {vehicle?.color}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative text-xs">
                        {vehicle?.mileage}
                      </span>
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    {vehicle?.price}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    {vehicle?.tax}
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    {vehicle?.seatCapacity}
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    {vehicle?.isAc}
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    {vehicle?.brand}
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    {vehicle?.model}
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    {vehicle?.fuelType}
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <div className="flex gap-x-1">
                      <button className="px-1 border-secondary border text-secondary rounded transition duration-300 hover:bg-secondary hover:text-white ">
                        <EyeOutlined />
                      </button>

                      <button className="px-1 border-yellow-600 border text-yellow-600 rounded transition duration-300 hover:bg-yellow-100 hover:text-secondary ">
                        <EditOutlined />
                      </button>
                      <button className="px-1 border-red-600 border text-red-600 rounded transition duration-300 hover:bg-red-100 hover:text-red-600 ">
                        <DeleteOutlined />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center my-4  mx-auto">
            <nav className="relative z-0 inline-flex shadow-sm">
              <div>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                  aria-label="Previous"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                >
                  1
                </a>
                <a
                  href="#"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                >
                  2
                </a>
                <a
                  href="#"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                >
                  3
                </a>
              </div>
              <div v-if="pagination.current_page < pagination.last_page">
                <a
                  href="#"
                  className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                  aria-label="Next"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
        {/* table end */}
      </div>
    </div>
  );
};

export default AddVehicleTable;
