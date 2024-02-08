"use client";

import Pagination from "../ui/Pagination";

const SalaryTableFields = [
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
const SalaryRecordTable = () => {
  return (
    <div>
      {/* table start */}
      <div className="overflow-x-auto rounded-lg">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <div className="pb-3">
            <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-10 bg-transparent">
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
            <thead className="bg-gray-50 rounded-2xl">
              <tr className="">
                {SalaryTableFields?.map((SalaryTableField) => (
                  <th
                    key={SalaryTableField?.id}
                    className=" px-2 py-3 text-left text-black"
                  >
                    {SalaryTableField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white">
              {VMSEmployers?.map((VMSEmployer, index) => (
                <tr
                  key={VMSEmployer?.ID}
                  className={`${index % 2 === 0 ? "" : "bg-gray-50"}  `}
                >
                  <td className="px-2 py-3 text-sm leading-5">
                    {VMSEmployer?.name}
                  </td>
                  <td className="px-2 py-3 text-sm leading-5">
                    {VMSEmployer?.month}
                  </td>
                  <td className="px-2 py-3 text-sm leading-5">
                    {VMSEmployer?.position}
                  </td>
                  <td className="px-2 py-3 text-sm leading-5">
                    {VMSEmployer?.salaryStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center my-4  mx-auto">
            <Pagination />
          </div>
        </div>
        {/* table end */}
      </div>
    </div>
  );
};

export default SalaryRecordTable;
