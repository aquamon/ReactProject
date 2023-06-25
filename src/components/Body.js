import { useState , useEffect } from "react";
// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

debugger;

function filterData(searchInput , restaurants) {
    
    return restaurants.filter(restaurant => restaurant.data.name.includes(searchInput));
}



const BodyComponent = () => {


    const [searchInput , setSearchInput] = useState("");
    const [restaurants , setRestaurants] = useState([]);

    useEffect(()=>{
      getData();
    } , []);

    async function getData(){

      const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9134657&lng=77.6265846&page_type=DESKTOP_WEB_LISTING");
    
      const json = await data.json();
    
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    
    
    
      console.log(json);
    }



  

  return (restaurants.length === 0) ? <Shimmer/> : (
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
                const data = filterData(searchInput,restaurants);

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