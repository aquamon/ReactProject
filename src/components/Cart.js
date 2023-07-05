import { useSelector } from "react-redux"
import FoodItemComponent from "./FoodItem";


const CartComponent = ()=>{

    const cartItems = useSelector(store => store.cart.items);
    
    console.log(cartItems);
    return (
        <div>
            <h1 className="font-bold text-3xl"> Cart Items </h1>
            

            {cartItems.map((item) => (
                    <FoodItemComponent key = {item.card.info.id} name={item.card.info.name} imageId={item.card.info.imageId} price={item.card.info.price}/>
            ))}

        </div>

        


    )
}

export default CartComponent