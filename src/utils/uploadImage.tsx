/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";

export const uploadImage = async (event: any) => {
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
        toast.dismiss(toastId);
        toast.success("Image uploaded successfully!");
        return (data?.data?.display_url);
    } catch (error) {
        toast.error("Image not uploaded!");
        toast.dismiss(toastId);
    }
};