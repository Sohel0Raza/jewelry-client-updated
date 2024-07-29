import { AiOutlineArrowRight, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const AllCard = ({ item }) => {
    const { _id, image, name, price } = item
    return (
        <div>
            <div className="card rounded-none bg-base-100 shadow-xl">
                <div className="h-48 mx-auto">
                    <img className="h-full" src={image} alt="gold" />
                </div>
                <div className="card-body">
                    <h2 className="font-semibold truncate  text-[#832729]">{name}</h2>
                    <p className="font-semibold">$ {price}</p>
                    <div className="mx-auto">
                        <Link to={`/jewelry/${_id}`}>
                            <button className="flex items-center btn-detail mt-5">More Details<AiOutlineArrowRight className="ml-2" /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCard;