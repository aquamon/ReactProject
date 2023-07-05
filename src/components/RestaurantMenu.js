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

    const { area, city, avgRating, name , cuisines , costForTwoMessage , cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    console.log(itemCards);

    const dispatch = useDispatch();

    const addFoodItem = (item)=>{ 

      dispatch(addItem(item));
    }

    return(
        <div className="flex">
          <div className="p-2 m-2">
            <h1>Restaurant Id : {resId}</h1>
            <h2>{name}</h2>

            <img alt="Restaurant Menu Image" src={IMG_CDN_URL + cloudinaryImageId}/>
            <h3>{area}</h3>
            <h3>{city}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>{cuisines.join(", ")}</h3>
          </div>
          <div className="p-2 m-2">
            <h2>Menu</h2>
            <ul>
              {itemCards.map((item) => (
                <li key={item.card.info.id}>
                  {item.card.info.name} -{" Rs."}
                  {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                  <button className="p-1 m-1  bg-green-100" onClick={()=>addFoodItem(item)}>Add</button>
                </li>
              ))}
            </ul>
          </div>
    </div>
  );
    
}

export default RestaurantMenu;