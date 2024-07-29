import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/collection/images.png";
const ErrorPage = () => {
    const { error, statusText } = useRouteError();
    return (
        <div className="flex flex-col items-center mt-16">
            <div className="lg:mt-32">
                <img src={errorImg} />
            </div>
            <h2 className="text-2xl mt-2 font-bold">Page {statusText}</h2>
            <p>Error:{error.message}</p>
            <Link to="/"><button className="btn-primary px-5 mt-5">Back to Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;