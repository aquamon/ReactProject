import { useState , useEffect } from "react";
// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

// function filterData(searchInput , restaurants) {
    
//     return restaurants.filter(restaurant => restaurant.data.name.includes(searchInput));
// }



const BodyComponent = () => {


    const [searchInput , setSearchInput] = useState("");
    const [allRestaurants , setAllRestaurants] = useState([]);

    const [filteredRestaurants , setFilteredRestaurants] = useState([]);

    useEffect(()=>{
      getData();
    } , []);

    async function getData(){

      const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9134657&lng=77.6265846&page_type=DESKTOP_WEB_LISTING");
    
      const json = await data.json();
    
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    
    
      console.log(json);
    }

  return (filteredRestaurants.length === 0) ? <Shimmer/> : (
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
                const data = filterData(searchInput,allRestaurants);

                setFilteredRestaurants(data);
                
            }}>Search</button>
        </div>
      <div className="restaurantList">
        {
          filteredRestaurants.map((restaurant) => {
            return (
              <Link 
                key={restaurant.data.id}
                to={"/restaurants/" + restaurant.data.id}
              >
                <RestaurantCard resData={restaurant}/>
              </Link>
            )
          })
        }
      </div> 
     </>       
  )
};

export default BodyComponent;