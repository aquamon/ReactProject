import { useState , useEffect } from "react";
// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
// function filterData(searchInput , restaurants) {
    
//     return restaurants.filter(restaurant => restaurant.data.name.includes(searchInput));
// }



const BodyComponent = ({user}) => {


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

    const online = useOnline();

    if(!online){
      return <h1>🔴 Your internet connection is lost</h1>
    }

  return (filteredRestaurants?.length === 0) ? <Shimmer/> : (
     <>
        <div className="p-5 bg-pink-50 my-5">
            <input 
                type="text"
                className="focus:border-sky-500 p-2 m-2 focus:bg-pink-400s"
                value={searchInput}
                placeholder="Search"
                onChange={ (e) => {
                    setSearchInput(e.target.value);
                }}
            ></input>
            <button className="p-1 m-2 bg-pink-400 rounded-md hover:bg-pink-200" onClick={()=>{
                const data = filterData(searchInput,allRestaurants);

                setFilteredRestaurants(data);
                
            }}>Search</button>
        </div>
      <div className="flex flex-wrap">
        {
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link 
                key={restaurant.data.id}
                to={"/restaurants/" + restaurant.data.id}
              >
                <RestaurantCard resData={restaurant} user={user}/>
              </Link>
            )
          })
        }
      </div> 
     </>       
  )
};

export default BodyComponent;