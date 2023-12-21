import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { RESTAURANTS_API } from "./../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);
  const [location, setLocation] = useState([17.4171113, 78.4616959]);
  const [place, setPlace] = useState("Hyderabad");

  useEffect(() => {
    fetchData();
  }, [location]);

  const fetchData = async () => {
    const data = await fetch(
      RESTAURANTS_API +
        `lat=${location[0]}&lng=${location[1]}`
    );
    const json = await data.json();
    let resData = json?.data?.cards[2]?.card?.card?.gridElements
      ? json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      : json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
    const placeData = await fetch(
      "https://api.openweathermap.org/geo/1.0/reverse?appid=5312b0df12612a90867f342c2c5b0419&" +
        `lat=${location[0]}&lon=${location[1]}`
    );
    const placeDatajson = await placeData.json();
    setPlace(
      `${placeDatajson[0].name.split(" ")[0]}, ${placeDatajson[0].state}, ${
        placeDatajson[0].country
      }`
    );
    setRestaurantList(resData);
    setFilteredResList(resData);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Seems like you're offline!!! Please check your internet connection.
      </h1>
    );
  }

  return (
    <div className="body w-[95%] sm:w-full mx-auto">
      <div className="filter flex flex-col gap-4">
        <form className="flex flex-col items-center gap-3">
          <input
            type="text"
            className="w-96 px-3 py-1 border-2 border-gray-400 rounded-md"
            value={searchText}
            placeholder="Search any restaurant you want to filter..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 rounded-md hover:shadow-md font-semibold bg-gray-100 text-gray-600"
            onClick={(e) => {
              e.preventDefault();
              const filteredList = restaurantList?.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
        </form>
        <div className="flex justify-center gap-10">
          <button
            className="px-4 py-2 w-48 text-black-600 font-semibold rounded-md hover:shadow-md hover:bg-orange-400 hover:text-white bg-gray-200"
            onClick={() => {
              navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                console.log([lat, lon]);
                setLocation([lat, lon]);
              });
            }}
          >
            Access Location
          </button>
          <button
            className="px-4 py-2 w-48 text-black-600 font-semibold rounded-md hover:shadow-md hover:bg-orange-400 hover:text-white bg-gray-200"
            onClick={() => {
              setFilteredResList(
                restaurantList?.filter((res) => res?.info?.avgRating > 4)
              );
            }}
          >
            Filter top restaurants
          </button>
        </div>
      </div>
      {restaurantList?.length ? (
        <div>
          <h1 className="text-center mt-6 mb-2 text-xl text-gray-600 font-bold">
            Showing restaurants in{" "}
            <span className="font-bold text-orange-400 hover:text-gray-600 hover:cursor-pointer">
              {place}
            </span>
          </h1>
          <div className="res-container flex flex-wrap justify-center gap-2">
            {filteredResList?.map((restaurant) => (
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            ))}
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
