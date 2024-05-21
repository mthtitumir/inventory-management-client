import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import { Icon } from "../../icons";
import { ReactNode } from "react";

type AddHeaderProps = { text: string; children: ReactNode };
const AddHeader = ({ text, children }: AddHeaderProps) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      style={{ padding: "10px", borderBottom: "1px solid #e6f4ff" }}
    >
      <h2 style={{ fontWeight: "500" }}>{text}</h2>
      <Flex align="center" gap={8}>
        {children}
        <Link to={"/"}>
          <Button
            shape="circle"
            icon={
              <Icon.Close style={{ fontWeight: "400", fontSize: "1.5em" }} />
            }
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default AddHeader;
