import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setBulkDeleteIds, setFlowers, useFlowers } from "../../redux/features/flower/flowerSlice";
import { useGetAllFlowersQuery } from "../../redux/features/flower/flowerApi";
import { TFlower } from "../../types";
import { useState } from "react";
import MyPopover from "../ui/MyPopover";
import MoreOptions from "../ui/MoreOptions";
import { flowerCategoryType, flowerFragrances, flowerPriceRange, flowerSizes } from "../../constants/flower.constant";
import { Button, Radio, RadioChangeEvent } from "antd";
import { filterState } from "./InventoryHeader";
import Spinner from "../ui/Spinner";
import { Icon } from "../../icons";
import '../../styles/customTableStyles.css'

const FlowerList = ({ filter, setFilter }: filterState) => {
    const dispatch = useAppDispatch();
    const [id, setId] = useState('');
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    const { data, isLoading } = useGetAllFlowersQuery(filter);
    // const flexStyle = { border: '1px solid rgba(5, 5, 5, 0.06)', padding: "5px 8px" };
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
            {flowerPriceRange.map(price => <Radio.Button key={price} value={price}>{price}</Radio.Button>)}
        </Radio.Group>
    )
    const SelectCategoryTypeContent = (
        <Radio.Group onChange={onTypeChange} style={flexStyle2} size="small">
            {flowerCategoryType.map(type => <Radio.Button key={type} value={type}>{type.toUpperCase()}</Radio.Button>)}
        </Radio.Group>
    )
    const SelectFragranceContent = (
        <Radio.Group onChange={onFragranceChange} style={flexStyle2} size="small">
            {flowerFragrances.map(frag => <Radio.Button key={frag} value={frag}>{frag.toUpperCase()}</Radio.Button>)}
        </Radio.Group>
    )
    const SelectSizeContent = (
        <Radio.Group onChange={onSizeChange} style={flexStyle2} size="small">
            {flowerSizes.map(size => <Radio.Button key={size} value={size}>{size.toUpperCase()}</Radio.Button>)}
        </Radio.Group>
    )
    // second table assets 
    // const columns = [
    //     {
    //         title: 'Name',
    //         dataIndex: 'name'
    //     },
    //     {
    //         title: 'Price',
    //         dataIndex: 'age',
    //         sorter: (a, b) => a.age - b.age,
    //     },
    //     {
    //         title: 'Address',
    //         dataIndex: 'address',
    //         filters: [
    //             {
    //                 text: 'London',
    //                 value: 'London',
    //             },
    //             {
    //                 text: 'New York',
    //                 value: 'New York',
    //             },
    //         ],
    //         onFilter: (value: string, record) => record.address.startsWith(value),
    //         filterSearch: true,
    //         width: '40%',
    //     },
    // ];

    return (
        <div style={{ padding: "20px" }}>
            {isLoading ? <Spinner /> : <table id="single-cart" style={{ width: "100%", paddingLeft: "20px" }}>
                <tr style={{ textAlign: "left", border: '1px solid red' }}>
                    <th ></th>
                    <th >Image</th>
                    <th >Flower Name</th>
                    <th >Price <MyPopover child1={<Icon.FilterTwo />} child2={SelectPriceRangeContent} /></th>
                    <th >Quantity</th>
                    <th >Category <MyPopover child1={<Icon.FilterTwo />} child2={SelectCategoryTypeContent} /></th>
                    <th >Fragrance <MyPopover child1={<Icon.FilterTwo />} child2={SelectFragranceContent} /></th>
                    <th >Size <MyPopover child1={<Icon.FilterTwo />} child2={SelectSizeContent} /></th>
                    <th >Action</th>
                </tr>
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
                        <td><MyPopover key={flower?._id} child1={<Button size="small" icon={<Icon.MoreOutlined />} onClick={() => handleInfoClick(flower?._id)}>Options</Button>} child2={<MoreOptions id={id} />} /></td>
                    </tr>)
                }
            </table>}

        </div>
    )
}

export default FlowerList;
