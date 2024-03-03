import toast from "react-hot-toast";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const uploadImage = async (file: any) => {
    const formData = new FormData();
    formData.append("image", file);
    const toastId = toast.loading("Image uploading...");
    try {
        const res = await fetch(
            `https://api.imgbb.com/1/upload?key=8232356251c40167197e4cb1208b3e70`,
            {
                method: "POST",
                body: formData,
            }
        );
        if (!res.ok) {
            const errorData = await res.json();
            console.error("ImgBB API Error:", errorData);
            throw new Error("Failed to upload image");
        }
        const data = await res.json();
        console.log(data);
        // setImageUrl(data?.data?.display_url);
        const url = data?.data?.display_url;
        toast.dismiss(toastId);
        toast.success("Image uploaded successfully!");
        return url;
    } catch (error: any) {
        console.error("Image upload error:", error.message);
        toast.error("Image not uploaded!");
        toast.dismiss(toastId);
        return;
    }


};