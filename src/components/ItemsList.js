import React from "react";
import { CLOUDINARY_URL } from "./../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemsList = ({ items }) => {
  const success = () => {
    toast.success("Item added", { position: toast.POSITION.BOTTOM_CENTER });
  };
  const info = () => {
    toast.info("Item removed", { position: toast.POSITION.BOTTOM_CENTER });
  };
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store?.cart?.items);
  const handleAddItem = (id, item) => {
    dispatch(addItem([id, item]));
    success();
  };
  const handleRemoveItem = (id, item) => {
    dispatch(removeItem([id, item]));
    info();
  };
  console.log(items);
  const itemIds = Object.keys(items);
  return (
    <div className="items flex flex-col py-4 gap-2">
      {/* always use optional chaining idk why but it threw "TypeError: Cannot read properties of undefined (reading 'map')" error 
        and when i used optional chaining it's working */}
      {itemIds?.map((id) => (
        <div
          className="flex justify-between border-b py-4 border-gray-400"
          key={id}
        >
          <div className="flex flex-col w-8/12 md:w-10/12">
            <span className="font-semibold">{items[id]?.name}</span>
            <span className="tracking-wider">
              ₹{" "}
              {items[id]?.price
                ? items[id]?.price / 100
                : items[id]?.defaultPrice / 100}
            </span>
            <div className="text-sm text-gray-400">
              {items[id]?.description}
            </div>
          </div>
          <div className="relative w-28 sm:w-36">
            {cartItems[id]?.quantity ? (
              <div className="absolute bottom-0 left-9 flex gap-3 bg-orange-400 text-white font-semibold px-2 py-1 rounded-md shadow-md">
                <button onClick={() => handleRemoveItem(id, items[id])}>
                  -
                </button>
                <span>{cartItems[id]?.quantity}</span>
                <button onClick={() => handleAddItem(id, items[id])}>+</button>
              </div>
            ) : (
              <button
                // don't do this because call back function takes event object as argument for onclick
                // you should only pass the item in the function body
                //   onClick={(item) => handleAddItem(item.card.info)}
                onClick={() => handleAddItem(id, items[id])}
                className="absolute bottom-0 left-9 bg-orange-400 text-white font-semibold px-2 py-1 rounded-md shadow-md"
              >
                ADD +
              </button>
            )}

            {items[id]?.imageId && (
              <img
                className="rounded-lg"
                src={CLOUDINARY_URL + items[id]?.imageId}
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
