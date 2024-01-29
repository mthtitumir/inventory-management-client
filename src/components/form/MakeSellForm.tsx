/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useAppSelector } from '../../redux/hooks';
import { TUser, useCurrentUser } from '../../redux/features/auth/authSlice';
import { useGetSingleFlowerQuery } from '../../redux/features/flower/flowerApi';
import { Button, Col, Form, Input, Row, Spin } from 'antd';
import { useAddSalesMutation } from '../../redux/features/sales/salesApi';
import toast from 'react-hot-toast';

const MakeSellForm = ({ setIsModalOpen, product }: { setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>, product: string | undefined }) => {
    // console.log(product);
    const { data, isLoading } = useGetSingleFlowerQuery(product);
    // console.log(data);
    const [addSales] = useAddSalesMutation();

    const seller: TUser | null = useAppSelector(useCurrentUser);
    // console.log(data, isLoading);
    const onFinish = (values: any) => {
        values.quantity = Number(values.quantity);
        const salesData = {
            ...values,
            seller: seller?._id,
            dateOfSale: new Date(),
            product
        };
        addSales(salesData).unwrap().then((payload: any)=> {
            toast.success(payload.message);           
        }).catch((error: any)=>{
            toast.error(error.message || "Something went wrong!")            
        })
        setIsModalOpen(false);
    };
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
                    label="Buyer"
                    name="buyer"
                    rules={[{ required: true, message: 'Please input buyer name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: "10px" }}
                    label="Product Quantity"
                    name="quantity"
                    rules={[{ required: true, message: 'Please input your product quantity!' }]}
                >
                    <Input type='number' />
                </Form.Item>

                <Form.Item style={{ marginBottom: "10px", textAlign: "center" }}>
                    <Button type="primary" htmlType="submit" size='large'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default MakeSellForm