"use client";
import AddOfficeCost from "@/app/(withlayout)/manager/office-cost/AddOfficeCost";
import { HolderOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Select } from "antd";
import ModalBox from "../ModalBox/ModalBox";
import Heading from "../ui/Heading";

const years = [
  {
    label: "2024",
    value: "2024",
  },
  {
    label: "2025",
    value: "2025",
  },
  {
    label: "2026",
    value: "2026",
  },
];
const month = [
  { value: "january", label: "january" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "Jun", label: "Jun" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const OfficeCostTableFields = [
  {
    id: 0,
    fields: "Items",
  },
  {
    id: 1,
    fields: "Description",
  },
  {
    id: 2,
    fields: "Cost(Monthly)",
  },
  {
    id: 3,
    fields: "Edit",
  },
];

const OfficeCostSectors = [
  {
    ID: 1,
    title: "Office Rent",
    description: "Cost of leasing office space",
    cost: 1,
  },
  {
    ID: 2,
    title: "Utilities",
    description: "Electricity, water, gas",
    cost: 3,
  },
  {
    ID: 3,
    title: "Internet and Phone",
    description: "Internet service provider, phone lines",
    cost: 2,
  },
  {
    ID: 4,
    title: "Office Supplies",
    description: "Pens, paper, printer ink, etc.",
    cost: 5,
  },
  {
    ID: 5,
    title: "Cleaning Services",
    description: "Professional cleaning services",
    cost: 2,
  },
  {
    ID: 6,
    title: "Maintenance",
    description: "Repairs and upkeep for office equipment",
    cost: 1,
  },
  {
    ID: 7,
    title: "Insurance",
    description: "Office insurance premiums",
    cost: 8,
  },
  {
    ID: 8,
    title: "Security",
    description: "Security services or systems",
    cost: 4,
  },
  {
    ID: 9,
    title: "Waste Management",
    description: "Garbage collection and recycling services",
    cost: 4,
  },
  {
    ID: 10,
    title: "Miscellaneous Expenses",
    description: "Any other relevant expenses",
    cost: 4,
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

const OfficeCostTable = () => {
  //salary calculate
  const totalCost = OfficeCostSectors.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.cost;
  }, 0);

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
          <div className="flex justify-between p-2">
            <div className="flex gap-x-5">
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Year..."
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={years}
              />
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Month..."
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={month}
              />
            </div>

            <ModalBox btnLabel="Add Office Cost">
              <AddOfficeCost />
            </ModalBox>
          </div>
          <br />
          <table className="min-w-full ">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {OfficeCostTableFields?.map((OfficeCostTableField) => (
                  <th
                    key={OfficeCostTableField?.id}
                    className="px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {OfficeCostTableField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {OfficeCostSectors?.map((OfficeCostSector, index) => (
                <tr
                  key={OfficeCostSector?.ID}
                  className={`${
                    index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                  }  `}
                >
                  <td className="px-2 py-3 text-sm leading-5">
                    {OfficeCostSector?.title}
                  </td>

                  <td className=" px-2 py-3 text-sm leading-5">
                    {OfficeCostSector?.description}
                  </td>

                  <td className=" px-2 py-3 text-sm leading-5">
                    {OfficeCostSector?.cost}
                  </td>
                  <td className=" px-2 py-3 text-sm leading-5">
                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                      <HolderOutlined />
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-100 font-bold  border-t">
              <tr className="dark:bg-[#145374]">
                <td className="  px-2 py-3">
                  <div className="text-sm leading-5 ">Total</div>
                </td>
                <td className="px-2 py-3 text-sm leading-5">
                  Total monthly office management cost
                </td>
                <td className="px-2 py-3 text-sm leading-5">{totalCost}</td>
                <td className="px-2 py-3 text-sm leading-5"></td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default OfficeCostTable;
