import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

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


    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title/>
            <div className="nav-items">
                <ul className="flex m-8 gap-8">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About Us</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/instamart">
                        <li>Instamart</li>
                    </Link>
                    <li>Cart</li>
                    
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