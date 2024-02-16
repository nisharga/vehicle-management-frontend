"use client";

import AddOfficeCost from "@/app/(withlayout)/manager/office-cost/AddOfficeCost";
import { Button, MenuProps, Select } from "antd";
import ModalBox from "../ModalBox/ModalBox";
import Heading from "../ui/Heading";

const VehicleReg = [
  {
    label: "DHAKA-12345",
    value: "DHAKA-12345",
  },
  {
    label: "CHITTAGONG-67890",
    value: "CHITTAGONG-67890",
  },
  {
    label: "RAJSHAHI-23456",
    value: "RAJSHAHI-23456",
  },
  {
    label: "KHULNA-78901",
    value: "KHULNA-78901",
  },
  {
    label: "SYLHET-34567",
    value: "SYLHET-34567",
  },
  {
    label: "BARISAL-89012",
    value: "BARISAL-89012",
  },
  {
    label: "RANGPUR-45678",
    value: "RANGPUR-45678",
  },
  {
    label: "COMILLA-90123",
    value: "COMILLA-90123",
  },
  {
    label: "NARAYANGANJ-56789",
    value: "NARAYANGANJ-56789",
  },
  {
    label: "GAZIPUR-01234",
    value: "GAZIPUR-01234",
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

const year = [
  { value: "2015", label: "2015" },
  { value: "2016", label: "2016" },
  { value: "2017", label: "2017" },
  { value: "2018", label: "2018" },
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
  { value: "2026", label: "2026" },
];

const IncomeReportTableFields = [
  {
    id: 0,
    fields: "Vehicle Reg.",
  },
  {
    id: 11,
    fields: "Date",
  },
  {
    id: 3,
    fields: "Income",
  },
];

const IncomeData = [
  {
    ID: 1,
    VehicleReg: "DHAKA-12345",
    Date: "01/05/2018",
    Income: "120000",
  },
  {
    ID: 2,
    VehicleReg: "CHITTAGONG-67890",
    Date: "15/11/2017",
    Income: "80000",
  },
  {
    ID: 3,
    VehicleReg: "RAJSHAHI-23456",
    Date: "10/07/2019",
    Income: "150000",
  },
  {
    ID: 4,
    VehicleReg: "KHULNA-78901",
    Date: "28/03/2016",
    Income: "60000",
  },
  {
    ID: 5,
    VehicleReg: "SYLHET-34567",
    Date: "12/09/2022",
    Income: "175000",
  },
  {
    ID: 6,
    VehicleReg: "BARISAL-89012",
    Date: "05/02/2015",
    Income: "90000",
  },
  {
    ID: 7,
    VehicleReg: "RANGPUR-45678",
    Date: "19/04/2018",
    Income: "130000",
  },
  {
    ID: 8,
    VehicleReg: "COMILLA-90123",
    Date: "23/08/2020",
    Income: "110000",
  },
  {
    ID: 9,
    VehicleReg: "NARAYANGANJ-56789",
    Date: "08/06/2017",
    Income: "70000",
  },
  {
    ID: 10,
    VehicleReg: "GAZIPUR-01234",
    Date: "30/12/2026",
    Income: "200000",
  },
  {
    ID: 11,
    VehicleReg: "DHAKA-12345",
    Date: "14/10/2019",
    Income: "160000",
  },
  {
    ID: 12,
    VehicleReg: "CHITTAGONG-67890",
    Date: "03/01/2016",
    Income: "55000",
  },
  {
    ID: 13,
    VehicleReg: "RAJSHAHI-23456",
    Date: "21/07/2024",
    Income: "190000",
  },
  {
    ID: 14,
    VehicleReg: "KHULNA-78901",
    Date: "09/11/2015",
    Income: "75000",
  },
  {
    ID: 15,
    VehicleReg: "SYLHET-34567",
    Date: "18/02/2018",
    Income: "100000",
  },
  {
    ID: 16,
    VehicleReg: "BARISAL-89012",
    Date: "26/05/2021",
    Income: "145000",
  },
  {
    ID: 17,
    VehicleReg: "RANGPUR-45678",
    Date: "07/09/2017",
    Income: "85000",
  },
  {
    ID: 18,
    VehicleReg: "COMILLA-90123",
    Date: "13/04/2016",
    Income: "60000",
  },
  {
    ID: 19,
    VehicleReg: "NARAYANGANJ-56789",
    Date: "29/08/2019",
    Income: "120000",
  },
  {
    ID: 20,
    VehicleReg: "GAZIPUR-01234",
    Date: "04/03/2023",
    Income: "175000",
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

const IncomeTable = () => {
  return (
    <>
      <Heading>
        <p>Income Table</p>
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
                placeholder="Reg. No."
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={VehicleReg}
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
                options={year}
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
                {IncomeReportTableFields?.map((V) => (
                  <th
                    key={V?.id}
                    className="px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {V?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {IncomeData?.map((V, index) => (
                <tr
                  key={V?.ID}
                  className={`${
                    index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                  }  `}
                >
                  <td className="px-2 py-3 text-sm leading-5">
                    {V?.VehicleReg}
                  </td>
                  <td className=" px-2 py-3 text-sm leading-5">{V?.Date}</td>

                  <td className=" px-2 py-3 text-sm leading-5">{V?.Income}</td>
                  {/* <td className=" px-2 py-3 text-sm leading-5">
                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                      <HolderOutlined />
                    </Dropdown>
                  </td> */}
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-100 font-bold  border-t">
              <tr className="dark:bg-[#145374] ">
                <td colSpan={2} className="px-2 py-3 text-xl">
                  Total
                </td>
                <td className="px-2 py-3 text-xl leading-5">000000000 TK</td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default IncomeTable;
