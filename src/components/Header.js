import { useState } from "react";
import { Link } from "react-router-dom";


const Title = () => (
    <Link to="/">
        <img className="logo" 
            src = "https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=740"
                alt = "Logo"></img>
    </Link>
);



const HeaderComponent = () => {

const [isLoggedIn , setIsLoggedIn] = useState(false);


    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About Us</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
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