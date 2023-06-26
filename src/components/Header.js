import { useState } from "react";

const Title = () => (
    <a href="/">
        <img className="logo" 
            src = "https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=740"
                alt = "Logo"></img>
    </a>
);



const HeaderComponent = () => {

const [isLoggedIn , setIsLoggedIn] = useState(false);


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
            <div>
                {
                    (isLoggedIn? <button onClick={ ()=>{
                        setIsLoggedIn(false);
                    }}>Logout</button> : <button onClick={ ()=>{
                        setIsLoggedIn(true);
                    }
                    }>Login</button>)
                }
            </div>
        </div>
    )
};
//default export
export default HeaderComponent;