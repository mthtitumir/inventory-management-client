import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setBulkDeleteIds, setFlowers, useFlowers } from "../../redux/features/flower/flowerSlice";
import { useGetAllFlowersQuery } from "../../redux/features/flower/flowerApi";
import { TFlower } from "../../types";
import { MoreOutlined, FilterTwoTone } from '@ant-design/icons';
import { useState } from "react";
import MyPopover from "../ui/MyPopover";
import MoreOptions from "../ui/MoreOptions";
import { flowerCategoryType, flowerFragrances, flowerPriceRange, flowerSizes } from "../../constants/flower.constant";
import { Button, Radio, RadioChangeEvent, Spin } from "antd";
import { filterState } from "./InventoryHeader";

const FlowerList = ({filter, setFilter}: filterState) => {
    const dispatch = useAppDispatch();
    const [id, setId] = useState('');
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    // const [filter, setFilter] = useState({});
    const { data, isLoading } = useGetAllFlowersQuery(filter);
    const flexStyle = { border: '1px solid rgba(5, 5, 5, 0.06)', padding: "5px 8px" };
    const flexStyle2: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "1px" };

    dispatch(setFlowers(data?.data));
    const flowers = useAppSelector(useFlowers);
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

    const handleInfoClick = (id: string) => {
        setId(id);
    }

    //filtering set up functions
    const onPriceChange = (e: RadioChangeEvent) => {
        const priceRangeString = e.target.value;
        const [minPrice, maxPrice] = priceRangeString.split('-').map(Number)
        setFilter({ ...filter, minPrice, maxPrice });
    };
    const onTypeChange = (e: RadioChangeEvent) => {
        setFilter({ ...filter, type: e.target.value });
    };
    const onFragranceChange = (e: RadioChangeEvent) => {
        setFilter({ ...filter, fragrance: e.target.value });
    };
    const onSizeChange = (e: RadioChangeEvent) => {
        setFilter({ ...filter, size: e.target.value });
    };

    // filter popover components

    const SelectPriceRangeContent = (
        <Radio.Group onChange={onPriceChange} style={flexStyle2} size="small">
            {flowerPriceRange.map(price => <Radio.Button value={price}>{price}</Radio.Button>)}
        </Radio.Group>
    )
    const SelectCategoryTypeContent = (
        <Radio.Group onChange={onTypeChange} style={flexStyle2} size="small">
            {flowerCategoryType.map(type => <Radio.Button value={type}>{type.toUpperCase()}</Radio.Button>)}
        </Radio.Group>
    )
    const SelectFragranceContent = (
        <Radio.Group onChange={onFragranceChange} style={flexStyle2} size="small">
            {flowerFragrances.map(frag => <Radio.Button value={frag}>{frag.toUpperCase()}</Radio.Button>)}
        </Radio.Group>
    )
    const SelectSizeContent = (
        <Radio.Group onChange={onSizeChange} style={flexStyle2} size="small">
            {flowerSizes.map(size => <Radio.Button value={size}>{size.toUpperCase()}</Radio.Button>)}
        </Radio.Group>
    )
    return (
        <div>
            {isLoading? <Spin /> : <table style={{ width: "100%" }}>
                <thead style={{ width: "100%", marginBottom: "10px", border: "1px solid rgba(5, 5, 5, 1) ", borderCollapse: "collapse" }}>
                    <tr style={{ textAlign: "left", border: '1px solid red' }}>
                        <th style={flexStyle}></th>
                        <th style={flexStyle}>Image</th>
                        <th style={flexStyle}>Flower Name</th>
                        <th style={flexStyle}>Price <MyPopover child1={<FilterTwoTone />} child2={SelectPriceRangeContent} /></th>
                        <th style={flexStyle}>Quantity</th>
                        <th style={flexStyle}>Category <MyPopover child1={<FilterTwoTone />} child2={SelectCategoryTypeContent} /></th>
                        <th style={flexStyle}>Fragrance <MyPopover child1={<FilterTwoTone />} child2={SelectFragranceContent} /></th>
                        <th style={flexStyle}>Size <MyPopover child1={<FilterTwoTone />} child2={SelectSizeContent} /></th>
                        <th style={flexStyle}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        flowers?.map((flower: TFlower) => <tr key={flower?._id} style={{ textAlign: "left" }}>
                            <td><input type="checkbox" value={flower?._id} onChange={(e) => handleCheckboxChange(e, flower?._id)} /></td>
                            <td><img style={{ borderRadius: "3px" }} width={"40px"} src={flower?.image || "https://i.ibb.co/XZGDHvv/floral-vista-logo.png"} alt="" /></td>
                            <td>{flower?.name || "no data"}</td>
                            <td>{flower?.price || "no data"}</td>
                            <td>{flower?.quantity || "no data"}</td>
                            <td>{flower?.type || "no data"}</td>
                            <td>{flower?.fragrance || "no data"}</td>
                            <td>{flower?.size || "no data"}</td>
                            <td><MyPopover key={flower?._id} child1={<Button size="small" icon ={<MoreOutlined />} onClick={() => handleInfoClick(flower?._id)}>Options</Button>} child2={<MoreOptions id={id} />} /></td>
                        </tr>)
                    }
                </tbody>
            </table>}
        </div>
    )
}

export default FlowerList