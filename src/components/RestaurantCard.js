import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props;


    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
      } = resData?.data;
    
    return (
  
        <div className="res-card w-[200] p-2 m-2 shadow-lg bg-pink-50" >
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
      </div>
    )
  }

  export default RestaurantCard;