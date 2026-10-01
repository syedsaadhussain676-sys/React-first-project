export const RestaurantCard = ({resDetails}) => {
  // props = {
                 //    resDetails: {
                                                // resName: "Paradise",
                                                // cuisine: ["Biryani", "Chinese", "Mughlai", "Tandoor"],
                                                // avgRating: 4.2,
                                                // delieveryTime: 38,
                                                // costForTwo: 300,
                                                // imgId: "ggbuknqzqc4qoqfnl2cr"
                                // }
  // }

  const {resName, cuisine, avgRating, delieveryTime, costForTwo, imgId} = resDetails;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ggbuknqzqc4qoqfnl2cr"
        alt="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>⭐ {avgRating} Stars</h4>
      <h4>{delieveryTime} mins | ₹{300} for two</h4>
    </div>
  );
};