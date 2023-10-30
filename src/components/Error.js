import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="text-center h-screen flex flex-col justify-center items-center text-4xl">
            <h1>Oops! something went wrong</h1>
            <p>This is a custom error page</p>
            <p>Error {err? `${err.status}: ${err.statusText}` : 'Please check your resources!'}</p>
        </div>
    )
}

export default Error;