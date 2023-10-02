import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo  = useRestaurantMenu(resId);

  // const fetchMenu = async () => {

  //   const data = await fetch(RESTAURANT_ITEM_API + resId)
  //   // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6232102&lng=88.4106973&restaurantId=87313");
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(" ,")}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}-{" "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
            <p>{item?.card?.info?.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
