"use client";
import { SearchOutlined } from "@ant-design/icons";
// import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Modal,
  PaginationProps,
  Select,
  Spin,
  message,
} from "antd";
import { useModalForm } from "sunflower-antd";
// import { Input, PaginationProps, Dropdown, Space, MenuProps } from "antd";

import {
  useGetManageRequestsQuery,
  useUpdateRequestMutation,
} from "@/redux/api/manageRequest";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { ManageRequestTableFields } from "./StaticTableData";

interface IProps {
  id?: string;
  approve_status?: string;
  title?: string;
  comment?: string;
}

const ManageRequestTable = () => {
  const [form] = Form.useForm();
  const [updateRequest] = useUpdateRequestMutation();
  const [commentId, setCommentId] = useState("");

  const [current, setCurrent] = useState(1);
  const [manageRequests, setManageRequests] = useState({
    data: [],
    meta: { limit: 0, page: 0, total: 0 },
  });

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  const { data: manageRequest } = useGetManageRequestsQuery(current);

  useEffect(() => {
    if (manageRequest != undefined) {
      setManageRequests(manageRequest.data);
    }
  }, [manageRequest]);
  const { modalProps, formProps, show, formLoading, formValues, formResult } =
    useModalForm({
      defaultVisible: false,
      autoSubmitClose: true,
      autoResetForm: true,
      async submit({ comment }) {
        //   console.log('beforeSubmit');
        //   await new Promise(r => setTimeout(r, 1000));
        //   console.log('afterSubmit', comment,'Id',commentId);

        await updateRequest({
          id: commentId,
          data: { approve_status: "REJECT", comment: comment },
        });
        return "ok";
      },
      form,
    });

  const handleChange = async (value: string) => {
    const tempData = value.split("/");
    try {
      if (tempData[1] === "REJECT") {
        show();
        setCommentId(tempData[0]);
      } else {
        const res = await updateRequest({
          id: tempData[0],
          data: { approve_status: tempData[1] },
        });
        console.log(res);
        if ((res as any)?.data?.statusCode === 200) {
          message.success("Request status updated");
        }
      }
    } catch (error: any) {
      message.error(error);
    }
  };

  //searching code
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      {/* table start */}
      <div className="overflow-x-auto rounded-tl-xl rounded-tr-x">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white dark:bg-[#00334E]">
          <div className="flex justify-between mx-2 my-2">
            <div className=" max-w-[80%]">
              <Input
                size="large"
                placeholder={`Search in of total ${manageRequest?.length} Manage request`}
                prefix={<SearchOutlined />}
                onChange={(event) => {
                  setSearchTerm(event?.target?.value);
                }}
              />
            </div>
          </div>

          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {ManageRequestTableFields?.map((ManageRequestTableField) => (
                  <th
                    key={ManageRequestTableField?.id}
                    className=" px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {ManageRequestTableField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {((manageRequests as any)?.data ?? [])?.map(
                (request: IProps, index: number) => (
                  <tr
                    key={request?.id}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">
                      <p className="text-sm font-bold">{request?.id}</p>
                    </td>
                    <td className="px-2 py-3 text-sm leading-5">
                      {request?.title}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {request?.comment === null
                        ? "No comment"
                        : request?.comment}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {/* <Select onChange={onChange}>
                                                <Select.Option value="sample">Sample</Select.Option>
                                            </Select> */}

                      <Select
                        defaultValue={request?.approve_status}
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                          { value: `${request?.id}/APPROVE`, label: "APPROVE" },
                          { value: `${request?.id}/PENDING`, label: "PENDING" },
                          { value: `${request?.id}/REJECT`, label: "REJECT" },
                        ]}
                      />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          <div className="flex justify-center items-center py-8">
            <Pagination
              current={current}
              onChange={onChange}
              total={manageRequests?.meta?.total}
              // total={availableUser?.meta?.total | 30}
            />
          </div>
        </div>
        {/* table end */}
      </div>

      <Modal {...modalProps} title="Make comment" okText="submit" width={600}>
        <Spin spinning={formLoading}>
          <>
            {/* <p>
                            submit: username {formValues.username} email {formValues.email}
                        </p> */}
            <p>result: {formResult}</p>
            <Form layout="inline" {...formProps}>
              <Form.Item
                label="Comment"
                name="comment"
                rules={[{ required: true, message: "Please input comment" }]}
              >
                <Input placeholder="comment" className="w-full" />
              </Form.Item>

              {/* <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input email',
                                        type: 'email',
                                    },
                                ]}
                            >
                                <Input placeholder="Email" />
                            </Form.Item> */}
            </Form>
          </>
        </Spin>
      </Modal>
    </>
  );
};

export default ManageRequestTable;
