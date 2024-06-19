import { useEffect, useState } from "react";

import { Table } from "antd";
import { MenuClient } from "../../../services/web-api-client";

const MenuTable = () => {
  const [menu, setMenu] = useState<any>([]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Menu",
      dataIndex: "menu",
      key: "menu",
    },
    {
      title: "Msg File",
      dataIndex: "msg_file",
      key: "msg_file",
    },
    {
      title: "Menu Timeout",
      dataIndex: "menu_timeout",
      key: "menu_timeout",
    },
    {
      title: "Max Digits",
      dataIndex: "max_digits",
      key: "max_digits",
    },
    {
      title: "Action",
      key: "action",
      render: (e: any, record: any) => (
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
    window.open("/menu/" + id);
  };
  const getMenu = () => {
    const client = new MenuClient();
    client
      .getAll()
      .then((data: any) => {
        setMenu(data.menu);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getMenu();
  }, []);
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={menu}
      title={() => <p className="font-semibold uppercase py-1">Menus</p>}
      size="small"
      pagination={{ pageSize: 10, showTotal: (total) => `Total: ${total}` }}
    />
  );
};

export default MenuTable;
