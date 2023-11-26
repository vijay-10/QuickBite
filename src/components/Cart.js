import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store?.cart?.items);
  return (
    <div className="w-11/12 md:w-8/12 mx-auto">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-600">Cart</h1>
        <button
          className="px-3 py-2 my-2 bg-gray-800 text-white rounded-lg font-bold text-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {Object.keys(cartItems)?.length === 0 ? (
        <div className="flex flex-col gap-4 items-center">
          <p className="text-3xl mt-24 text-gray-600 text-center">
            The cart is empty, please add some items!
          </p>
          <Link
            to="/"
            className="px-3 py-2 my-2 bg-gray-800 text-white rounded-lg font-bold text-lg text-center"
            onClick={handleClearCart}
          >
            Browse Restaurants
          </Link>{" "}
        </div>
      ) : (
        <ItemsList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
