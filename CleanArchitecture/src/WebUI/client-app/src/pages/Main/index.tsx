import Header from "../Header";

import ConditionalTable from "./ConditionalTable";
import CustomerNumber from "./CustomerNumber";
import DepartmentTable from "./DepartmentTable";
import MenuTable from "./MenuTable";

const Main = () => {
  return (
    <div className="w-full h-[100vh]">
      <Header publish={false}></Header>
      <div className="flex">
        <div className="flex-1 h-full flex flex-col gap-10 p-10">
          <div className="border rounded-lg">
            <CustomerNumber></CustomerNumber>
          </div>
          <div className="border rounded-lg">
            <ConditionalTable></ConditionalTable>
          </div>
          <div className="border rounded-lg">
            <DepartmentTable></DepartmentTable>
          </div>
          <div className="border rounded-lg">
            <MenuTable></MenuTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
