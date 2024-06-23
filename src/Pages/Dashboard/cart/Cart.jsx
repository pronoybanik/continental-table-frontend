import { MdDeleteOutline } from "react-icons/md";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Cart = () => {
  const [cart] = useCart();

  const totalPrice = cart.reduce(
    (sumValue, currentValue) => sumValue + parseFloat(currentValue?.price),
    0
  );

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
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart?.map((item, index) => (
                  <tr key={item._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <p className="text-center font-semibold text-lg mt-2 mr-2">
                            {index + 1}.
                          </p>
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item?.name}</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item?.name}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>{item?.price}</td>
                    <th>
                      {/* <button className="btn btn-ghost btn-xs bg-red-500 ">
                        <MdDeleteOutline style={{ fontSize: "25px" }} />
                      </button> */}

                      <span className="inline-flex overflow-hidden rounded-md border bg-red-600 shadow-sm">
                        <button
                          className="inline-block px-2 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
                          title="View Orders"
                        >
                          <MdDeleteOutline
                            style={{ fontSize: "25px", color: "white" }}
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
