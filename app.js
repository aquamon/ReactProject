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

const burgerKing = {
    name : "Burger King",
    image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zcbqyrw180xvikcbqdsc",
    cuisines : ["American" , "Chinese"],
    rating : "2.9"
}

const RestaurantCard = () => {
    return (
        <div className="card">
            <img src={burgerKing.image}></img>
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cuisines.join(', ')}</h3>
            <h4>{burgerKing.rating}</h4>
        </div>
    )
}

const BodyComponent = () => {
    return (
        <div className="restaurantList">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/> 
        </div>        
    )
};

const FooterComponent = () => {
    return (
        <h4 className="footer" style = {{
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

