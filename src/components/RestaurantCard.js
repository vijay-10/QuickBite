import { CLOUDINARY_URL } from "./../utils/constants";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, id } =
    resData?.info;

  return (
    <div
      to={"/restaurants/" + id}
      className="w-[295px] my-4 p-4 hover:p-3 transition-all rounded-lg shadow-md hover:shadow-2xl bg-gray-50 hover:bg-orange-200 border border-gray-300"
    >
      <Link
        className="flex flex-col justify-between gap-2 border-blue-400 text-gray-600"
        to={"/restaurants/" + id}
      >
        <img
          className="rounded-lg shadow-lg mb-2 border border-gray-300"
          alt="res-logo"
          src={CLOUDINARY_URL + cloudinaryImageId}
        />
        <h3 className="text-gray-600 text-[0.96rem] font-bold">{name}</h3>
        <h4 className="text-sm font-semibold">
          [{cuisines.slice(0, 2).join(", ")}]
        </h4>
        <div className="flex justify-between items-center text-sm font-bold">
          <h4>{costForTwo}</h4>●<h4>{sla?.deliveryTime} mins</h4>●
          <h4
            className={`border flex items-center rounded-md text-white px-2 py-1 gap-1 ${
              avgRating >= 4 ? "bg-green-400" : "bg-red-500"
            }`}
          >
            <AiFillStar className="text-base text-white" />{" "}
            <p>{avgRating ? avgRating.toFixed(1) : "NA"}</p>
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
