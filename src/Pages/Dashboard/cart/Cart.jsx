import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const totalPrice = cart.reduce(
    (sumValue, currentValue) => sumValue + parseFloat(currentValue?.price),
    0
  );

  const handleDelate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <section>
      <SectionTitle heading="book a table" subHeading=" Reservation" />

      <div className="bg-white shadow w-4/5 mx-auto">
        <div className="flex gap-2 justify-between items-center px-10 py-4">
          <p className="text-2xl font-semibold uppercase">
            Total order: {cart?.length}
          </p>
          <p className="text-2xl font-semibold uppercase">
            Total price: {totalPrice}
          </p>
          <PrimaryButton name="payment"></PrimaryButton>
        </div>

        <div>
          <div className="overflow-x-auto mt-4">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-[#D1A054] text-white">
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart?.map((item, index) => (
                  <tr key={item._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <p className="text-center font-semibold text-lg mt-4 mr-2">
                            {index + 1}.
                          </p>
                          <div className="mask mask-squircle h-16 w-16">
                            <img
                              src={item?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.name}</td>
                    <td>$ {item?.price}</td>
                    <th>
                      {/* <button className="btn btn-ghost btn-xs bg-red-500 ">
                        <MdDeleteOutline style={{ fontSize: "25px" }} />
                      </button> */}

                      <span className="inline-flex overflow-hidden rounded-md border bg-red-600 shadow-sm">
                        <button
                          onClick={() => handleDelate(item?._id)}
                          className="inline-block px-3 py-2 text-gray-700  focus:relative"
                          title="delete product"
                        >
                          <RiDeleteBin6Line
                            style={{ fontSize: "20px", color: "white" }}
                          />
                        </button>
                      </span>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
