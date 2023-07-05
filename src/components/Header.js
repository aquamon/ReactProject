import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Title = () => (
    <Link to="/">
        <img className="h-28 m-2"
            src = "https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=740"
                alt = "Logo"></img>
    </Link>
);



const HeaderComponent = () => {

    const [isLoggedIn , setIsLoggedIn] = useState(false);


    const {userFromContext} = useContext(userContext);

    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title/>
            <div className="nav-items">
                <ul className="flex py-10">
                    <Link to="/">
                        <li className="px-2">Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className="px-2">About Us</li>
                    </Link>
                    <Link to="/contact">
                        <li className="px-2">Contact</li>
                    </Link>
                    <Link to="/instamart">
                        <li className="px-2">Instamart</li>
                    </Link>
                    <Link to="/cart">
                        <li className="px-2">Cart - {cartItems.length}</li>
                    </Link>
                    
                </ul>
            </div>
            <span className="p-10 font-bold text-red-900">{userFromContext.name}</span>
            <div className="m-8">
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