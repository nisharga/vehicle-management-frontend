"use client";
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useGetSalaryListQuery } from "@/redux/api/baseApi";
import Pagination from "../ui/Pagination";

const SalaryTableFields = [
  { id: 1, fields: "Name" },
  { id: 2, fields: "Month" },
  { id: 3, fields: "Position" },
  { id: 4, fields: "Status" },
];

const SalaryRecordTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(5);

  const { data: VMSEmployers, isLoading, error, refetch } = useGetSalaryListQuery({
    page: currentPage,
    size: pageSize,
    searchTerm
  });

  const totalPages = useSelector((state: any) => state.baseApi?.endpoints?.getSalaryList?.totalPages ?? 0);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // refetch({ page: newPage });
  };

  // const handleSizeChange = (newSize: number) => {
  //   setPageSize(newSize);
  //   setCurrentPage(1);
  //   refetch({ page: 1, size: newSize });
  // };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
    // refetch({ page: 1, searchTerm: event.target.value });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Something went wrong</div>;

  return (
    <div className="overflow-x-auto rounded-lg">
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <div className="pb-3">
          <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-10 bg-transparent">
            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
              <div className="flex">
                <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 text-grey-dark text-sm">
                  <svg width="18" height="18" className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <input
                onChange={handleSearchChange}
                type="text"
                className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs text-gray-500 font-thin"
                placeholder={`Search Through ${SalaryTableFields.length} Driver`}
              />
            </div>
          </div>
        </div>

        <table className="min-w-full">
          <thead className="bg-gray-50 rounded-2xl">
            <tr>
              {SalaryTableFields.map((field) => (
                <th key={field.id} className="px-2 py-3 text-left text-black">{field.fields}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {(isLoading || !VMSEmployers) ? (
              <tr><td colSpan={SalaryTableFields.length}>Loading...</td></tr>
            ) : (
              VMSEmployers.map((employer: any, index: number) => (
                <tr key={employer.ID} className={`${index % 2 === 0 ? "" : "bg-gray-50"}`}>
                  <td className="px-2 py-3 text-sm leading-5">{employer.driver?.name}</td>
                  <td className="px-2 py-3 text-sm leading-5">{employer.month}</td>
                  <td className="px-2 py-3 text-sm leading-5">{employer.position}</td>
                  <td className="px-2 py-3 text-sm leading-5">{employer.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <nav className="relative z-0 inline-flex shadow-sm">
          <div>
            <a
              href="#"
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-400 focus:text-gray-400'
              }`}
              aria-label="Previous"
              onClick={() => {
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
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
            </a>
          </div>
          <div>
            {[...Array(totalPages)].map((_, i) => (
              <a
                key={i}
                href="#"
                className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium ${
                  currentPage === i + 1 ? 'text-blue-700' : 'text-gray-700 hover:bg-tertiary hover:text-gray-700 focus:text-gray-700 focus:bg-tertiary focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700'
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </a>
            ))}
          </div>
          <div>
            <a
              href="#"
              className={`-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-400 focus:text-gray-400'
              }`}
              aria-label="Next"
              onClick={() => {
                if (currentPage < totalPages) {
                  handlePageChange(currentPage + 1);
                }
              }}
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
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SalaryRecordTable;