import { Avatar, Button, Flex, Select } from "antd";
import { useGetAllTradingPartnerQuery, useGetSingleTradingPartnerQuery } from "../../redux/features/buyer/tradingPartnerApi";
import { transformedArrayToSelectOptions } from "../../utils/transformArrayToSelectOptions";
import { SetStateAction, useState } from "react";
import Spinner from "../ui/Spinner";
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { LuShoppingCart } from "react-icons/lu";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AddToCartModal = ({ itemId }: { itemId: string }) => {
    const [buyerId, setBuyerId] = useState<SetStateAction<undefined | string>>(undefined);
    const { data: buyersData } = useGetAllTradingPartnerQuery({ type: "buyer", select: "name _id email" });
    const { data: singleBuyerData, isLoading: isSingleBuyerDataLoading } = useGetSingleTradingPartnerQuery(buyerId, { skip: !buyerId });
    const selectSupplierOptions = transformedArrayToSelectOptions(buyersData?.data);
    const buyer = singleBuyerData?.data;
    // console.log(selectSupplierOptions);
    console.log(isSingleBuyerDataLoading);

    const onBuyerSelect = (value: string | undefined) => {
        // console.log(value);
        setBuyerId(value);
    }
    const handleCartOnClick = () => {
        toast.success("Added To Cart!")
    }
    return (
        <Flex vertical gap={12}>
            <h2 style={{ fontWeight: "500" }}>Select Buyer</h2>
            <Select
                // showSearch
                placeholder="Select a buyer"
                // optionFilterProp="children"
                style={{ width: "100%", borderRadius: "2px" }}
                onSelect={onBuyerSelect}
                // value={searchTerm}
                // defaultValue={defaultValues.supplier}
                // onChange={onChange}
                // onSearch={onSupplierSearch}
                // filterOption={(input, option) => (option?.label ?? '').includes(input)}
                // filterSort={(optionA, optionB) =>
                //     (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                // }
                options={selectSupplierOptions}
                dropdownRender={(menu) => (
                    <>{menu}<p>Hello</p></>)}
            />
            {singleBuyerData && (
                (isSingleBuyerDataLoading) ?
                    <Spinner /> :
                    <Flex vertical gap={8}>
                        <h4>Customer Info : </h4>
                        {/* buyer information  */}
                        <Flex gap={10} align='center'>
                            {/* <img src={buyer?.profilePicture ? buyer?.profilePicture : ""} alt="" /> */}
                            <Flex vertical gap={5} style={{ borderRight: "1px solid #ebeaf2", paddingRight: "10px" }} justify='center' align='center'>
                                <Avatar shape='square' size={72} icon={<UserOutlined />} src={buyer?.profilePicture} />
                                <Button style={{ width: "100%", backgroundImage: "linear-gradient(to right, rgb(234, 88, 12), rgb(249, 115, 22))", color: "white" }} size='small' >Diamond</Button>
                            </Flex>
                            <Flex vertical justify='center'>
                                <h4>Name : {buyer?.name}</h4>
                                <h4>Email : {buyer?.email}</h4>
                                <h4>Phone Number : {buyer?.phoneNumber}</h4>
                                <h4>Coins : {buyer?.coinsEarned}</h4>
                                <h4>Coins : {buyer?.coinsEarned}</h4>
                            </Flex>
                        </Flex>
                        <Flex justify="center" gap={10}>
                            <Link to={"/sales/carts"}><Button style={{ borderColor: "green", color: "green", width: "100%" }} icon={<ShoppingCartOutlined />}> Go To Carts</Button></Link>
                            <Button style={{ borderColor: "green", color: "green", width: "100%" }} icon={<ShoppingCartOutlined />}> Checkout </Button>
                            <Button onClick={() => handleCartOnClick()} style={{ borderColor: "orange", color: "orange" }} icon={<LuShoppingCart style={{ color: "orange" }} />}>Add To Cart</Button>
                        </Flex>
                    </Flex>
            )}
        </Flex>
    )
}

export default AddToCartModal