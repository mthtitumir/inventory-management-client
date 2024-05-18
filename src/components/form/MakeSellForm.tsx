/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useState } from 'react'
import { Avatar, Button, Col, Flex, Form, Input, Row, Select, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useGetSingleFlowerQuery } from '../../redux/features/flower/flowerApi';
import { useGetAllDiscountsQuery } from '../../redux/features/discount/discountApi';
import { useAddSalesMutation } from '../../redux/features/sales/salesApi';
import toast from 'react-hot-toast';
import { TDiscount } from '../../types';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import Spinner from '../ui/Spinner';
import AddHeader from '../ui/AddHeader';
import MyDivider from '../ui/MyDivider';
import { useGetAllTradingPartnerQuery, useGetSingleTradingPartnerQuery } from '../../redux/features/buyer/tradingPartnerApi';
import { transformedArrayToSelectOptions } from '../../utils/transformArrayToSelectOptions';

const MakeSellForm = () => {
    const { itemId } = useParams();
    const [subTotal, setSubTotal] = useState(0);
    const [code, setCode] = useState("");
    // const [discountCode, setDiscountCode] = useState(code);
    const [discount, setDiscount] = useState(0);
    const [discountId, setDiscountId] = useState<SetStateAction<undefined | string>>(undefined);
    const [buyerId, setBuyerId] = useState(undefined);
    // const seller: TUser | null = useAppSelector(useCurrentUser);
    const { data, isLoading } = useGetSingleFlowerQuery(itemId);
    const { data: discountsData } = useGetAllDiscountsQuery("");
    // const { data: discountData, isLoading: isDiscountLoading } = useGetSingleDiscountQuery(discountCode);
    // console.log({company: seller?.company, discountsData, isDiscountsDataLoading}); |, isLoading: isDiscountsDataLoading
    const [addSales] = useAddSalesMutation();
    const { data: buyersData } = useGetAllTradingPartnerQuery({ type: "buyer", select: "name _id email" });
    const { data: singleBuyerData, isLoading: isSingleBuyerDataLoading } = useGetSingleTradingPartnerQuery(buyerId, { skip: !buyerId });
    const selectSupplierOptions = transformedArrayToSelectOptions(buyersData?.data);
    const discounts = discountsData?.data;
    const buyer = singleBuyerData?.data;

    // console.log(discounts);
    // console.log(data, isLoading);
    const onFinish = (values: any) => {
        const salesData = {
            buyer: values?.buyer,
            dateOfSale: new Date(),
            items: [
                {
                    product: itemId,
                    quantity: Number(values?.quantity)
                }
            ],
            subTotal: Number(subTotal.toFixed(2)),
            total: Number((subTotal - discount).toFixed(2)),
            ...(discountId && { discount: discountId, discountUsingCode: discount })
        };
        console.log({ salesData, quantity });

        if (values.quantity > quantity || values.quantity === 0) {
            toast.error("Available quantity exceeded!")
        } else {
            addSales(salesData).unwrap().then((payload: any) => {
                toast.success(payload.message);
                console.log(payload);
                
            }).catch((error: any) => {
                toast.error(error.message || "Something went wrong!")
            })
            // setIsModalOpen(false);
        }
    };
    const handleDiscount = () => {
        const inputDiscount: TDiscount = discounts?.find((dis: TDiscount) => dis.code === code);
        // console.log(code);
        if (inputDiscount) {
            const { type, startDate, endDate, startTime, endTime, percentOff, amountOff, minOrderValue, minOrderQuantity, valid } = inputDiscount;
            const currentTime = dayjs().format('HH:mm');
            const timeToCheck = dayjs(currentTime, 'HH:mm');
            const currentDate = dayjs();
            const startD = dayjs(startDate);
            const startT = dayjs(startTime, 'HH:mm');
            const endD = dayjs(endDate);
            const endT = dayjs(endTime, 'HH:mm');
            const couponValidation = (startDate < endDate) && timeToCheck.isAfter(startT) && timeToCheck.isBefore(endT) && (currentDate > startD) && (currentDate < endD) && valid;
            console.log({ couponValidation });
            //use limitPerCustomer functionality
            if (!couponValidation) {
                setDiscount(0);
                toast.error("Invalid discount!");
                return;
            }
            if (minOrderValue > 0 && minOrderValue > subTotal) {
                setDiscount(0);
                toast.error(`You have to spent an amount off ${minOrderValue}`);
                return;
                // console.log(discount);
            }
            if (minOrderQuantity > 0 && minOrderQuantity > quantity) {
                setDiscount(0);
                toast.error(`You have to order a number off ${minOrderQuantity} products!`);
                return;
            }
            if (type === "amountOff") {
                setDiscount(amountOff);
                setDiscountId(inputDiscount._id);
            } else if (type === "percentOff") {
                // console.log({subTotal, percentOff});                
                setDiscount(subTotal * percentOff * 0.01);
                setDiscountId(inputDiscount._id);
            } else {
                toast.error('Discount not available!');
            }
        } else {
            toast.error("Invalid Discount!")
        }
    };
    const onQuantityChange = (e: any) => {
        setSubTotal(Number(e.target.value) * price);
        setDiscount(0);
    };
    const onBuyerSelect = (value: any) => {
        setBuyerId(value);
    }
    if (!data || isLoading) {
        return <Spinner />
    }
    const { image, name, price, quantity, color, size } = data.data;
    // const { image, name, price, quantity, color, type, size, fragrance, arrangement } = data.data;
    return (
        <div>
            <AddHeader text='Checkout' />
            <Form
                layout='vertical'
                onFinish={onFinish}
                style={{ padding: "0 20px" }}
            >
                {/* columns of the table  */}
                <Row style={{ borderBottom: "1px solid #ebeaf2" }}>
                    <Col span={10} style={{ padding: "8px 0", borderRight: "1px solid #ebeaf2" }}>
                        <Flex justify='center' align='center' style={{ height: " 100% " }}>
                            <h4>Info</h4>
                        </Flex>
                    </Col>
                    <Col span={4} style={{ padding: "8px 0", borderRight: "1px solid #ebeaf2" }}>
                        <Flex justify='center' align='center' style={{ height: " 100% " }}>
                            <h4>Price</h4>
                        </Flex>
                    </Col>
                    <Col span={5} style={{ padding: "8px 0", borderRight: "1px solid #ebeaf2" }}>
                        <Flex justify='center' align='center' style={{ height: "100%" }}>
                            <h4>Quantity</h4>
                        </Flex>
                    </Col>
                    <Col span={5} style={{ padding: "8px 0" }}>
                        <Flex justify='center' align='center' style={{ height: " 100% " }}>
                            <h4>Total</h4>
                        </Flex>
                    </Col>
                </Row>
                {/* product list  */}
                <Row style={{ borderBottom: "1px solid #ebeaf2" }}>
                    <Col span={10} style={{ padding: "8px 0", borderRight: "1px solid #ebeaf2" }}>
                        <Flex style={{ padding: "5px" }} gap={3} align='center' >
                            <img style={{ width: "25%" }} src={image} alt="" />
                            <Flex vertical>
                                <h4>Name: <i>{name}</i></h4>
                                <h4>Size: <i>{size}</i></h4>
                                <h4>Color: <i>{color}</i></h4>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col span={4} style={{ padding: "8px 0", borderRight: "1px solid #ebeaf2" }}>
                        <Flex justify='center' align='center' style={{ height: " 100% " }}>
                            <h4>${price.toFixed(2)}</h4>
                        </Flex>
                    </Col>
                    <Col span={5} style={{ padding: "8px 0", borderRight: "1px solid #ebeaf2" }}>
                        <Flex justify='center' align='center' style={{ height: "100%" }}>
                            <Form.Item name={"quantity"}>
                                <Input style={{ width: "60%", border: "1px solid #ebeaf2" }} onChange={(e) => onQuantityChange(e)} type='number' placeholder={"Quantity"} max={quantity} />
                            </Form.Item>
                        </Flex>
                    </Col>
                    <Col span={5} style={{ padding: "8px 0" }}>
                        <Flex justify='center' align='center' style={{ height: " 100% " }}>
                            <h4>${subTotal.toFixed(2)}</h4>
                        </Flex>
                    </Col>
                </Row>
                {/* customer info and billing  */}
                <Row>
                    {/* left side customer info box box  */}
                    <Col span={12} style={{ borderRight: "1px solid #ebeaf2", padding: "20px" }}>
                        <Flex vertical gap={12}>
                            <h4>Customer Info : </h4>
                            <Form.Item style={{ width: "100%" }} name={"buyer"} rules={[{ required: true, message: 'Please select buyer name data!' }]} >
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
                                />
                            </Form.Item>
                            {/* buyer information  */}
                            {singleBuyerData && (
                                (isSingleBuyerDataLoading) ?
                                    <Spinner /> :
                                    <Flex gap={10} align='center'>
                                        {/* <img src={buyer?.profilePicture ? buyer?.profilePicture : ""} alt="" /> */}
                                        <Flex vertical gap={5} style={{ borderRight: "1px solid #ebeaf2", paddingRight: "10px" }} justify='center' align='center'>
                                            <Avatar shape='square' size={72} icon={<UserOutlined />} src={buyer?.profilePicture} />
                                            <Button style={{ width: "100%", backgroundImage: "linear-gradient(to right, rgb(234, 88, 12), rgb(249, 115, 22))", color: "white" }} size='small' >{buyer.level}</Button>
                                        </Flex>
                                        <Flex vertical justify='center'>
                                            <h4>Name : {buyer?.name}</h4>
                                            <h4>Email : {buyer?.email}</h4>
                                            <h4>Phone Number : {buyer?.phoneNumber}</h4>
                                            <h4>Coins : {buyer?.coinsEarned}</h4>
                                        </Flex>
                                    </Flex>
                            )}
                        </Flex>

                    </Col>
                    {/* right side billing box  */}
                    <Col span={12} style={{ padding: "20px" }}>
                        <Flex vertical gap={12}>
                            <h4>Billing Info : </h4>
                            <Row >
                                <Col span={12} style={{ textAlign: "left" }}>
                                    <h4>SubTotal :</h4>
                                    <h4>Discount (Using Coupon):</h4>
                                    {/* <h4>Discount (Using Points):</h4> */}
                                    <h4>Total:</h4>
                                </Col>
                                <Col span={12} style={{ textAlign: "right" }}>
                                    <h4>${subTotal.toFixed(2)}</h4>
                                    <h4>${discount.toFixed(2)}</h4>
                                    {/* <h4>$0</h4> */}
                                    <h4>${(subTotal - discount).toFixed(2)}</h4>
                                </Col>
                            </Row>
                            <MyDivider />
                            {/* coupon apply box  */}
                            <Flex vertical style={{ marginBottom: "" }}>
                                <h4 style={{ marginBottom: "5px" }}>Apply discount code or use coins if have</h4>
                                <Space.Compact style={{ width: "100%" }}>
                                    {/* <Form.Item
                                        name="discountCode"
                                        style={{flexGrow: 1}}
                                    > */}
                                    <Input style={{ borderRadius: "1px" }} onChange={(e) => setCode(e.target.value)} type='text' placeholder={"Discount Code (If have)"} />
                                    {/* </Form.Item> */}
                                    <Button style={{ borderRadius: "1px" }} onClick={handleDiscount} type="primary" size='middle'>Apply Code</Button>
                                </Space.Compact>
                            </Flex>
                            {/* point using box  */}
                            {/* <Flex justify='center' align='center' >
                                <Form.Item
                                    style={{ marginBottom: "10px", width: "100%" }}
                                    name="discountCode"
                                >
                                    <Space.Compact style={{ width: "100%" }}>
                                        <Input style={{ borderRadius: "1px" }} onChange={(e) => setCode(e.target.value)} type='text' placeholder={"Point Quantity (If have)"} max={buyer?.coinsEarned} />
                                        <Button style={{ borderRadius: "1px" }} type="primary" size='middle'>Use Coins</Button>
                                    </Space.Compact>
                                </Form.Item>
                            </Flex> */}
                            {/* submit button  */}
                            <Flex>
                                <Form.Item style={{ marginBottom: "10px", textAlign: "center", width: "100%" }}>
                                    <Button style={{ width: "100%" }} type="primary" htmlType="submit" size='large'>
                                        Make Sales
                                    </Button>
                                </Form.Item>
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            </Form>
        </div >
    )
}

export default MakeSellForm



// { setIsModalOpen, product }: { setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>, product?: string | undefined }




{/* <Row style={{ margin: "20px 0" }}>
                    <Col sm={8} lg={8}>
                        <h4>Name: </h4><i>{name}</i>
                        <h4>Price: </h4> <i>{price}</i>
                        <h4>Available Quantity: </h4> <i>{quantity}</i>
                        <h4>Color: </h4> <i>{color}</i>
                    </Col>
                    <Col sm={8} lg={8}>
                        {arrangement && <><h4>Arrangement: </h4><i>{arrangement}</i></>}
                        <h4>Selected size: </h4> <i>{size}</i>
                        <h4>Fragrance profile: </h4> <i>{fragrance}</i>
                        <h4>Flower Category: </h4> <i>{type}</i>
                    </Col>
                    <Col sm={8} lg={8}>
                        <img style={{ width: "100%" }} src={image} alt="" />
                    </Col>
                </Row> */}



