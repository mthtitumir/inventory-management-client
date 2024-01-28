/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Upload,
} from 'antd';
import { flowerCategoryType, flowerFragrances, flowerSizes } from '../../constants/flower.constant';
import toast from 'react-hot-toast';
import { useState } from 'react';

const AddUpdateFlower = ({ id }: { id: string | undefined }) => {
    const [imageUrl, setImageUrl] = useState('');
    const uploadImage = async (event) => {
        const formData = new FormData();
        // console.log(event.target.files[0]);

        if (!event.target.files[0]) return;
        formData.append("image", event.target.files[0]);
        const toastId = toast.loading("Image uploading...");
        try {
            const res = await fetch(
                `https://api.imgbb.com/1/upload?key=8232356251c40167197e4cb1208b3e70`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (!res.ok) throw new Error("Failed to upload image");

            const data = await res.json();
            // console.log(data);
            setImageUrl(data?.data?.display_url)            
            toast.dismiss(toastId);
            toast.success("Image uploaded successfully!");
        } catch (error) {
            toast.error("Image not uploaded!");
            toast.dismiss(toastId);
        }
    };
    const onfinish = (values: any) => {
        // const res = await uploadImage(values?.file[0])
        if(!id){
            const newFlower = {...values, image: imageUrl};
            console.log(newFlower);
            

        }
        // console.log(values);
    }
    const defaultValues = {
        style: "",
        bloomDate: "",
        arrangement: ""
    }

    return (
        <>
            {
                id ? <h2>Update Flower</h2> : <h2>Add New Flower</h2>
            }
            <Form
                // labelCol={{ span: 4 }}
                // wrapperCol={{ span: 14 }}
                layout="horizontal"
                // style={{ maxWidth: 600 }}
                initialValues={defaultValues}
                onFinish={onfinish}
            >
                <Form.Item name={"name"} label="Flower Name" rules={[{ required: true, message: 'Please input your flower name!' }]}>
                    <Input placeholder='Enter Flower Name' />
                </Form.Item>
                <Form.Item name={"price"} label="Price per piece" rules={[{ required: true, message: 'Please input your flower price!' }]}>
                    <Input type='number' placeholder='Enter Price' />
                </Form.Item>
                <Form.Item label="Upload picture" rules={[{ required: true, message: 'Please upload your flower photo!' }]} >
                    <Upload>
                        <Input type='file' onChange={uploadImage} placeholder='Picture' />
                    </Upload>
                </Form.Item>
                <Form.Item name={"quantity"} label="Available quantity" rules={[{ required: true, message: 'Please input your flower quantity!' }]} >
                    <Input type='number' placeholder='Enter quantity' />
                </Form.Item>
                <Form.Item name={"color"} label="Color of the Flower" rules={[{ required: true, message: 'Please input your flower color!' }]}>
                    <Input placeholder='Enter color' />
                </Form.Item>
                <Form.Item name={"bloomDate"} label="Approximate bloom date">
                    <Input type='date' placeholder='Enter date' />
                </Form.Item>
                <Form.Item name={"style"} label="Flower Style">
                    <Input placeholder='Style' />
                </Form.Item>
                <Form.Item name={"arrangement"} label="Flower Arrangement">
                    <Input placeholder='Arrangement' />
                </Form.Item>
                <Form.Item name={"type"} label="Select flower category" rules={[{ required: true, message: 'Please select your flower type!' }]} >
                    <Select placeholder="Select Flower Type">
                        {
                            flowerCategoryType?.map((type) => <Select.Option value={type}>{type.toUpperCase()}</Select.Option>)
                        }
                    </Select>
                </Form.Item>
                <Form.Item name={"size"} label="Select Available Size" rules={[{ required: true, message: 'Please input available flower sizes!' }]} >
                    <Select placeholder="Select Size">
                        {
                            flowerSizes?.map((size) => <Select.Option value={size}>{size.toUpperCase()}</Select.Option>)
                        }
                    </Select>
                </Form.Item>
                <Form.Item name={"fragrance"} label="Fragrance Profile" rules={[{ required: true, message: 'Please input your flower fragrance!' }]}>
                    <Select placeholder="Select fragrance">
                        {
                            flowerFragrances?.map((fragrance) => <Select.Option value={fragrance}>{fragrance.toUpperCase()}</Select.Option>)
                        }
                    </Select>
                </Form.Item>
                {/* <Upload
                    // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture"
                    // defaultFileList={[...fileList]}
                    onChange={uploadImage}
                    className="upload-list-inline"
                >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload> */}
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddUpdateFlower

