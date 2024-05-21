/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Upload,
    UploadProps
} from 'antd';
// import { UploadOutlined } from "@ant-design/icons";
import { flowerCategoryType, flowerFragrances, flowerSizes } from '../../constants/flower.constant';
import toast from 'react-hot-toast';
import { useAddFlowerMutation, useGetSingleFlowerQuery, useUpdateFlowerMutation } from '../../redux/features/flower/flowerApi';
import { TUser, useCurrentUser } from '../../redux/features/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';
import { FlowerDefaultValuesProps } from '../../types';
import Spinner from '../ui/Spinner';
import { useParams } from 'react-router-dom';
import AddHeader from '../ui/AddHeader';
import { uploadImage } from '../../utils/uploadImage';
import { BsCloudUpload } from "react-icons/bs";
import { useGetAllTradingPartnerQuery } from '../../redux/features/buyer/tradingPartnerApi';
import { transformedArrayToSelectOptions } from '../../utils/transformArrayToSelectOptions';
import { mainBg } from '../layout/MainLayout';

const AddUpdateFlower = ({ type }: { type: "add" | "update" | "variant" }) => {
    const [searchTerm] = useState('');
    const { itemId } = useParams();
    const { data, isLoading } = useGetSingleFlowerQuery(itemId, { skip: !itemId });
    const { data: supplierData } = useGetAllTradingPartnerQuery({ searchTerm, type: "supplier", select: "name _id email" });
    // console.log(supplierData);
    // console.log(type);

    const [addFlower] = useAddFlowerMutation();
    const [updateFlower] = useUpdateFlowerMutation();
    const [imageUrl, setImageUrl] = useState('');
    const [isRequired, setIsRequired] = useState(true);
    const [defaultValues, setDefaultValues] = useState<FlowerDefaultValuesProps>({ style: "Compact", bloomDate: "2024-01-28", arrangement: "Loose and Wild" });
    const user: TUser | null = useAppSelector(useCurrentUser);
    const selectSupplierOptions = transformedArrayToSelectOptions(supplierData?.data);
    // console.log(selectSupplierOptions);

    const props: UploadProps = {
        name: 'file',
        listType: "picture",
        beforeUpload: (_file: any) => {
            // Prevent automatic upload
            return false;
        },
        async onChange(info) {
            const url = await uploadImage(info.file);
            setImageUrl(url);
        },
        maxCount: 1,
    };
    // const onSupplierSearch = (value: string) => {
    //     console.log(value);
    //     setSearchTerm(value);
    // }
    // const { name, price, quantity, color, bloomDate, style, arrangement, type, size, fragrance, image } = data?.data;
    const onfinish = (values: any) => {
        if (!itemId && type === "add") {
            const newFlower = { ...values, price: Number(values.price), quantity: Number(values.quantity), image: imageUrl, entryBy: user?._id, company: user?.company };
            addFlower(newFlower).unwrap().then((payload: any) => {
                toast.success(payload.message);
                console.log(payload);
            }).catch((error: any) => {
                toast.error(error.message || "Something went wrong!")
            })
        }
        if (itemId && type === "update") {
            const updatedFlower = { ...values, price: Number(values.price), quantity: Number(values.quantity), image: imageUrl };
            updateFlower({ flowerId: itemId, flowerUpdatedData: updatedFlower }).unwrap().then((payload: any) => {
                toast.success(payload.message);
            }).catch((error: any) => {
                toast.error(error.message || "Something went wrong!")
            })
        }
        if (itemId && type === "variant") {
            const newFlowerVariant = { ...values, price: Number(values.price), quantity: Number(values.quantity), image: imageUrl, entryBy: user?._id, company: user?.company };
            addFlower(newFlowerVariant).unwrap().then((payload: any) => {
                toast.success(`New variant of this ${payload.message}`);
            }).catch((error: any) => {
                toast.error(error.message || "Something went wrong!")
            })
        }
        // setIsModalOpen(false);
    }
    useEffect(() => {
        if (itemId && data) {
            // console.log(itemId);
            setDefaultValues(data?.data);
            setImageUrl(data?.data?.image);
            setIsRequired(false);
        }
    }, [itemId, data, type]);
    // console.log(defaultValues);
    // console.log({ isLoading, isRequired });
    const typeTextMap = {
        "update": "Update Item",
        "variant": "Make New Variant",
        "add": "New Item"
    };

    return (
        isLoading || isRequired && type === ("update" || "variant") ? <Spinner /> :
            <>
                {(type === "update" || type === "variant") && (!itemId || !data || isRequired) ? <Spinner /> :
                    <div>
                        <AddHeader text={typeTextMap[type]} children={<></>} />
                        <Row justify='center' align='middle'>
                            <Col span={24} style={{ width: "100%", padding: "20px" }}>
                                <Form
                                    layout="vertical"
                                    initialValues={defaultValues}
                                    onFinish={onfinish}
                                >
                                    <Row gutter={10} justify='space-between'>
                                        <Col sm={{ span: 24 }} md={{ span: 10 }}>
                                            <Form.Item style={{ width: "100%" }} name={"name"} label="Flower Name" rules={[{ required: isRequired, message: 'Please input your flower name!' }]}>
                                                <Input placeholder='Enter Flower Name' />
                                            </Form.Item>
                                        </Col>
                                        <Col sm={{ span: 12 }} md={{ span: 7 }}>
                                            <Form.Item style={{ width: "100%" }} name={"price"} label="Price per piece" rules={[{ required: isRequired, message: 'Please input your flower price!' }]}>
                                                <Input type='number' placeholder='Enter Price' />
                                            </Form.Item>
                                        </Col>
                                        <Col sm={{ span: 12 }} md={{ span: 7 }}>
                                            <Form.Item style={{ width: "100%" }} name={"quantity"} label="Available quantity" rules={[{ required: isRequired, message: 'Please input your flower quantity!' }]} >
                                                <Input type='number' placeholder='Enter quantity' />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={10} justify='space-between'>
                                        <Col sm={{ span: 24 }} md={{ span: 8 }}>
                                            <Form.Item style={{ width: "100%" }} name={"supplier"} label="Select or Add Supplier" rules={[{ required: isRequired, message: 'Please input supplier data!' }]} >
                                                <Select
                                                    // showSearch
                                                    placeholder="Select a person"
                                                    optionFilterProp="children"
                                                    value={searchTerm}
                                                    defaultValue={defaultValues.supplier}
                                                    // onChange={onChange}
                                                    // onSearch={onSupplierSearch}
                                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                                    filterSort={(optionA, optionB) =>
                                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                                    }
                                                    options={selectSupplierOptions}
                                                />

                                            </Form.Item>
                                        </Col>
                                        <Col sm={{ span: 24 }} md={{ span: 8 }}>
                                            <Form.Item style={{ width: "100%" }} name={"color"} label="Color of the Flower" rules={[{ required: isRequired, message: 'Please input your flower color!' }]}>
                                                <Input placeholder='Enter color' />
                                            </Form.Item>
                                        </Col>
                                        <Col sm={{ span: 24 }} md={{ span: 8 }}>
                                            <Form.Item style={{ width: "100%" }} name={"bloomDate"} label="Approximate bloom date">
                                                <Input type={'date' || "text"} placeholder='Enter date' />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={10} justify='space-between'>
                                        <Col sm={{ span: 24 }} md={{ span: 8 }}>
                                            <Form.Item style={{ width: "100%" }} name={"type"} label="Select flower category" rules={[{ required: isRequired, message: 'Please select your flower type!' }]} >
                                                <Select placeholder="Select Flower Type">
                                                    {
                                                        flowerCategoryType?.map((type) => <Select.Option key={type} value={type}>{type.toUpperCase()}</Select.Option>)
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col sm={{ span: 24 }} md={{ span: 8 }}>
                                            <Form.Item style={{ width: "100%" }} name={"size"} label="Select Available Size" rules={[{ required: isRequired, message: 'Please input available flower sizes!' }]} >
                                                <Select placeholder="Select Size">
                                                    {
                                                        flowerSizes?.map((size) => <Select.Option key={size} value={size}>{size.toUpperCase()}</Select.Option>)
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col sm={{ span: 24 }} md={{ span: 8 }}>
                                            <Form.Item style={{ width: "100%" }} name={"fragrance"} label="Fragrance Profile" rules={[{ required: isRequired, message: 'Please input your flower fragrance!' }]}>
                                                <Select placeholder="Select fragrance">
                                                    {
                                                        flowerFragrances?.map((fragrance) => <Select.Option key={fragrance} value={fragrance}>{fragrance.toUpperCase()}</Select.Option>)
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={10} justify='space-between'>
                                        <Col sm={{ span: 24 }} md={{ span: 8 }}>
                                            <Form.Item style={{ width: "100%" }} name={"style"} label="Flower Style">
                                                <Input placeholder='Style' />
                                            </Form.Item>
                                        </Col>
                                        <Col sm={{ span: 24 }} md={{ span: 8 }}>
                                            <Form.Item style={{ width: "100%" }} name={"arrangement"} label="Flower Arrangement">
                                                <Input placeholder='Arrangement' />
                                            </Form.Item>
                                        </Col>
                                        <Col sm={{ span: 24 }} md={{ span: 8 }}>
                                            <Form.Item style={{ width: "100%" }} label="Upload picture" rules={[{ required: isRequired, message: 'Please upload your flower photo!' }]} >
                                                <Upload
                                                    {...props}
                                                >
                                                    <Button  icon={<BsCloudUpload />}>Upload</Button>
                                                </Upload>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={10} justify='center'>
                                        <Col sm={{ span: 24 }} md={{ span: 8 }}>
                                            <Form.Item style={{ textAlign: "center", width: "100%" }}>
                                                <Button style={{width: "100%", background: mainBg}} size='large' type="primary" htmlType="submit">
                                                    {!itemId && !data && "Add Flower"}{type === "update" && "Update Flower"}{type === "variant" && "Make Variant"}
                                                </Button>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </div>}
            </>
    );
};

export default AddUpdateFlower

