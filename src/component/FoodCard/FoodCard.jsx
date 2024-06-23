import { useContext } from "react";
import PrimaryButton from "../../Pages/Shared/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddProduct = (data) => {
    if (user && user?.email) {
      console.log(data);

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Your Food Was Add The Cart`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not login",
        text: "Please login ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute bg-black text-white px-2 py-1 text-sm right-0 mt-4 mr-4 font-medium rounded-md">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="text-2xl  font-bold">{name}</h2>
        <p>{recipe}</p>
        <div
          onClick={() => handleAddProduct(item)}
          className="card-actions justify-center"
        >
          <PrimaryButton name="add ot cart" />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
