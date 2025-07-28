import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo2 from "../components/logo2.png";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="sticky top-0 z-50 w-full shadow-md bg-emerald-500">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src={logo2} className="h-30" alt="Shop Logo" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-white mr-5 space-x-8 gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white"
            }
          >
            <p className="text-lg hover:scale-110 transition-transform duration-200">
              Home
            </p>
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white"
            }
          >
            <p className="text-lg hover:scale-110 transition-transform duration-200">
              Login
            </p>
          </NavLink>

          <NavLink to="/cart" className="text-white">
            <div className="relative hover:scale-110 transition-transform duration-200">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
