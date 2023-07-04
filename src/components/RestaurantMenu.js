import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useRestaurantMenuInfo from "../utils/useRestaurantMenuInfo";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";



const RestaurantMenu = () => {

    const {resId} = useParams();

    // const resInfo = useRestaurantMenu(resId);

    const resInfo = useRestaurantMenuInfo(resId);

    if(resInfo == null) return <Shimmer/>;

    const {name , cuisines , costForTwoMessage , cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    console.log(itemCards);

    const dispatch = useDispatch();

    const handleAddItem = () => {
      dispatch(addItem("Grapes"));
    }

    return(
        <div className="menu">
          <img alt="Restaurant Menu Image" src={IMG_CDN_URL + cloudinaryImageId}/>
          <h1>{name}</h1>
          <p>
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
          <div>
            <button className="p-2 m-2 bg-green-100" onClick={()=>handleAddItem()}>Add Item</button>
          </div>
          <h2>Menu</h2>
          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} -{" Rs."}
                {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </li>
            ))}
          </ul>
    </div>
  );
    
}

export default RestaurantMenu;