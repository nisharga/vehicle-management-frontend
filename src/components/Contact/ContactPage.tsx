"use client";

import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import Heading from "../ui/Heading";
import ContactCard from "./ContactCard";
import { ContactData } from "./ContactData";

const ContactPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Heading>All Contacts</Heading>

      {/* search  */}
      <div className="flex justify-center pb-3">
        <div className="inline-flex border rounded w-[70%] md:w-[40%]   h-10 bg-transparent">
          <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
            <div className="flex bg-gray-400 dark:bg-slate-500">
              <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm ">
                <SearchOutlined style={{ color: "#fff", fontSize: "15px" }} />
              </span>
            </div>
            <input
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              type="text"
              className="flex-shrink flex-grow flex-auto leading-normal  w-px border border-none border-l-0 rounded rounded-l-none px-3 relative  text-gray-500 dark:text-gary-50 font-thin dark:bg-gray-400"
              placeholder={`Search by Name of ${ContactData.length} Data`}
            />
          </div>
        </div>
      </div>
      {/* search end */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {ContactData?.filter((value) => {
          if (searchTerm == "") {
            return value;
          } else if (
            value.firstName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        })?.map((contacts) => (
          <ContactCard key={contacts?.id} contacts={contacts} />
        ))}
      </div>
    </>
  );
};

export default ContactPage;
