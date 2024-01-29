/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import {
    Button,
    Form,
    Input,
    Select,
    Spin,
    Upload,
} from 'antd';
import { flowerCategoryType, flowerFragrances, flowerSizes } from '../../constants/flower.constant';
import toast from 'react-hot-toast';
import { useAddFlowerMutation, useGetSingleFlowerQuery } from '../../redux/features/flower/flowerApi';
import { TUser, useCurrentUser } from '../../redux/features/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';
type DefaultValuesProps = { _id?: string; seller?: string; name?: string; price?: number; quantity?: number; color?: string; bloomDate?: string | undefined; style: string; arrangement: string; type?: string; size?: string; fragrance?: string; image?: string }

const AddUpdateFlower = ({ setIsModalOpen, id }: { setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,id: string | undefined }) => {
    const { data, isLoading } = useGetSingleFlowerQuery(id);
    const [addFlower, { isLoading: isAddFlowerLoading, isError: isAddFlowerError, isSuccess: isAddFlowerSuccess }] = useAddFlowerMutation();
     const [imageUrl, setImageUrl] = useState('');
    const [isRequired, setIsRequired] = useState(true);
    const [defaultValues, setDefaultValues] = useState<DefaultValuesProps>({ style: "fff", bloomDate: "2024-01-28", arrangement: "hello" });
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

//    console.log(id);
    // console.log(addFlowerData);

    // const { name, price, quantity, color, bloomDate, style, arrangement, type, size, fragrance, image } = data?.data;
    const onfinish = (values: any) => {
        if (!id) {
            const newFlower = { ...values, price: Number(values.price), quantity: Number(values.quantity), image: imageUrl, seller: seller?._id };
            addFlower(newFlower);
            isAddFlowerLoading && toast.loading("Flower Adding.......");
            isAddFlowerError && toast.error("Flower Adding Error");
            isAddFlowerSuccess && toast.success("Flower added successfully!")
            // console.log(newFlower);
        }

        setIsModalOpen(false);
    }
    useEffect(() => {
        if (id && data) {
            setDefaultValues(data?.data);
            setIsRequired(false);
        }
    }, [id, data]);
    console.log(defaultValues._id);
    // console.log(isLoading);
    
    return (
        isLoading || isRequired ? <div style={{margin:"10px", textAlign: "center"}}><Spin /></div> :
            <>
              <h2 style={{textAlign: "center", marginBottom: "10px"}}>{ id && data ? "Update Flower" : "Add New Flower"}</h2>
                <Form
                    // labelCol={{ span: 4 }}
                    // wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    // style={{ maxWidth: 600 }}
                    initialValues={defaultValues}
                    onFinish={onfinish}
                    style={{padding: "0", margin: "0"}}
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
                        <Input defaultValue={defaultValues?.bloomDate} type={'date'|| "text"} placeholder='Enter date' />
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
                    <Form.Item style={{textAlign: "center"}}>
                        <Button size='large' type="primary" htmlType="submit">
                            {id && data ? "Update Flower" : "Add Flower"}
                        </Button>
                    </Form.Item>
                </Form>
            </>
    );
};

export default AddUpdateFlower

