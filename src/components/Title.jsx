
import line from '../assets/banner/Line-Design.svg';

const Title = ({heading, subHeading}) => {
    return (
        <div>
            <div className="text-center">
                <h2 className="text-[#832729] text-3xl p-3 font-semibold">{heading}</h2>
                <p>{subHeading}</p>
            </div>
            <img src={line} alt="" />
        </div>
    );
};

export default Title;