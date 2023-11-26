import React from "react";
import { CLOUDINARY_URL } from "./../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemsList = ({ items }) => {
    const success = () => {
        toast.success("Item added", { position: toast.POSITION.BOTTOM_CENTER });
      };
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    success();
  };
  return (
    <div className="items flex flex-col py-4 gap-2">
      {/* always use optional chaining idk why but it threw "TypeError: Cannot read properties of undefined (reading 'map')" error 
        and when i used optional chaining it's working */}
      {items?.map((item) => (
        <div
          className="flex justify-between border-b py-4 border-gray-400"
          key={item?.card?.info?.id}
        >
          <div className="flex flex-col w-8/12 md:w-10/12">
            <span className="font-semibold">{item.card.info.name}</span>
            <span className="tracking-wider">
              ₹ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}
            </span>
            <div className="text-sm text-gray-400">
              {item?.card?.info?.description}
            </div>
          </div>
          <div className="relative w-28 sm:w-36">
            <button
            // don't do this because call back function takes event object as argument for onclick
            // you should only pass the item in the function body
            //   onClick={(item) => handleAddItem(item.card.info)}
              onClick={() => handleAddItem(item)}
              className="absolute bottom-0 left-9 bg-orange-400 text-white font-semibold px-2 py-1 rounded-md shadow-md"
            >
              ADD +
            </button>
            {item?.card?.info?.imageId && (
              <img
                className="rounded-lg"
                src={CLOUDINARY_URL + item.card.info.imageId}
              ></img>
            )}
          </div>
        </div>
      ))}
      <ToastContainer autoClose={500} />
    </div>
  );
};

export default ItemsList;
