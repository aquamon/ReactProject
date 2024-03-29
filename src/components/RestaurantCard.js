import { IMG_CDN_URL } from "../utils/constants";
import { useContext } from "react";
import userContext from "../utils/userContext";
const RestaurantCard = ({resData , user}) => {

    const {userFromContext} = useContext(userContext);

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
      } = resData?.data;
    
    return (
  
        <div className="w-[200] p-2 m-2 shadow-lg bg-pink-50" >
        <img
          className="res-logo"
          alt="res-logo"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4 className="text-sm italic">{deliveryTime} minutes</h4>
        <h2>{user.name}</h2>
        <h3 className="m-2 p-2 text-red-500">{userFromContext.name}-{userFromContext.email}</h3>
      </div>
    )
  }

  export default RestaurantCard;