import { useEffect, useState } from "react";

import { Table } from "antd";
import { CustomerNumberClient } from "../../../services/web-api-client";

const CustomerNumber = () => {
  const [number, setNumber] = useState<any>([]);

  const columns = [
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Conditional or Rules",
      dataIndex: "conditional_name",
      key: "conditional_name",
    },
    {
      title: "SMS",
      dataIndex: "sms_enabled",
      key: "sms_enabled",
      render: (e: any, record: any) => (
        <>{record.sms_enabled == true ? "True" : "False"}</>
      ),
    },
    {
      title: "Server",
      dataIndex: "sip_server",
      key: "sip_server",
    },
    {
      title: "Server Backup",
      dataIndex: "sip_server_backup",
      key: "sip_server_backup",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <p
          className=" text-[#1677FF] cursor-pointer"
          onClick={() => {
            handleEdit(record.id);
          }}
        >
          Edit
        </p>
      ),
    },
  ];
  const handleEdit = (id: any) => {
    window.open("/phone-number/" + id);
  };
  const getNumber = () => {
    const client = new CustomerNumberClient();
    client
      .getAll()
      .then((data: any) => {
        setNumber(data.customerNumber);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getNumber();
  }, []);
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={number}
      title={() => (
        <p className="font-semibold uppercase py-1">Phone Numbers (DIDs)</p>
      )}
      size="small"
      pagination={{
        pageSize: 10,
        showTotal: (total) => `Total: ${total}`,
      }}
    />
  );
};

export default CustomerNumber;
