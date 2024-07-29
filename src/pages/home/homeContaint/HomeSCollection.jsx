import Title from "../../../components/Title";
import img1 from '../../../assets/collection/collection-gold-bangles-bracelets-with-diamonds-them_1340-42786.avif';
import img2 from '../../../assets/collection/flat-lay-essentials-bead-working_23-2148815813.avif';
import img3 from '../../../assets/collection/model-career-kit-still-life_23-2150218026.avif';
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const HomeSCollection = () => {
    return (
        <div className="md:mx-20 my-10 p-5 md:p-0">
            <Title heading={"Shop By Collections"} subHeading={"Whatever the occasion, we've got a beautiful piece of jewelry for you."}></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="border-[1px] ">
                    <img src={img1} alt="" />
                    <div className="p-4 flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-[#832729] ">Luxury Collection</h2>
                        <Link to="/allJewelry"><button className="hover:text-red-800"><AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight></button></Link>
                    </div>
                </div>
                <div className="border-[1px] ">
                    <img src={img3} alt="" />
                    <div className="p-4 flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-[#832729]">The Italian Connection</h2>
                        <Link><button className="hover:text-red-800"><AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight></button></Link>
                    </div>
                </div>
                <div className="border-[1px] ">
                    <img src={img2} alt="" />
                    <div className="p-4 flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-[#832729]">Heirloom Collection</h2>
                        <Link><button className="hover:text-red-800"><AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight></button></Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default HomeSCollection;