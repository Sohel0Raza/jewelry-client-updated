import { AiOutlineShoppingCart } from "react-icons/ai";

const JewelryCard = ({ item }) => {
    const { image, name, description, price, material, weight } = item
    return (
        <div className="md:flex items-center  shadow-lg p-5">
            <div className="md:w-1/3 md:p-10 p-5 md:h-56 ">
                <img className="h-full w-full" src={image} alt="" />
            </div>
            <div className="md:p-10 md:ml-20 mr-3 ">
                <h2 className="text-xl pb-3 font-semibold text-[#832729] md:border-b-[1px] border-[#832729]">{name}</h2>
                <p className="py-2">{description}</p>
                <p className="font-semibold pb-2"><span className="text-sm">Price</span> <span className="text-2xl"> ${price}</span></p>
                <p className="text-sm">Price Inclusive of all taxes.</p>
                <div className="flex items-center py-1">
                    <p className=" text-sm font-semibold mr-5">Gold Purity:{material}</p>
                    <p className="font-semibold text-sm">Diamond weight: {weight} gm</p>
                </div>
                <div className="flex items-center">
                    <button className="flex items-center btn-detail mt-5">Add To Cart <AiOutlineShoppingCart className="ml-2" /></button>
                    <button className="btn-buy mt-5 ml-5">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default JewelryCard;