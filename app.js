import React  from "react";
import ReactDOM  from "react-dom/client";



const Title = () => (
    <a href="/">
        <img className="logo" 
            src = "https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=740"
                alt = "Logo"></img>
    </a>
);

const HeaderComponent = () => {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const BodyComponent = () => {
    return (
        <h4>This is a Body</h4>
    )
};

const FooterComponent = () => {
    return (
        <h4>This is a Footer</h4>
    )
};
const AppLayout = () => {
    return (
        <React.Fragment>
            <HeaderComponent/>
            <BodyComponent/>
            <FooterComponent/>
        </React.Fragment>
    )
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
//passing a react element inside the root.
//This render method, takes an object and modifies the DOM.
//Hence DOM is rendered with the values of this react element, which is nothing but a 
//JS object.

