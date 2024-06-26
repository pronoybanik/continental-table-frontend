import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import LogIn from "../Pages/LogIn/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AdminPrivateRoute from "./AdminPrivateRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      // normal user routes
      {
        path: "cart",
        element: <Cart />,
      },
      // admin only routes
      {
        path: "users",
        element: (
          <AdminPrivateRoute>
            <AllUser />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminPrivateRoute>
            <AddItems />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminPrivateRoute>
            <ManageItems />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminPrivateRoute>
            <UpdateItem />
          </AdminPrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
