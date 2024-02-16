// "use client";
// import AddOfficeCost from "@/app/(withlayout)/manager/office-cost/AddOfficeCost";
// import { HolderOutlined } from "@ant-design/icons";
// import { Button, Dropdown, MenuProps, Select } from "antd";
// import ModalBox from "../ModalBox/ModalBox";
// import Heading from "../ui/Heading";
// import { useGetAllOfficeCostQuery } from "@/redux/api/officeCostApi";
// import { useState } from "react";

// const years = [
//   {
//     label: "2024",
//     value: "2024",
//   },
//   {
//     label: "2025",
//     value: "2025",
//   },
//   {
//     label: "2026",
//     value: "2026",
//   },
// ];
// const month = [
//   { value: "january", label: "january" },
//   { value: "February", label: "February" },
//   { value: "March", label: "March" },
//   { value: "April", label: "April" },
//   { value: "May", label: "May" },
//   { value: "Jun", label: "Jun" },
//   { value: "July", label: "July" },
//   { value: "August", label: "August" },
//   { value: "September", label: "September" },
//   { value: "October", label: "October" },
//   { value: "November", label: "November" },
//   { value: "December", label: "December" },
// ];

// const OfficeCostTableFields = [
//   {
//     id: 0,
//     fields: "Items",
//   },
//   {
//     id: 1,
//     fields: "Description",
//   },
//   {
//     id: 2,
//     fields: "Cost(Monthly)",
//   },
//   {
//     id: 3,
//     fields: "Edit",
//   },
// ];

// const OfficeCostSectors = [
//   {
//     ID: 1,
//     title: "Office Rent",
//     description: "Cost of leasing office space",
//     cost: 1,
//   },
//   {
//     ID: 2,
//     title: "Utilities",
//     description: "Electricity, water, gas",
//     cost: 3,
//   },
//   {
//     ID: 3,
//     title: "Internet and Phone",
//     description: "Internet service provider, phone lines",
//     cost: 2,
//   },
//   {
//     ID: 4,
//     title: "Office Supplies",
//     description: "Pens, paper, printer ink, etc.",
//     cost: 5,
//   },
//   {
//     ID: 5,
//     title: "Cleaning Services",
//     description: "Professional cleaning services",
//     cost: 2,
//   },
//   {
//     ID: 6,
//     title: "Maintenance",
//     description: "Repairs and upkeep for office equipment",
//     cost: 1,
//   },
//   {
//     ID: 7,
//     title: "Insurance",
//     description: "Office insurance premiums",
//     cost: 8,
//   },
//   {
//     ID: 8,
//     title: "Security",
//     description: "Security services or systems",
//     cost: 4,
//   },
//   {
//     ID: 9,
//     title: "Waste Management",
//     description: "Garbage collection and recycling services",
//     cost: 4,
//   },
//   {
//     ID: 10,
//     title: "Miscellaneous Expenses",
//     description: "Any other relevant expenses",
//     cost: 4,
//   },
// ];

// const items: MenuProps["items"] = [
//   {
//     key: "1",
//     label: (
//       <Button
//         type="text"
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.aliyun.com"
//       >
//         Edit
//       </Button>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <Button
//         danger
//         type="text"
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.luohanacademy.com"
//       >
//         Delete
//       </Button>
//     ),
//   },
// ];

// const OfficeCostTable = () => {
//   const [current, setCurrent] = useState(1);
//   const { data: officeCostData } = useGetAllOfficeCostQuery({});
//   //salary calculate
//   const totalCost = OfficeCostSectors.reduce((accumulator, currentItem) => {
//     return accumulator + currentItem.cost;
//   }, 0);

//   return (
//     <>
//       <Heading>
//         <p>Office Cost</p>
//       </Heading>
//       <div className="overflow-x-auto rounded-tl-xl rounded-tr-xl">
//         <div
//           className="align-middle inline-block min-w-full shadow
//           overflow-hidden bg-white dark:bg-[#00334E]"
//         >
//           <div className="flex justify-between p-2">
//             <div className="flex gap-x-5">
//               <Select
//                 showSearch
//                 style={{ width: 200 }}
//                 placeholder="Year..."
//                 optionFilterProp="children"
//                 filterOption={(input, option) =>
//                   (option?.label ?? "").includes(input)
//                 }
//                 filterSort={(optionA, optionB) =>
//                   (optionA?.label ?? "")
//                     .toLowerCase()
//                     .localeCompare((optionB?.label ?? "").toLowerCase())
//                 }
//                 options={years}
//               />
//               <Select
//                 showSearch
//                 style={{ width: 200 }}
//                 placeholder="Month..."
//                 optionFilterProp="children"
//                 filterOption={(input, option) =>
//                   (option?.label ?? "").includes(input)
//                 }
//                 filterSort={(optionA, optionB) =>
//                   (optionA?.label ?? "")
//                     .toLowerCase()
//                     .localeCompare((optionB?.label ?? "").toLowerCase())
//                 }
//                 options={month}
//               />
//             </div>

//             <ModalBox btnLabel="Add Office Cost">
//               <AddOfficeCost />
//             </ModalBox>
//           </div>
//           <br />
//           <table className="min-w-full ">
//             <thead className="bg-gray-50 rounded-2xl border-b">
//               <tr className="dark:bg-[#145374]">
//                 {OfficeCostTableFields?.map((OfficeCostTableField) => (
//                   <th
//                     key={OfficeCostTableField?.id}
//                     className="px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
//                   >
//                     {OfficeCostTableField?.fields}
//                   </th>
//                 ))}
//               </tr>
//             </thead>

