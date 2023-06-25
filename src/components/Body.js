import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";


function filterData(searchInput , restaurants) {
    
    return restaurants.filter(restaurant => restaurant.data.name.includes(searchInput));
}

const BodyComponent = () => {

    const [searchInput , setSearchInput] = useState("");
    const [restaurants , setRestaurants] = useState(restaurantList);

  return (
     <>
        <div className="search-container">
            <input 
                type="text"
                className="search-input"
                value={searchInput}
                placeholder="Search"
                onChange={ (e) => {
                    setSearchInput(e.target.value);
                }}
            ></input>
            <button className="search-button" onClick={()=>{
                const data = filterData(searchInput,restaurantList);

                setRestaurants(data);
                
            }}>Search</button>
        </div>
      <div className="restaurantList">
        {
          restaurants.map((restaurant) => {
            return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
            )
          })
        }
      </div> 
     </>       
  )
};

export default BodyComponent;