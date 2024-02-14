"use client";
import axios from "axios";
import { useEffect, useState } from "react";

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

const SalaryRecordTable = () => {
  const [VMSEmployers, setVMSEmployers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 5; // Change this value as needed
  const [commonData, setCommonData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const headers = {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        };
        const response = await axios.get(
          ` https://vahicle-management-backend.vercel.app/api/v1/driver-salary/list?page=${currentPage}&size=${itemsPerPage}&searchTerm=${searchTerm}`
        );
        // console.log(response.data.data.

        setVMSEmployers(response.data.data.data);
        setTotalPages(
          Math.ceil(response?.data?.data?.data?.length / itemsPerPage)
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage, searchTerm]); // Re-fetch data when currentPage changes

  const handlePaginationClick = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle filtering based on search input
  const handleSearch = (searchTerm: any) => {
    const search = searchTerm.target.value;
    const filtered = VMSEmployers.filter(
      (i: any) => i.status.toLowerCase() === search.toLowerCase()
    );
    setFilteredData(filtered);
    // console.log(filteredData)
    // const filtered:any = VMSEmployers.filter((items:any)=> {
    //  items.status.toLowerCase().includes(search.toLowerCase())
    // setFilteredData(filtered)
  };
  // const filtered = VMSEmployers.filter((item:any) => {
  //   // You can customize this condition based on your requirements
  //   return item.status.toLowerCase().includes(searchTerm.toLowerCase());
  // });
  // console.log(filtered)
  // setFilteredData(filtered);
  // };

  // Your onChange handler for the search input
  const handleInputChange = (event: any) => {
    // const searchTerm = event.target.value;
    // if (!searchTerm) {
    //   setFilteredData( VMSEmployers);
    // } else {
    //   handleSearch(filteredData);
    // }
  };

  return (
    <div>
      {/* table start */}
      <div className="overflow-x-auto rounded-lg">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white   px-8 pt-3 rounded-bl-lg rounded-br-lg">
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
                  onChange={(e) => handleSearch(e)}
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
              {filteredData.length === 0
                ? VMSEmployers?.map((VMSEmployer: any, index) => {
                    return (
                      <tr
                        key={VMSEmployer?.ID}
                        className={`${index % 2 === 0 ? "" : "bg-gray-50"}  `}
                      >
                        <td className="px-2 py-3 text-sm leading-5">
                          {VMSEmployer?.driver?.name}
                        </td>
                        <td className="px-2 py-3 text-sm leading-5">
                          {VMSEmployer?.month}
                        </td>
                        <td className="px-2 py-3 text-sm leading-5">
                          {VMSEmployer?.position}
                        </td>
                        <td className="px-2 py-3 text-sm leading-5">
                          {VMSEmployer?.status}
                        </td>
                      </tr>
                    );
                  })
                : filteredData?.map((VMSEmployer: any, index) => {
                    return (
                      <tr
                        key={VMSEmployer?.ID}
                        className={`${index % 2 === 0 ? "" : "bg-gray-50"}  `}
                      >
                        <td className="px-2 py-3 text-sm leading-5">
                          {VMSEmployer?.driver?.name}
                        </td>
                        <td className="px-2 py-3 text-sm leading-5">
                          {VMSEmployer?.month}
                        </td>
                        <td className="px-2 py-3 text-sm leading-5">
                          {VMSEmployer?.position}
                        </td>
                        <td className="px-2 py-3 text-sm leading-5">
                          {VMSEmployer?.status}
                        </td>
                      </tr>
                    );
                  })}
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
