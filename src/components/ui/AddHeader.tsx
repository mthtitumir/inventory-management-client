import { Button, Flex } from "antd";
import { IoMdClose } from "react-icons/io";

type AddHeaderProps = {text: string};
const AddHeader = ({text}: AddHeaderProps) => {
  return (
    <Flex justify="space-between" align="center" style={{padding: "10px", borderBottom: "1px solid #e6f4ff"}}>
        <h2 style={{fontWeight: "500"}}>{text}</h2>
        <Button shape="circle" icon={<IoMdClose  style={{fontWeight: "400", fontSize: "1.5em"}} />} />
    </Flex>
  )
}

export default AddHeader