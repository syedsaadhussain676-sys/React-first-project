import { baseURL } from "../utils/constants";

const RestaurantCard = ({ resDetails }) => {
  let {
    resName,
    cuisine,
    avgRating,
    delieveryTime,
    costForTwo,
    imgId,
    location,
  } = resDetails;

  return (
    <div className="res-card">
      <img className="res-logo" src={baseURL + resDetails.info.cloudinaryImageId} alt="res-logo" />
      <h3>{resDetails.info.name}</h3>
      <h4>{resDetails.info.cuisines.join(", ")}</h4>
      <h4>⭐ {resDetails.info.avgRating} Stars</h4>
      <h4>
        {resDetails.info.sla.deliveryTime} mins | ₹{resDetails.info.costForTwo} for two
      </h4>
      <h4>{resDetails.info.locality}</h4>
    </div>
  );
};

export default RestaurantCard;