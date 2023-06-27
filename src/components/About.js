import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
const AboutComponent = ()=>{
    return (
        <div>
            <h1>This is the About us page</h1>
            <Outlet/>
            <ProfileClassComponent/>

        </div>
    )
}

export default AboutComponent;