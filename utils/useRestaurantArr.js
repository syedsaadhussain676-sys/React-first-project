import { useEffect, useState } from "react";
import { swiggyRestaurantURL } from "../constants";

const useRestaurantArr = () => {
  const [restaurantsArr, setRestaurantsArr] = useState([null]);

  async function fetchRestaurants() {
    const response = await fetch(swiggyRestaurantURL);
    const data = await response.json();
    setRestaurantArr(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );

    console.log(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }
  useEffect(() => {
    fetchRestaurantArr();
  }, []);

  return restaurantsArr;
};


export default useRestaurantArr;