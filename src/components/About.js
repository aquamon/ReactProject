import { Outlet } from "react-router-dom";
const AboutComponent = ()=>{
    return (
        <div>
            <h1>This is the About us page</h1>
            <Outlet/>

        </div>
    )
}

export default AboutComponent;