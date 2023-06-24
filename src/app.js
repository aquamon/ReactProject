import React  from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent  from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";


const AppLayout = () => {
    return (
        <>
            <HeaderComponent/>
            <BodyComponent/>
            <FooterComponent/>
        </>
    )
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
//passing a react element inside the root.
//This render method, takes an object and modifies the DOM.
//Hence DOM is rendered with the values of this react element, which is nothing but a 
//JS object.

