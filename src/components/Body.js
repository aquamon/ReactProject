import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";


const BodyComponent = () => {
  return (
      <div className="restaurantList">
        {
          restaurantList.map((restaurant) => {
            return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
            )
          })
        }
      </div>        
  )
};

export default BodyComponent;