import { Link } from "react-router-dom";

const ErrorPage = () => {
      return (
            <div className="max-w-fit mx-auto mt-60 items-center text-center">
                  <h1 className="text-6xl font-extrabold text-red-600 mb-2">404 Error</h1>
                  <h2 className="text-2xl font-bold mb-2">Oops.You entered the wrong link.</h2>
                  <button className="btn btn-error text-white bg-red-600"><Link to="/">Go to Home</Link></button>
                  
            </div>
      );
};

export default ErrorPage;