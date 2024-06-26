import { BsFillCartCheckFill } from "react-icons/bs";
import { FaBook, FaCalendar, FaHome, FaListUl } from "react-icons/fa";
import { FaBagShopping, FaUserGroup } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdMenu } from "react-icons/io";
import { MdContactPage, MdPayments, MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const [isAdmin] = useAdmin();

  return (
    <section className="flex">
      <div className="w-96 min-h-screen  bg-[#D1A054] font-serif px-8">
        <div className="mt-16">
          <p className="uppercase font-bold text-xl">continental Table</p>
          <p className="uppercase font-semibold text-lg">R e s t a u r a n t</p>
        </div>

        <ul className="uppercase">
          {isAdmin ? (
            <>
              <li className="flex gap-2 items-center  font-semibold mt-20">
                <FaHome style={{ fontSize: "25px" }} />
                <NavLink to="/">Admin Home</NavLink>
              </li>
              <li className="flex gap-2 items-center  font-semibold mt-4">
                <ImSpoonKnife style={{ fontSize: "25px" }} />
                <NavLink to="/dashboard/addItems">Add Item</NavLink>
              </li>
              <li className="flex gap-2 items-center  font-semibold mt-4">
                <FaListUl style={{ fontSize: "25px" }} />
                <NavLink to="/">Manage Item</NavLink>
              </li>
              <li className="flex gap-2 items-center  font-semibold mt-4">
                <FaBook style={{ fontSize: "25px" }} />
                <NavLink to="/">Manage Booking</NavLink>
              </li>
              <li className="flex gap-2 items-center  font-semibold mt-4">
                <FaUserGroup style={{ fontSize: "25px" }} />
                <NavLink to="/dashboard/users">All User</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="flex gap-2 items-center  font-semibold mt-20">
                <FaHome style={{ fontSize: "25px" }} />
                <NavLink to="/">user Home</NavLink>
              </li>
              <li className="flex gap-2 items-center  font-semibold mt-4">
                <FaCalendar style={{ fontSize: "25px" }} />
                <NavLink to="/">reservation</NavLink>
              </li>
              <li className="flex gap-2 items-center  font-semibold mt-4">
                <MdPayments style={{ fontSize: "25px" }} />
                <NavLink to="/">Payment History</NavLink>
              </li>
              <li className="flex gap-2 items-center  font-semibold mt-4">
                <BsFillCartCheckFill style={{ fontSize: "25px" }} />
                <NavLink to="/dashboard/cart">My Cart</NavLink>
              </li>
              <li className="flex gap-2 items-center  font-semibold mt-4">
                <MdReviews style={{ fontSize: "25px" }} />
                <NavLink to="/dashboard/cart">Add review</NavLink>
              </li>
              <li className="flex gap-2 items-center  font-semibold mt-4">
                <TbBrandBooking style={{ fontSize: "25px" }} />
                <NavLink to="/dashboard/cart">My booking</NavLink>
              </li>
            </>
          )}

          <div className=" border mt-10 border-white"></div>

          <li className="flex gap-2 items-center  font-semibold mt-10">
            <FaHome style={{ fontSize: "25px" }} />
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="flex gap-2 items-center  font-semibold mt-4">
            <IoMdMenu style={{ fontSize: "25px" }} />
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="flex gap-2 items-center  font-semibold mt-4">
            <FaBagShopping style={{ fontSize: "25px" }} />
            <NavLink to="/">shop</NavLink>
          </li>
          <li className="flex gap-2 items-center  font-semibold mt-4">
            <MdContactPage style={{ fontSize: "25px" }} />
            <NavLink to="/">contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 justify-center w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default DashBoard;
