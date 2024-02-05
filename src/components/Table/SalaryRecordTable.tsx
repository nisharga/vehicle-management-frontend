"use client";
import { EyeOutlined } from "@ant-design/icons";
import { Image } from "antd";

const SalaryRecordTable = () => {
  const SalaryTableFields = [
    {
      id: 0,
      fields: "Photo",
    },
    {
      id: 1,
      fields: "Name",
    },
    {
      id: 2,
      fields: "Month",
    },
    {
      id: 3,
      fields: "Position",
    },
    {
      id: 4,
      fields: "Status",
    },
    {
      id: 5,
      fields: "Details",
    },
  ];

  const VMSEmployers = [
    {
      ID: "VMSD-20181",
      name: "John Doe",
      avatar: "https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png",
      position: "junior",
      salaryStatus: "pending",
      month: "january-2020",
    },
    {
      ID: "VMSD-20182",
      name: "John Doe",
      avatar: "https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png",
      position: "senior",
      salaryStatus: "paid",
      month: "february-2020",
    },
    {
      ID: "VMSD-20181",
      name: "John Doe",
      avatar: "https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png",
      position: "executive",
      salaryStatus: "pending",
      month: "March-2020",
    },
    {
      ID: "VMSD-20181",
      name: "John Doe",
      avatar: "https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png",
      position: "Manager",
      salaryStatus: "pending",
      month: "March-2020",
    },
    {
      ID: "VMSD-20181",
      name: "John Doe",
      avatar: "https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png",
      position: "helper",
      salaryStatus: "pending",
      month: "March-2020",
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
                  <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2   text-grey-dark text-sm">
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
                  placeholder={`Search Through ${SalaryTableFields?.length} Driver`}
                />
              </div>
            </div>
          </div>

          <table className="min-w-full">
            <thead className="bg-gray-100 rounded-lg">
              <tr className="">
                {SalaryTableFields?.map((SalaryTableField) => (
                  <th
                    key={SalaryTableField?.id}
                    className="px-2 py-2  border-gray-300 text-left leading-4 text-black tracking-wider"
                  >
                    {SalaryTableField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white">
              {VMSEmployers?.map((VMSEmployer) => (
                <tr key={VMSEmployer?.ID} className="border-b border-gray-200">
                  <td className=" px-2 py-1">
                    <div className="flex items-center">
                      <div className="">
                        <Image
                          className="rounded-full"
                          width={50}
                          src={VMSEmployer?.avatar}
                          alt="..."
                        />
                      </div>
                    </div>
                  </td>
                  <td className=" px-2 py-1   ">
                    <div className="text-sm leading-5 ">
                      {VMSEmployer?.name}
                    </div>
                  </td>
                  <td className=" px-2 py-1 text-sm leading-5">
                    {VMSEmployer?.month}
                  </td>
                  <td className=" px-2 py-1     text-sm leading-5">
                    {VMSEmployer?.position}
                  </td>
                  <td className=" px-2 py-1     text-sm leading-5">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative text-xs">
                        {VMSEmployer?.salaryStatus}
                      </span>
                    </span>
                  </td>

                  <td className=" px-2 py-1 text-sm leading-5">
                    <button className="px-1 border-secondary border text-secondary rounded transition duration-300 hover:bg-secondary hover:text-white ">
                      <EyeOutlined />
                    </button>
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

export default SalaryRecordTable;
