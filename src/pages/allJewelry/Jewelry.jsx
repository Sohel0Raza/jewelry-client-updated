import { useParams } from "react-router-dom";
import useAllJewelry from "../../hooks/useAllJewelry";
import Title from "../../components/Title";
import JewelryCard from "../../components/JewelryCard";

const Jewelry = () => {
    const {id} = useParams()
    const [allJewelry] = useAllJewelry()
    const jewelry = allJewelry.filter(item => item._id === id)
    return (
        <div className="pt-14 md:mx-[71px]">
            <Title></Title>
            <div className="">
                {jewelry.map(item => <JewelryCard
                key={item._id}
                item={item}
                ></JewelryCard>)}
            </div>
        </div>
    );
};

export default Jewelry;