import { useEffect, useState } from "react";

import { Table } from "antd";
import { ConditionalClient } from "../../../services/web-api-client";

const ConditionalTable = () => {
  const [conditional, setConditional] = useState<any>([]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Rules",
      dataIndex: "rules",
      key: "rules",
    },
    {
      title: "Line Limit",
      dataIndex: "line_limit",
      key: "line_limit",
    },
    {
      title: "Line Group",
      dataIndex: "line_group",
      key: "line_group",
    },
    {
      title: "Busy Rule",
      dataIndex: "busy_rule",
      key: "busy_rule",
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
    window.open("/conditional/" + id);
  };
  const getConditional = () => {
    const client = new ConditionalClient();
    client
      .getAll()
      .then((data: any) => {
        setConditional(data.conditional);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getConditional();
  }, []);
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={conditional}
      title={() => <p className="font-semibold uppercase py-1">Conditionals</p>}
      size="small"
      pagination={{ pageSize: 10, showTotal: (total) => `Total: ${total}` }}
    />
  );
};

export default ConditionalTable;
