import { Button } from "antd";
import { StarOutlined } from "@ant-design/icons";
import myImage from "../../assets/images/logo.png";

const Header = ({ nodes, edges, publish = false }: any) => {
  const handleClick = () => {};

  return (
    <div className="py-3 px-4 pl-4 flex items-center justify-between border-b shadow-sm">
      <div className="w-28 flex items-center gap-16">
        <img src={myImage} alt="" />
      </div>
      <div className="flex gap-2">
        <Button
          className={`${publish ? "" : "opacity-0 pointer-events-none "}`}
          onClick={handleClick}
          type="primary"
          icon={<StarOutlined />}
        >
          Publish
        </Button>
      </div>
    </div>
  );
};

export default Header;
