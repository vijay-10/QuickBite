import { BsArrowUpSquare, BsArrowDownSquare } from "react-icons/bs";
import ItemsList from "./ItemsList.js";

const RestaurantCategory = ({ showItems, setIndex, category }) => {
  return (
    <div
      className={`hover:shadow-xl hover:py-5 hover:bg-orange-50 transition-all p-4 mb-2 ${
        showItems ? "bg-orange-50" : "bg-gray-50"
      }  border border-gray-300 rounded-lg shadow-md`}
    >
      {/* Accordian header */}
      <div className="flex justify-between cursor-pointer" onClick={setIndex}>
        <span className="text-lg font-bold text-gray-600">
          {category?.title} (
          {category?.itemCards?.length
            ? `${category?.itemCards?.length} items`
            : "Not available"}
          )
        </span>
        <span className="text-2xl">
          {showItems ? (
            <BsArrowUpSquare className="text-red-500" />
          ) : (
            <BsArrowDownSquare className="text-green-400" />
          )}
        </span>
      </div>
      {/* Accordian body */}
      {showItems && <ItemsList items={category?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
