import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>OOps! Something went wrong</h2>
            <i>{error.statusText || error.message}</i>

            {
                error.status === 404 &&
                <div>
                    <p>page not found</p>
                    <p>Please go back</p>
                    <Link to='/'><button>Go Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;