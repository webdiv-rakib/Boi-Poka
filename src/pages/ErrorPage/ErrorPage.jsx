import { useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate(-1);
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-center p-5">
            <h1 className="text-9xl font-black text-gray-800">404</h1>
            <h1 className="text-3xl font-black text-red-500">Ops! Page Not Found</h1>
            <br />
            <button className="btn" onClick={handleBackToHome}>Back to Home</button>
        </div>
    );
};

export default ErrorPage;