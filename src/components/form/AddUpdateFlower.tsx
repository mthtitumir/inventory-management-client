/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import {
    Button,
    Form,
    Input,
    Select,
    Upload,
} from 'antd';
import { flowerCategoryType, flowerFragrances, flowerSizes } from '../../constants/flower.constant';
import toast from 'react-hot-toast';
import { useAddFlowerMutation, useGetSingleFlowerQuery, useUpdateFlowerMutation } from '../../redux/features/flower/flowerApi';
import { TUser, useCurrentUser } from '../../redux/features/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';
import { FlowerDefaultValuesProps } from '../../types';
import Spinner from '../ui/Spinner';

const AddUpdateFlower = ({ setIsModalOpen, id, type }: { setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>, id: string | undefined, type: "add" | "update" | "variant" }) => {
    const { data, isLoading } = useGetSingleFlowerQuery(id);
    const [addFlower] = useAddFlowerMutation();
    const [updateFlower] = useUpdateFlowerMutation();
    const [imageUrl, setImageUrl] = useState('');
    const [isRequired, setIsRequired] = useState(true);
    const [defaultValues, setDefaultValues] = useState<FlowerDefaultValuesProps>({ style: "fff", bloomDate: "2024-01-28", arrangement: "hello" });
    const seller: TUser | null = useAppSelector(useCurrentUser);

    const uploadImage = async (event: any) => {
        // console.log(event.target.files[0]);
        if (!event.target.files[0]) return;
        const formData = new FormData();
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
    // const { name, price, quantity, color, bloomDate, style, arrangement, type, size, fragrance, image } = data?.data;
    const onfinish = (values: any) => {
        if (!id && type === "add") {
            const newFlower = { ...values, price: Number(values.price), quantity: Number(values.quantity), image: imageUrl, seller: seller?._id };
            addFlower(newFlower).unwrap().then((payload: any) => {
                toast.success(payload.message);
            }).catch((error: any) => {
                toast.error(error.message || "Something went wrong!")
            })
        }
        if (id && type === "update") {
            const updatedFlower = { ...values, price: Number(values.price), quantity: Number(values.quantity), image: imageUrl };
            updateFlower({ flowerId: id, flowerUpdatedData: updatedFlower }).unwrap().then((payload: any) => {
                toast.success(payload.message);
            }).catch((error: any) => {
                toast.error(error.message || "Something went wrong!")
            })
        }
        if (id && type === "variant") {
            const newFlowerVariant = { ...values, price: Number(values.price), quantity: Number(values.quantity), image: imageUrl, seller: seller?._id };
            addFlower(newFlowerVariant).unwrap().then((payload: any) => {
                toast.success(`New variant of this ${payload.message}`);
            }).catch((error: any) => {
                toast.error(error.message || "Something went wrong!")
            })
        }
        setIsModalOpen(false);
    }
    useEffect(() => {
        if (id && data) {
            console.log(id);

            setDefaultValues(data?.data);
            setImageUrl(data?.data?.image);
            setIsRequired(false);
        }
    }, [id, data, type, setIsModalOpen]);
    console.log(defaultValues);
    // console.log(isLoading);

    return (
        isLoading || isRequired && type === ("update" || "variant") ? <Spinner /> :
            <>
                {(type === "update" || type === "variant") && (!id || !data || isRequired) ? <Spinner /> :
                    <>
                        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>{!id && !data && "Add New Flower"}{type === "update" && "Update Flower"}{type === "variant" && "Make Variant"}</h2>
                        <Form
                            layout="horizontal"
                            initialValues={defaultValues}
                            onFinish={onfinish}
                            style={{ padding: "0", margin: "0" }}
                        >
                            <Form.Item name={"name"} label="Flower Name" rules={[{ required: isRequired, message: 'Please input your flower name!' }]}>
                                <Input defaultValue={defaultValues?.name} placeholder='Enter Flower Name' />
                            </Form.Item>
                            <Form.Item name={"price"} label="Price per piece" rules={[{ required: isRequired, message: 'Please input your flower price!' }]}>
                                <Input defaultValue={defaultValues?.price} type='number' placeholder='Enter Price' />
                            </Form.Item>
                            <Form.Item label="Upload picture" rules={[{ required: isRequired, message: 'Please upload your flower photo!' }]} >
                                <Upload>
                                    <Input type='file' onChange={uploadImage} placeholder='Picture' />
                                </Upload>
                            </Form.Item>
                            <Form.Item name={"quantity"} label="Available quantity" rules={[{ required: isRequired, message: 'Please input your flower quantity!' }]} >
                                <Input defaultValue={defaultValues?.quantity} type='number' placeholder='Enter quantity' />
                            </Form.Item>
                            <Form.Item name={"color"} label="Color of the Flower" rules={[{ required: isRequired, message: 'Please input your flower color!' }]}>
                                <Input defaultValue={defaultValues?.color} placeholder='Enter color' />
                            </Form.Item>
                            <Form.Item name={"bloomDate"} label="Approximate bloom date">
                                <Input defaultValue={defaultValues?.bloomDate} type={'date' || "text"} placeholder='Enter date' />
                            </Form.Item>
                            <Form.Item name={"style"} label="Flower Style">
                                <Input defaultValue={defaultValues?.style} placeholder='Style' />
                            </Form.Item>
                            <Form.Item name={"arrangement"} label="Flower Arrangement">
                                <Input defaultValue={defaultValues?.arrangement} placeholder='Arrangement' />
                            </Form.Item>
                            <Form.Item name={"type"} label="Select flower category" rules={[{ required: isRequired, message: 'Please select your flower type!' }]} >
                                <Select defaultValue={defaultValues?.type} placeholder="Select Flower Type">
                                    {
                                        flowerCategoryType?.map((type) => <Select.Option value={type}>{type.toUpperCase()}</Select.Option>)
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item name={"size"} label="Select Available Size" rules={[{ required: isRequired, message: 'Please input available flower sizes!' }]} >
                                <Select defaultValue={defaultValues?.size} placeholder="Select Size">
                                    {
                                        flowerSizes?.map((size) => <Select.Option value={size}>{size.toUpperCase()}</Select.Option>)
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item name={"fragrance"} label="Fragrance Profile" rules={[{ required: isRequired, message: 'Please input your flower fragrance!' }]}>
                                <Select defaultValue={defaultValues?.fragrance} placeholder="Select fragrance">
                                    {
                                        flowerFragrances?.map((fragrance) => <Select.Option value={fragrance}>{fragrance.toUpperCase()}</Select.Option>)
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item style={{ textAlign: "center" }}>
                                <Button size='large' type="primary" htmlType="submit">
                                    {!id && !data && "Add Flower"}{type === "update" && "Update Flower"}{type === "variant" && "Make Variant"}
                                </Button>
                            </Form.Item>
                        </Form>
                    </>}
            </>
    );
};

export default AddUpdateFlower

