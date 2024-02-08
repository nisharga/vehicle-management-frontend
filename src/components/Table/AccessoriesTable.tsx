"use client";

import { HolderOutlined } from "@ant-design/icons";
import { Button, Dropdown, Image, MenuProps } from "antd";
import CommonButton from "../ui/CommonButton";
{
  /* <Image className="rounded-lg" width={70} src={image} alt="..." /> */
}

const accessoriesTableFields = [
  {
    id: 0,
    fields: "Image",
  },
  {
    id: 1,
    fields: "Product Name",
  },
  {
    id: 2,
    fields: "Quantity",
  },
  {
    id: 4,
    fields: "Purchase Date",
  },
  {
    id: 3,
    fields: "Expiration Date",
  },
  {
    id: 5,
    fields: "Price",
  },
  {
    id: 6,
    fields: "Action",
  },
];

const accessoriesList = [
  {
    ID: 1,
    image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    productName: "Gash cylinder",
    quantity: 10,
    purchaseDate: "5/12/2020",
    expirationDate: "10/12/2025",
    price: 1500,
  },
  {
    ID: 2,
    image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    productName: "Gash cylinder",
    quantity: 10,
    purchaseDate: "5/12/2020",
    expirationDate: "10/12/2025",
    price: 1500,
  },
  {
    ID: 3,
    image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    productName: "Gash cylinder",
    quantity: 10,
    purchaseDate: "5/12/2020",
    expirationDate: "10/12/2025",
    price: 1500,
  },
  {
    ID: 4,
    image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    productName: "Gash cylinder",
    quantity: 10,
    purchaseDate: "5/12/2020",
    expirationDate: "10/12/2025",
    price: 1500,
  },
  {
    ID: 5,
    image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    productName: "Gash cylinder",
    quantity: 10,
    purchaseDate: "5/12/2020",
    expirationDate: "10/12/2025",
    price: 1500,
  },
  {
    ID: 6,
    image: "https://i.ibb.co/sw7mvs5/pic10.jpg",
    productName: "Gash cylinder",
    quantity: 10,
    purchaseDate: "5/12/2020",
    expirationDate: "10/12/2025",
    price: 1500,
  },
];

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Button
        type="text"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Edit
      </Button>
    ),
  },
  {
    key: "2",
    label: (
      <Button
        danger
        type="text"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Delete
      </Button>
    ),
  },
];
const AccessoriesTable = () => {
  return (
    <>
      <div className="overflow-x-auto rounded-lg">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg py-10">
          <p className="text-center text-xl">Vehicle Accessories</p>

          {/* search bar */}
          <div className="flex justify-between border-b pb-3">
            <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-10 bg-transparent">
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
                  type="text"
                  className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs text-gray-500 font-thin"
                  placeholder={`Search Through ${accessoriesList?.length} Vehicle`}
                />
              </div>
            </div>
            <CommonButton content="Add Accessories" />
          </div>

          <br />
          <table className="min-w-full ">
            <thead className="bg-gray-50 rounded-2xl">
              <tr className="">
                {accessoriesTableFields?.map((OfficeCostTableField) => (
                  <th
                    key={OfficeCostTableField?.id}
                    className=" px-2 py-3 text-left text-black"
                  >
                    {OfficeCostTableField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white">
              {accessoriesList?.map((accessories, index) => (
                <tr
                  key={accessories?.ID}
                  className={`${index % 2 === 0 ? "" : "bg-gray-50"}  `}
                >
                  <td className=" px-2 py-1">
                    <Image
                      className="rounded-lg"
                      width={50}
                      src={accessories?.image}
                      alt="..."
                    />
                  </td>

                  <td className=" px-2 py-3 text-sm leading-5">
                    {accessories?.productName}
                  </td>

                  <td className=" px-2 py-3 text-sm leading-5">
                    {accessories?.quantity}
                  </td>
                  <td className=" px-2 py-3 text-sm leading-5">
                    {accessories?.purchaseDate}
                  </td>
                  <td className=" px-2 py-3 text-sm leading-5">
                    {accessories?.expirationDate}
                  </td>
                  <td className=" px-2 py-3 text-sm leading-5">
                    {accessories?.price}
                  </td>
                  <td className=" px-2 py-3 text-sm leading-5">
                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                      <HolderOutlined />
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default AccessoriesTable;
