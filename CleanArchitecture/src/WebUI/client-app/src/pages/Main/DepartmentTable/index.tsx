import { useEffect, useState } from "react";

import { Table } from "antd";
import { DepartmentClient } from "../../../services/web-api-client";

const DepartmentTable = () => {
  const [department, setDepartment] = useState<any>([]);

  const columns = [
    {
      title: "Ext",
      dataIndex: "ext",
      key: "ext",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Prefix",
      dataIndex: "prefix",
      key: "prefix",
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
    },
    {
      title: "Greeting",
      dataIndex: "cust_greeting",
      key: "cust_greeting",
    },
    {
      title: "Greeting After Hours",
      dataIndex: "cust_greet_afterhours",
      key: "cust_greeting_afterhours",
    },
    {
      title: "Open Rules",
      dataIndex: "open_rules",
      key: "open_rules",
    },
    {
      title: "Closed Rules",
      dataIndex: "closed_rules",
      key: "closed_rules",
    },
    {
      title: "VMbox",
      dataIndex: "vmbox",
      key: "vmbox",
    },
    {
      title: "Down Rules",
      dataIndex: "down_rules",
      key: "down_rules",
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
    window.open("/department/" + id);
  };
  const getDepartment = () => {
    const client = new DepartmentClient();
    client
      .getAll()
      .then((data: any) => {
        setDepartment(data.department);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDepartment();
  }, []);
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={department}
      title={() => <p className="font-semibold uppercase py-1">Departments</p>}
      size="small"
      pagination={{ pageSize: 10, showTotal: (total) => `Total: ${total}` }}
    />
  );
};

export default DepartmentTable;
