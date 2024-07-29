import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomeCard = ({ item }) => {
    const { image, category } = item
    return (
        <div>
            <div className="card rounded-none bg-base-100 shadow-xl">
                <div className="h-48 mx-auto">
                    <img className="h-full" src={image} alt="gold" />
                </div>
                <div className="card-body">
                    <h2 className="text-center font-semibold text-xl text-[#832729]">{category}</h2>
                    <button className="mt-2 px-5 flex justify-center items-center hover:text-[#832729] hover:justify-evenly hover:duration-1000 ">
                        <Link to="/allJewelry">
                            <span className="text-sm">Explore </span>
                        </Link>
                        <Link to="/allJewelry">
                            <span ><AiOutlineArrowRight className="ml-2 text-sm"></AiOutlineArrowRight> </span>
                        </Link>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default HomeCard;