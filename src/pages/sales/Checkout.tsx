/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Avatar, Button, Col, Flex, Form, Input, Row, Select, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../redux/hooks';
import { TUser, useCurrentUser } from '../../redux/features/auth/authSlice';
import { useGetSingleFlowerQuery, useGetBulkFlowersMutation } from '../../redux/features/flower/flowerApi';
import { useGetAllDiscountsQuery } from '../../redux/features/discount/discountApi';
import toast from 'react-hot-toast';
import { TDiscount } from '../../types';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import { useGetAllTradingPartnerQuery, useGetSingleTradingPartnerQuery } from '../../redux/features/buyer/tradingPartnerApi';
import { transformedArrayToSelectOptions } from '../../utils/transformArrayToSelectOptions';
import Spinner from '../../components/ui/Spinner';
import AddHeader from '../../components/ui/AddHeader';
import MyDivider from '../../components/ui/MyDivider';
import { useBulkDeleteIds } from '../../redux/features/flower/flowerSlice';
// { flowerIds }: { flowerIds: string[] }
const Checkout = () => {
    // const product= useParams();
    const { itemId } = useParams();
    const flowerIds = useAppSelector(useBulkDeleteIds);
    // console.log({ flowerIds });

    const [subTotal, setSubTotal] = useState(0);
    const [code, setCode] = useState("");
    // const [discountCode, setDiscountCode] = useState(code);
    const [discount, setDiscount] = useState(0);
    const [flowersData, setFlowersData] = useState([]);
    // const [flowers, setFlowers] = useState([]);
    const [buyerId, setBuyerId] = useState<string | undefined>(undefined);
    const seller: TUser | null = useAppSelector(useCurrentUser);
    const { data } = useGetSingleFlowerQuery(itemId);
    const { data: discountsData } = useGetAllDiscountsQuery(seller?.company);
    const [getBulkFlowers] = useGetBulkFlowersMutation();
    // const flowersData = getBulkFlowers({ flowerIds });
    // console.log({ flowersData });

    // const { data: discountData, isLoading: isDiscountLoading } = useGetSingleDiscountQuery(discountCode);
    // console.log({company: seller?.company, discountsData, isDiscountsDataLoading}); |, isLoading: isDiscountsDataLoading
    // const [addSales] = useAddSalesMutation();
    const { data: buyersData } = useGetAllTradingPartnerQuery({ type: "buyer", select: "name _id email" });
    const { data: singleBuyerData, isLoading: isSingleBuyerDataLoading } = useGetSingleTradingPartnerQuery(buyerId, { skip: !buyerId });
    const selectSupplierOptions = transformedArrayToSelectOptions(buyersData?.data);
    const discounts = discountsData?.data;
    const buyer = singleBuyerData?.data;

    // console.log(singleBuyerData);
    // console.log(data, isLoading);
    const onFinish = (values: any) => {
        values.quantity = Number(values.quantity);
        // const salesData = {
        //     ...values,
        //     seller: seller?._id,
        //     dateOfSale: new Date(),
        //     product
        // };
        // console.log(salesData);

        // if (values.quantity > quantity || values.quantity === 0) {
        //     toast.error("Available quantity exceeded!")
        // } else {
        //     addSales(salesData).unwrap().then((payload: any) => {
        //         toast.success(payload.message);
        //     }).catch((error: any) => {
        //         toast.error(error.message || "Something went wrong!")
        //     })
        //     setIsModalOpen(false);
        // }
    };
    const handleDiscount = () => {
        // first of all check if this customer already reached the maximum redeem time
        // setDiscountCode(prevCode => {
        //     console.log({prevCode,code});

        //     if (prevCode !== code) {
        //         return code;
        //     }
        //     return prevCode;
        // });
        // console.log(discountCode);
        // console.log({code, discountCode, data: discountData.data, isDiscountLoading});
        const inputDiscount = discounts?.find((dis: TDiscount) => dis.code === code);
        console.log(inputDiscount);
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
            } else if (type === "percentOff") {
                // console.log({subTotal, percentOff});                
                setDiscount(subTotal * percentOff * 0.01);
            } else {
                toast.error('Discount not available!');
            }
        } else {
            toast.error("Invalid Discount!")
        }
    }
    const onQuantityChange = (e: any) => {
        setSubTotal(Number(e.target.value) * price);
        setDiscount(0);
    }
    const onBuyerSelect = (value: string | undefined) => {
        // console.log(value);
        setBuyerId(value);
    }

    useEffect(() => {
        const fetchBulkFlowers = async () => {
            try {
                const flowers = await getBulkFlowers({ flowerIds }).unwrap();
                console.log(flowers.data);                
                setFlowersData(flowers?.data);
            } catch (error) {
                console.error('Failed to fetch bulk flowers:', error);
            }
        };

        if (flowerIds && flowerIds.length > 0) {
            fetchBulkFlowers();
        } else if (data) {
            setFlowersData(data.data);
        }
    }, [flowerIds, getBulkFlowers, data]);

    console.log(flowersData);
    if (!flowersData) {
        return <Spinner />
    }
    // if(flowers.length > 0 && !itemId ){
    //     setFlowersData(flowers);
    // } else {
    //     setFlowersData([data?.data]);
    // }

    const { price, quantity } = data.data; //temporary for type error solve
    // const { image, name, price, quantity, color, type, size, fragrance, arrangement } = data.data;
    return (
        <div>
            <AddHeader text='Checkout' children={<></>} />
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
                {
                flowersData?.map(({ image, name, price, color, size }) => (
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
                                    <h4>${price}</h4>
                                </Flex>
                            </Col>
                            <Col span={5} style={{ padding: "8px 0", borderRight: "1px solid #ebeaf2" }}>
                                <Flex justify='center' align='center' style={{ height: "100%" }}>
                                    <Input style={{ width: "60%", border: "1px solid #ebeaf2" }} onChange={(e) => onQuantityChange(e)} type='number' placeholder={"Quantity"} />
                                </Flex>
                            </Col>
                            <Col span={5} style={{ padding: "8px 0" }}>
                                <Flex justify='center' align='center' style={{ height: " 100% " }}>
                                    <h4>${subTotal}</h4>
                                </Flex>
                            </Col>
                        </Row>
                    ))
                }
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
                                    <h4>Discount (Using Points):</h4>
                                    <h4>Total:</h4>
                                </Col>
                                <Col span={12} style={{ textAlign: "right" }}>
                                    <h4>${subTotal.toFixed(2)}</h4>
                                    <h4>${discount.toFixed(2)}</h4>
                                    <h4>$0</h4>
                                    <h4>${(subTotal - discount).toFixed(2)}</h4>
                                </Col>
                            </Row>
                            <MyDivider />
                            {/* coupon apply box  */}
                            <Flex justify='center' align='center' >
                                <Form.Item
                                    style={{ marginBottom: "10px", width: "100%" }}
                                    name="discountCode"
                                >
                                    <h4 style={{ marginBottom: "5px" }}>Apply promo code or discount code if have</h4>
                                    <Space.Compact style={{ width: "100%" }}>
                                        <Input style={{ borderRadius: "1px" }} onChange={(e) => setCode(e.target.value)} type='text' placeholder={"Discount Code (If have)"} />
                                        <Button style={{ borderRadius: "1px" }} onClick={handleDiscount} type="primary" size='middle'>Apply Code</Button>
                                    </Space.Compact>
                                </Form.Item>
                            </Flex>
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

export default Checkout

