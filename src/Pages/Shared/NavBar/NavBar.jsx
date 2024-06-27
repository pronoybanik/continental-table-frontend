import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut();
  };

  const navOption = (
    <>
      <li>
        <Link className=" text-white" to="/">
          Home
        </Link>
      </li>

      <li>
        <Link to="/menu">Menu</Link>
      </li>

      <li>
        <Link to="/order/pizza">Order Food</Link>
      </li>

      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaCartArrowDown />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-error">
            log out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/signUp">singUp</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed flex justify-evenly z-50 bg-opacity-55 bg-black max-w-screen-2xl mx-auto">
      <div className="navbar-start flex">
        <div className="dropdown">
          {/* mobile mood Navbar */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <div className="text-white font-serif">
          <p className="uppercase font-bold text-xl ">continental Table</p>
          <p className="uppercase font-semibold text-lg">R e s t a u r a n t</p>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{navOption}</ul>
      </div>
    </div>
  );
};

export default NavBar;
