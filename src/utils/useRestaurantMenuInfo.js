import { useState , useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenuInfo = (resId) => {

    //Get data from API

    const [restaurantMenuDetails , setRestaurantMenuDetails] = useState(null);

    

    const getRestaurantMenuInfo = async ()=>{
        
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        setRestaurantMenuDetails(json.data);
    }

    useEffect(()=>{
        getRestaurantMenuInfo();
    } , []);

    return restaurantMenuDetails;
    //Return data
    
}

export default useRestaurantMenuInfo;