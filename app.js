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

const styleObj = {
    backgroundColor : "red",
}

const RestaurantCard = () => {
    return (
        <div className="card">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zcbqyrw180xvikcbqdsc"></img>
            <h2>Burger King</h2>
            <h3>Burgers American</h3>
            <h4>4.2 Stars</h4>
        </div>
    )
}

const BodyComponent = () => {
    return (
        <div>
            <RestaurantCard/>
        </div>        
    )
};

const FooterComponent = () => {
    return (
        <h4 style = {{
            backgroundColor : "blue"
        }}>This is a Footer</h4>
    )
};

const heading1 = <p>thiheiaei</p>
const heading2 = <p>thiheiaasdfasdfadsfei</p>
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

