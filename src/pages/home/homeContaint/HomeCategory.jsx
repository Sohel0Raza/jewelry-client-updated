import HomeCard from "../../../components/HomeCard";
import Title from "../../../components/Title";
import useAllJewelry from "../../../hooks/useAllJewelry";

const HomeCategory = () => {
    const [allJewelry,loading] = useAllJewelry()
    if (loading) {
        return <div className="flex justify-center py-40"><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div className="my-10 mx-5 md:mx-20">
            <Title heading={"Shop By Category"} subHeading={"Browse through your favorite categories. We've got them all!"}></Title>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {
                    allJewelry?.slice(0, 4).map(item => <HomeCard
                        key={item._id}
                        item={item}
                    ></HomeCard>)
                }
            </div>
        </div>
    );
};

export default HomeCategory;