import { useAppDispatch } from "../../redux/hooks";
import { setBulkDeleteIds, setFlowers } from "../../redux/features/flower/flowerSlice";
import { useGetAllFlowersQuery } from "../../redux/features/flower/flowerApi";
import { TFlower } from "../../types";
import { InfoCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import MyPopover from "../ui/MyPopover";
import DeleteEditPop from "../ui/DeleteEditPop";

const FlowerList = () => {
    const dispatch = useAppDispatch();
    const [id, setId] = useState('');
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    // console.log(checkedValues);

    const { data } = useGetAllFlowersQuery(undefined);
    const flowers = data?.data;
    dispatch(setFlowers(flowers));
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, flowerId: string) => {
        const isChecked = e.target.checked as boolean;
        setCheckedValues((prevIds) => {
            if (isChecked) {
                return [...prevIds, flowerId];
            } else {
                return prevIds.filter((id) => id !== flowerId);
            }
        });
    };
    dispatch(setBulkDeleteIds(checkedValues));
    // console.log(checkedValues);

    const handleInfoClick = (id: string) => {
        setId(id);
    }
    return (
        <div>
            <table style={{ width: "100%" }}>
                <thead style={{ width: "100%", marginBottom: "10px", border: "1px solid rgba(5, 5, 5, 1) ", borderCollapse: "collapse" }}>
                    <tr style={{ textAlign: "left", }}>
                        <th></th>
                        <th>Image</th>
                        <th>Flower Name</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Fragrance</th>
                        <th>Size</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        flowers?.map((flower: TFlower) => <tr key={flower?._id} style={{ textAlign: "left" }}>
                            <td><input type="checkbox" value={flower?._id} onChange={(e) => handleCheckboxChange(e, flower?._id)} /></td>
                            <td><img style={{ borderRadius: "3px" }} width={"40px"} src={flower?.image || "https://i.ibb.co/XZGDHvv/floral-vista-logo.png"} alt="" /></td>
                            <td>{flower?.name || "no data"}</td>
                            <td>{flower?.quantity || "no data"}</td>
                            <td>{flower?.type || "no data"}</td>
                            <td>{flower?.fragrance || "no data"}</td>
                            <td>{flower?.size || "no data"}</td>
                            <td><MyPopover key={flower?._id} child1={<InfoCircleOutlined onClick={() => handleInfoClick(flower?._id)} />} child2={<DeleteEditPop id={id} />} /></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FlowerList