//             <tbody className="dark:text-[#E8E8E8]">
//               {officeCostData?.data?.data?.map((OfficeCostSector:any, index:number) => (
//                 <tr
//                   key={OfficeCostSector?.ID}
//                   className={`${
//                     index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
//                   }  `}
//                 >
//                   <td className="px-2 py-3 text-sm leading-5">
//                     {OfficeCostSector?.title}
//                   </td>

//                   <td className=" px-2 py-3 text-sm leading-5">
//                     {OfficeCostSector?.description}
//                   </td>

//                   <td className=" px-2 py-3 text-sm leading-5">
//                     {OfficeCostSector?.cost}
//                   </td>
//                   <td className=" px-2 py-3 text-sm leading-5">
//                     <Dropdown menu={{ items }} placement="bottomRight" arrow>
//                       <HolderOutlined />
//                     </Dropdown>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//             <tfoot className="bg-gray-100 font-bold  border-t">
//               <tr className="dark:bg-[#145374]">
//                 <td className="  px-2 py-3">
//                   <div className="text-sm leading-5 ">Total</div>
//                 </td>
//                 <td className="px-2 py-3 text-sm leading-5">
//                   Total monthly office management cost
//                 </td>
//                 <td className="px-2 py-3 text-sm leading-5">{totalCost}</td>
//                 <td className="px-2 py-3 text-sm leading-5"></td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//         {/* table end */}
//       </div>
//     </>
//   );
// };

// export default OfficeCostTable;

"use client";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, PaginationProps, Popconfirm, message } from "antd";
import ModalBox from "../ModalBox/ModalBox";
///import Pagination from "../ui/Pagination";

import {
  useDeleteOfficeCostMutation,
  useGetAllOfficeCostQuery,
} from "@/redux/api/officeCostApi";
import { useState } from "react";
import Heading from "../ui/Heading";
import AddOfficeCost from "@/app/(withlayout)/manager/office-cost/AddOfficeCost";
import { officeCostFields } from "./StaticTableData";
import Pagination from "../ui/Pagination";
import ViewOfficeCost from "../ui/ViewOfficeCost";
import UpdateOfficeCostForm from "../Forms/UpdateOfficeCostForm";

const OfficeCostTable = () => {
  const [deleteOfficeCost] = useDeleteOfficeCostMutation();

  const confirm = async (e: any) => {
    console.log("🚀 ~ confirm ~ e:", e);
    const res = await deleteOfficeCost(e);
    console.log("🚀 ~ confirm ~ res:", res);
    // message.success(`${e} Deleted Sucessfully`);
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };

  const [current, setCurrent] = useState(1);
  const [vehicleData, setVehicleData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  const { data: officeCostData, isLoading } = useGetAllOfficeCostQuery(current);
  //searching code
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Heading>
        <p>Office Cost</p>
      </Heading>
      <div className="overflow-x-auto rounded-tl-xl rounded-tr-xl">
        <div
          className="align-middle inline-block min-w-full shadow 
          overflow-hidden bg-white dark:bg-[#00334E]"
        >
          {/* search bar */}
          <div className="flex justify-between mx-2 my-2">
            <div className=" max-w-[80%]">
              <Input
                size="large"
                placeholder={`Search by Cost title of total ${officeCostData?.data?.data?.length} Trips`}
                prefix={<SearchOutlined />}
                onChange={(event) => {
                  setSearchTerm(event?.target?.value);
                }}
              />
            </div>

            <ModalBox btnLabel="Add Office Cost">
              <AddOfficeCost />
            </ModalBox>
          </div>

          {/* table start */}
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {(officeCostFields ?? [])?.map((officeCostField) => (
                  <th
                    key={officeCostField?.id}
                    className=" px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {officeCostField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {((officeCostData as any)?.data?.data ?? [])
                ?.filter((V: any) => {
                  if (searchTerm == "") {
                    return V;
                  } else if (
                    V?.cost_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return V;
                  }
                })
                ?.map((officeCost: any, index: number) => (
                  <tr
                    key={officeCost?.id}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">
                      {officeCost?.cost_name}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {officeCost?.amount}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {officeCost?.createdAt}
                    </td>

                    <td className="px- py-3 text-sm leading-5">
                      <div className="flex gap-x-1 ">
                        <ModalBox
                          title="View Details"
                          modalWidth={300}
                          btnLabel={
                            <span className="item justify-center items-center">
                              <EyeOutlined />
                            </span>
                          }
                        >
                          <ViewOfficeCost officeCostData={officeCost} />
                        </ModalBox>

                        <ModalBox
                          title="Edit officeCost Data"
                          btnLabel={
                            <span className="item justify-center items-center">
                              <EditOutlined />
                            </span>
                          }
                        >
                          <UpdateOfficeCostForm officeCostData={officeCost} />
                        </ModalBox>

                        <Popconfirm
                          title="Delete the task"
                          description="Are you sure to delete this task?"
                          onConfirm={() => confirm(officeCost?.id)}
                          onCancel={() => cancel}
                          cancelText="No"
                          okText="Delete"
                          okType="danger"
                        >
                          <Button danger>
                            <span className="item justify-center items-center">
                              <DeleteOutlined />
                            </span>
                          </Button>
                        </Popconfirm>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center py-8">
            {/* <Pagination
              current={current || 1}
              onChange={onChange}
              total={officeCostData.data?.meta?.total | 30}
            /> */}
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default OfficeCostTable;
