import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import AuthContext from "../utils/auth-context";


const Header = () => {
  const onlineStatus = useOnlineStatus();

  const ctx = useContext(AuthContext);
  
  const handleLogout = () => {
    ctx?.onLogout();
  }

  const handleLogin = () => {
    ctx?.onLogin();
  }
  
  const cartItems = useSelector((store) => store?.cart?.items);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4 pb-4 md:pr-6 shadow-md rounded-xl">
      <Link to="/">
        <div className="relative flex flex-col items-center">
          <img className="w-40 aspect-sqaure" alt="Logo" src={LOGO_URL} />
          <h1 className="absolute bottom-0 font-bold text-orange-400 text-xl italic tracking-widest">
            QuickBite
          </h1>
        </div>
      </Link>
      <div className="flex items-center mt-4">
        <ul className="flex text-lg gap-8 font-medium">
          <li className="nav-item bg-gray-100 hover:bg-orange-400 hover:text-white px-2 rounded-md shadow-md">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item bg-gray-100 hover:bg-orange-400 hover:text-white px-2 rounded-md shadow-md">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item bg-gray-100 hover:bg-orange-400 hover:text-white px-2 rounded-md shadow-md">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item bg-gray-100 hover:bg-orange-400 hover:text-white px-2 rounded-md shadow-md cursor-pointer">
            <Link to="/cart">Cart - ({cartItems?.length})</Link>
          </li>
          <li
            className="nav-item login hidden sm:block bg-gray-100 hover:bg-orange-400 hover:text-white px-2 rounded-md shadow-md cursor-pointer"
            onClick={() => {
                ctx?.isLoggedIn
                  ? handleLogout()
                  : handleLogin();
              }}
          >
            {ctx?.isLoggedIn ? 'Logout' : 'Login'} {onlineStatus ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
