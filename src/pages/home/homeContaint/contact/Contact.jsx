import Title from "../../../../components/Title";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CiLocationOn,CiVideoOn } from "react-icons/ci";

const Contact = () => {
    return (
        <div className="md:mx-20 mx-5 mb-10">
            <Title heading={"Connect With Us"} subHeading={"We are always available to guide you at your convenience."}></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex items-center p-2 bg-[#F2F3EE] justify-evenly rounded text-[#ae3e40] border-[1px] border-[#832729]">
                    <div>
                        <h4 className="text-xl font-semibold">Connect On</h4>
                        <h2 className="text-2xl font-semibold">WhatsApp</h2>
                        <button className="hover:bg-[#d7595b] bg-[#ae3e40] px-5 py-1 mt-3 text-white">Connect</button>
                    </div>
                    <div className="ml-3">
                        <AiOutlineWhatsApp className="text-9xl text-[#c29fa0]" />
                    </div>
                </div>
                <div className="flex items-center p-2 bg-[#F2F3EE] justify-evenly rounded text-[#ae3e40] border-[1px] border-[#832729]">
                    <div>
                        <h4 className="text-xl font-semibold">Book an

                        </h4>
                        <h2 className="text-2xl font-semibold">Appointment</h2>
                        <button className="hover:bg-[#d7595b] bg-[#ae3e40] px-5 py-1 mt-3 text-white">Book</button>
                    </div>
                    <div className="ml-3">
                        <CiLocationOn className="text-9xl text-[#c29fa0]" />
                    </div>
                </div>
                <div className="flex items-center p-2 bg-[#F2F3EE] justify-evenly rounded text-[#ae3e40] border-[1px] border-[#832729]">
                    <div>
                        <h4 className="text-xl font-semibold">Schedule a
                        </h4>
                        <h2 className="text-2xl font-semibold">Video Call</h2>
                        <button className="hover:bg-[#d7595b] bg-[#ae3e40] px-5 py-1 mt-3 text-white">Schedule</button>
                    </div>
                    <div className="ml-3">
                        <CiVideoOn className="text-9xl text-[#c29fa0]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;