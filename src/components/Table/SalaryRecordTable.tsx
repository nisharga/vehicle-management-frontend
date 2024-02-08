"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { EyeOutlined } from "@ant-design/icons";
import { Image } from "antd";

const SalaryRecordTable = () => {
  const [VMSEmployers, setVMSEmployers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 5; // Change this value as needed
  // const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const headers = {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        };
        const response = await axios.get(
          ` http://localhost:3330/api/v1/driver-salary/list?page=${currentPage}&size=${itemsPerPage}&searchTerm=${searchTerm}`,
        
        );
        console.log(response.data.data.data);

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
  }, [currentPage]); // Re-fetch data when currentPage changes

  const handlePaginationClick = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  return (
    //   <div>
    //   {/* table start */}
    //   <div className="overflow-x-auto rounded-lg">
    //     {loading ? (
    //       <p>Loading...</p>
    //     ) : (
    //       <table className="min-w-full">
    //         {/* Table header */}
    //         <thead className="bg-gray-100 rounded-lg">
    //           <tr className="">
    //             {/* Table columns */}
    //             {/* Example columns */}
    //             <th>Photo</th>
    //             <th>Name</th>
    //             <th>Month</th>
    //             <th>Position</th>
    //             <th>Status</th>
    //             <th>Details</th>
    //           </tr>
    //         </thead>

    //         {/* Table body */}
    //         <tbody className="bg-white">
    //           {VMSEmployers.map((VMSEmployer) => (
    //             <tr key={VMSEmployer?.driver?.ID} className="border-b border-gray-200">
    //               <td className="px-2 py-1">
    //                 <div className="flex items-center">
    //                   <div className="">
    //                     <Image className="rounded-full" width={50} src={VMSEmployer?.driver?.avatar} alt="..." />
    //                   </div>
    //                 </div>
    //               </td>
    //               <td className="px-2 py-1">
    //                 <div className="text-sm leading-5">{VMSEmployer?.driver?.name}</div>
    //               </td>
    //               <td className="px-2 py-1 text-sm leading-5">{VMSEmployer?.driver?.month}</td>
    //               <td className="px-2 py-1 text-sm leading-5">{VMSEmployer?.driver?.position}</td>
    //               <td className="px-2 py-1 text-sm leading-5">
    //                 <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
    //                   <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
    //                   <span className="relative text-xs">{VMSEmployer?.driver?.salaryStatus}</span>
    //                 </span>
    //               </td>
    //               <td className="px-2 py-1 text-sm leading-5">
    //                 <button className="px-1 border-secondary border text-secondary rounded transition duration-300 hover:bg-secondary hover:text-white">
    //                   <EyeOutlined />
    //                 </button>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     )}

    //     {/* Pagination */}
    //     <div className="flex justify-center my-4 mx-auto">
    //       <nav className="relative z-0 inline-flex shadow-sm">
    //         <div>
    //           {/* Previous page button */}
    //           <button
    //             disabled={currentPage === 1}
    //             onClick={() => handlePaginationClick(currentPage - 1)}
    //             className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
    //             aria-label="Previous"
    //           >
    //             <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    //               <path
    //                 fillRule="evenodd"
    //                 d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //         <div>
    //           {/* Page buttons */}
    //           {[...Array(totalPages)].map((_, index) => (
    //             <button
    //               key={index}
    //               onClick={() => handlePaginationClick(index + 1)}
    //               className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 ${
    //                 currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
    //               } text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 hover:bg-gray-100`}
    //             >
    //               {index + 1}
    //             </button>
    //           ))}
    //         </div>
    //         <div>
    //           {/* Next page button */}
    //           <button
    //             disabled={currentPage === totalPages}
    //             onClick={() => handlePaginationClick(currentPage + 1)}
    //             className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
    //             aria-label="Next"
    //           >
    //             <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    //               <path
    //                 fillRule="evenodd"
    //                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </nav>
    //     </div>
    //   </div>
    //   {/* table end */}
    // </div>
    <div>
      {/* Top Search Bar */}
      <div className="flex justify-center border-b pb-3">
        <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
          <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
            <div className="flex">
              <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 text-grey-dark text-sm">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.9993 16.9993L13.1328 13.1328"
                    stroke="#455A64"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <input
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              type="text"
              className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs text-gray-500 font-thin"
              placeholder={`Search Through  Driver`}
            />
          </div>
        </div>
      </div>

      {/* table start */}
      <div className="overflow-x-auto rounded-lg">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full">
            {/* Table header */}
            <thead className="bg-gray-100 rounded-lg">
              <tr className="">
                {/* Table columns */}
                {/* Example columns */}
                <th>Photo</th>
                <th>Name</th>
                <th>Month</th>
                <th>Position</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>


            {/* Table body */}
            <tbody className="bg-white">
              {VMSEmployers.map((VMSEmployer:any) => {
                console.log(VMSEmployer.driver)
                return     <tr
                key={VMSEmployer.driver.id}
                className="border-b border-gray-200"
              >
                <td className="px-2 py-1">
                  <div className="flex items-center">
                    <div className="">
                      <Image
                        className="rounded-full"
                        width={50}
                        src={VMSEmployer?.driver?.avatar}
                        alt="..."
                      />
                    </div>
                  </div>
                </td>
                <td className="px-2 py-1">
                  <div className="text-sm leading-5">
                    {VMSEmployer?.driver?.name}
                  </div>
                </td>
                <td className="px-2 py-1 text-sm leading-5">
                  {VMSEmployer?.driver?.email}
                </td>
                <td className="px-2 py-1 text-sm leading-5">
                  {VMSEmployer?.driver?.address}
                </td>
                <td className="px-2 py-1 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative text-xs">
                      {VMSEmployer.amount}
                    </span>
                  </span>
                </td>
                <td className="px-2 py-1 text-sm leading-5">
                  <button className="px-1 border-secondary border text-secondary rounded transition duration-300 hover:bg-secondary hover:text-white">
                    <EyeOutlined />
                  </button>
                </td>
              </tr>
              }
              
            
              )}
            </tbody>
          </table>
        )}

        {/* Pagination */}
        <div className="flex justify-center my-4 mx-auto lg:fixed lg:bottom-4 lg:right-[600px]">
          <nav className="relative z-0 inline-flex shadow-sm">
            <div>
              {/* Previous page button */}
              <button
                disabled={currentPage === 1}
                onClick={() => handlePaginationClick(currentPage - 1)}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Previous"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div>
              {/* Page buttons */}
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePaginationClick(index + 1)}
                  className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  } text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 hover:bg-gray-100`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div>
              {/* Next page button */}
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePaginationClick(currentPage + 1)}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Next"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
      {/* table end */}
    </div>
  );
};

export default SalaryRecordTable;
