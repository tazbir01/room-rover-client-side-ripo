import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="text-center space-y-3">
                <img className="rounded-2xl" src="https://i.ibb.co/ctLYPmT/error-page1.png" alt="" />
                <p className="text-2xl font-medium">Page not found</p>
                <div className="flex justify-center items-center btn-primary rounded-xl p-2 font-medium">
                    <Link to="/"><BiArrowBack className="inline"></BiArrowBack> Go back</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;