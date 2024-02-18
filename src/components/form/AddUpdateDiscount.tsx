/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
    Space,
    TimePicker,
} from 'antd';
import toast from 'react-hot-toast';
import Spinner from '../ui/Spinner';
import dayjs from 'dayjs';
import { useAddDiscountMutation, useGetSingleDiscountQuery } from '../../redux/features/discount/discountApi';
import { TDiscount } from '../../types';

const AddUpdateDiscount = ({ setIsModalOpen, id, type }: { setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>, id: string | undefined, type: "add" | "update" }) => {
    const [isRequired, setIsRequired] = useState(true);
    const [defaultValues, setDefaultValues] = useState<Partial<TDiscount>>({ startTime: dayjs('00:00', "HH:mm"), endTime: dayjs('11:59', "HH:mm"), percentOff: 0, amountOff: 0, minOrderValue: 0, limitPerCustomer: 1 });
    const { data, isLoading } = useGetSingleDiscountQuery(id);
    const [addDiscount] = useAddDiscountMutation();

    const onfinish = (values: any) => {
        const startDate = values?.startDate?.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        const endDate = values?.endDate?.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        const startTime = values?.startTime?.format('HH:mm');
        const endTime = values?.endTime?.format('HH:mm');
        // console.log({ startDate, endDate, startTime, endTime });

        if (!id && type === "add") {
            const newDiscount = { ...values, startDate, endDate, startTime, endTime, percentOff: Number(values?.percentOff), amountOff: Number(values?.amountOff), minOrderValue: Number(values?.minOrderValue), limitPerCustomer: Number(values?.limitPerCustomer) };
            addDiscount(newDiscount).unwrap().then((payload: any) => {
                toast.success(payload.message);
            }).catch((error: any) => {
                console.log(error);
                toast.error(error.message || "Discount adding failed!")
            })
            console.log(newDiscount);

        }
        // if (id && type === "update") {
        //     const updatedFlower = { ...values, price: Number(values.price), quantity: Number(values.quantity), image: imageUrl };
        //     updateFlower({ flowerId: id, flowerUpdatedData: updatedFlower }).unwrap().then((payload: any) => {
        //         toast.success(payload.message);
        //     }).catch((error: any) => {
        //         toast.error(error.message || "Something went wrong!")
        //     })
        // }
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (id && data) {
            // sanitize the dates // startDate: dayjs('2024-02-01T00:00:00.000+00:00', 'YYYY/MM/DD'),
            setDefaultValues(data?.data);
            setIsRequired(false);
        }
    }, [id, data, type, setIsModalOpen]);
    // console.log(defaultValues);
    // console.log(isLoading);

    return (
        isLoading || isRequired && type === ("update") ? <Spinner /> :
            <>
                {(type === "update") && (!id || !data || isRequired) ? <Spinner /> :
                    <>
                        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>{!id && !data && "Add New Discount"}{type === "update" && "Update Discount"}</h2>
                        <Form
                            layout="horizontal"
                            initialValues={defaultValues}
                            onFinish={onfinish}
                            style={{ padding: "0", margin: "0" }}
                        >
                            <Space>
                                <Form.Item name={"code"} label="Code" rules={[{ required: isRequired, message: 'Please input your discount code!' }]}>
                                    <Input placeholder='Enter Discount Code' />
                                </Form.Item>
                                <Form.Item name={"type"} label="Type" rules={[{ required: isRequired, message: 'Please select discount type!' }]}>
                                    <Select
                                        placeholder="Select Discount Type"
                                        options={[
                                            { value: 'amountOff', label: 'Amount Off' },
                                            { value: 'percentOff', label: 'Percent Off' },
                                        ]}
                                    />
                                </Form.Item>
                            </Space>
                            <Space>
                                <Form.Item name={"startDate"} label="Start date" rules={[{ required: isRequired, message: 'Please select start date!' }]}>
                                    <DatePicker />
                                </Form.Item>
                                <Form.Item name={"startTime"} label="Start time">
                                    <TimePicker format={"HH:mm"} />
                                </Form.Item>
                            </Space>
                            <Space>
                                <Form.Item name={"endDate"} label="End date" rules={[{ required: isRequired, message: 'Please select end date!' }]}>
                                    <DatePicker />
                                </Form.Item>
                                <Form.Item name={"endTime"} label="End time">
                                    <TimePicker format={"HH:mm"} />
                                </Form.Item>
                            </Space>
                            <Space>
                                <Form.Item name={"percentOff"} label="Percent" >
                                    <Input type="number" placeholder='Percent off' />
                                </Form.Item>
                                <Form.Item name={"amountOff"} label="Amount">
                                    <Input type="number" placeholder='Amount Off' />
                                </Form.Item>
                            </Space>
                            <Space>
                                <Form.Item name={"minOrderValue"} label="Minimum Order">
                                    <Input type="number" placeholder='Minimum Order Value' />
                                </Form.Item>
                                <Form.Item name={"limitPerCustomer"} label="Limit">
                                    <Input type="number" placeholder='Limit Per Customer' />
                                </Form.Item>
                            </Space>
                            <Form.Item style={{ textAlign: "center" }}>
                                <Button size='large' type="primary" htmlType="submit">
                                    {!id && !data && "Add Discount"}{type === "update" && "Update Discount"}
                                </Button>
                            </Form.Item>
                        </Form>
                    </>}
            </>
    );
};

export default AddUpdateDiscount

