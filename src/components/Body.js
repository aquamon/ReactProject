import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";


const BodyComponent = () => {

    const [searchInput , setSearchInput] = useState("Default value");

    const [checkSearchClicked, setSearchClicked] = useState("false");

  return (
     <>
        <div className="search-container">
            <input 
                type="text"
                className="search-input"
                value={searchInput}
                placeholder="Search"
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}
            ></input>
            <button className="search-button" onClick={()=>{
                if(checkSearchClicked == "false"){
                    setSearchClicked("true");
                }
                else{
                    setSearchClicked("false");
                }

            }}>Search</button>
            <h1>{checkSearchClicked}</h1>
        </div>
      <div className="restaurantList">
        {
          restaurantList.map((restaurant) => {
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