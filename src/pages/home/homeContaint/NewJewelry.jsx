import Title from "../../../components/Title";
import img1 from "../../../assets/collection/zodiac-coins.jpg"
import img2 from "../../../assets/collection/catalogue-12.webp"
import img3 from "../../../assets/collection/sparkling-avenues.webp"
import img4 from "../../../assets/collection/pretty-in-pink.jpg"
const NewJewelry = () => {
    return (
        <div className="md:mx-20 mb-20 mx-5">
            <Title heading={"New For You!"} subHeading={"Our latest releases, just for you !"}></Title>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="relative">
                    <img src={img1} alt="" />
                    <button className="btn-detail bg-white absolute bottom-4 left-[70px]">Explore More</button>
                </div>
                <div className="relative">
                    <img src={img2} alt="" />
                    <button className="btn-detail bg-white absolute bottom-4 left-[70px]">Explore More</button>
                </div>
                <div className="relative">
                    <img src={img3} alt="" />
                    <button className="btn-detail bg-white absolute bottom-4 left-[70px]">Explore More</button>
                </div>
                <div className="relative">
                    <img src={img4} alt="" />
                    <button className="btn-detail bg-white absolute bottom-4 left-[70px]">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default NewJewelry;