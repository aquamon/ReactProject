import { useRouteError } from "react-router-dom";

const ErrorComponent = ()=>{

    const error = useRouteError();
    // console.log(error);

    return (
        <>
            <h1>Error Page</h1>
            <div>Oops something went wrong</div>
            <h1>{error.status + " : " + error.statusText}</h1>
        </>
    )
}

export default ErrorComponent;