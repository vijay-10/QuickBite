import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    locality,
    city,
    feeDetails,
    totalRatingsString,
    avgRating,
  } = resInfo?.cards[0]?.card?.card?.info;

  let categories =
    resInfo?.cards[2]?.groupedCard? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards : resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  categories = categories.filter((category) => {
        return category?.card?.card["@type"].endsWith("ItemCategory");
      })
      .map((category) => category?.card?.card);

  return (
    <div className="w-11/12 md:w-8/12 mx-auto">
      <div className="text-center my-6 pb-6 border-b border-gray-300 flex justify-between items-center gap-6">
        <div className="text-left flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-orange-400">{name}</h1>
          <p className="text-gray-400 text-sm">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
          <p className="text-gray-400 text-sm">
            {locality}, {city}, {feeDetails.message}
          </p>
        </div>
        <div className=" h-fit px-1 py-2 flex flex-col justify-center border border-gray-400 rounded-lg text-sm font-bold bg-gray-50">
          <div
            className={`border-b pb-1 border-gray-400 w-full flex justify-center gap-1 ${
              avgRating >= 4 ? "text-green-500" : "text-red-500"
            }`}
          >
            <AiFillStar className="text-lg" />{" "}
            <span>{avgRating?.toFixed(1)}</span>
          </div>
          <span className="pt-1  text-gray-500">{totalRatingsString}</span>
        </div>
      </div>
      {categories?.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.title}
            showItems={index == showIndex}
            setIndex={
              showIndex === index ? () => setShowIndex(null) : () => setShowIndex(index)
            }
            category={category}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
