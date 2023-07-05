import { useDispatch, useSelector } from "react-redux"
import FoodItemComponent from "./FoodItem";
import { clearCart } from "../utils/cartSlice";


const CartComponent = ()=>{

    const cartItems = useSelector(store => store.cart.items);


    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    
    console.log(cartItems);
    return (
        <div>
            <h1 className="font-bold text-3xl"> Cart Items </h1>
            
            <button className="bg-green-100 m-2 p-2" onClick={()=>handleClearCart()}>Clear Cart</button>
            {cartItems.map((item) => (
                    <FoodItemComponent key = {item.card.info.id} name={item.card.info.name} imageId={item.card.info.imageId} price={item.card.info.price}/>
            ))}

        </div>

        


    )
}

export default CartComponent