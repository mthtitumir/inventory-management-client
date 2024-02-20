/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useAppSelector } from '../../redux/hooks';
import { TUser, useCurrentUser } from '../../redux/features/auth/authSlice';
import { useGetSingleFlowerQuery } from '../../redux/features/flower/flowerApi';
import { Button, Col, Divider, Form, Input, Row, Space, Spin } from 'antd';
import { useAddSalesMutation } from '../../redux/features/sales/salesApi';
import toast from 'react-hot-toast';
import { useGetAllDiscountsQuery } from '../../redux/features/discount/discountApi';
import { TDiscount } from '../../types';
import dayjs from 'dayjs';

const MakeSellForm = ({ setIsModalOpen, product }: { setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>, product: string | undefined }) => {
    const [subTotal, setSubTotal] = useState(0);
    const [code, setCode] = useState(null);
    // const [discountCode, setDiscountCode] = useState(code);
    const [discount, setDiscount] = useState(0);
    const seller: TUser | null = useAppSelector(useCurrentUser);
    const { data, isLoading } = useGetSingleFlowerQuery(product);
    const { data: discountsData, isLoading: isDiscountsDataLoading } = useGetAllDiscountsQuery(seller?.company);
    // const { data: discountData, isLoading: isDiscountLoading } = useGetSingleDiscountQuery(discountCode);
    // console.log({company: seller?.company, discountsData, isDiscountsDataLoading});
    const [addSales] = useAddSalesMutation();
    const discounts = discountsData?.data;
    // console.log(discounts);


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
            const { type, startDate, endDate, startTime, endTime, percentOff, amountOff, minOrderValue, minOrderQuantity, valid, limitPerCustomer } = inputDiscount;
            const currentTime = dayjs().format('HH:mm');
            const timeToCheck = dayjs(currentTime, 'HH:mm');
            const currentDate = dayjs();
            const startD = dayjs(startDate);
            const startT = dayjs(startTime, 'HH:mm');
            const endD = dayjs(endDate);
            const endT = dayjs(endTime, 'HH:mm');
            const couponValidation = (startDate < endDate) && timeToCheck.isAfter(startT) && timeToCheck.isBefore(endT) && (currentDate > startD) && (currentDate < endD) && valid;
            console.log({couponValidation});
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
    if (!data || isLoading) {
        return <Spin />
    }
    const { image, name, price, quantity, color, type, size, fragrance, arrangement } = data.data;
    return (
        <div>
            <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Selling Form</h2>
            <Form
                // style={{ maxWidth: 600 }}
                // initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Row style={{ margin: "20px 0" }}>
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
                </Row>

                {/* form start  */}
                <Form.Item
                    style={{ marginBottom: "10px" }}
                    label="Buyer Name"
                    name="buyerName"
                    rules={[{ required: true, message: 'Please input buyer name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: "10px" }}
                    label="Buyer Email"
                    name="buyerEmail"
                    rules={[{ required: true, message: 'Please input buyer email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: "10px" }}
                    label="Buyer Phone Number"
                    name="buyerPhone"
                    rules={[{ required: true, message: 'Please input buyer phone number!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: "10px" }}
                    label="Product Quantity"
                    name="quantity"
                    rules={[{ required: true, message: 'Please input your product quantity!' }]}
                >
                    <Input onChange={(e) => onQuantityChange(e)} type='number' />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: "10px" }}
                    label="Discount Code"
                    name="discountCode"
                >
                    <Space.Compact>
                        <Input onChange={(e) => setCode(e.target.value)} type='text' />
                        <Button onClick={handleDiscount} type="primary" size='middle'>Apply Code</Button>
                    </Space.Compact>
                </Form.Item>
                <Divider>Bill</Divider>
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                    <p>SubTotal = ${subTotal.toFixed(2)}</p>
                    <p>Discount = ${discount.toFixed(2)}</p>
                    <p>Total  = ${(subTotal - discount).toFixed(2)}</p>
                </div>

                <Form.Item style={{ marginBottom: "10px", textAlign: "center" }}>
                    <Button type="primary" htmlType="submit" size='large'>
                        Sale
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default MakeSellForm