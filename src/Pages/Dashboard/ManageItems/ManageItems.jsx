import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu,  refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

 
  const handleDelate = async (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item?._id}`);
        if (res.data.deletedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item?.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <section>
        <SectionTitle heading="=Manage all items" subHeading=" Harry up" />

        <div className="bg-white shadow w-4/5 mx-auto">
          <div className="flex gap-2 justify-between items-center px-10 py-4">
            <p className="text-2xl font-semibold uppercase">
              Total Items: {menu?.length}
            </p>
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
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {menu?.map((item, index) => (
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
                      <td className="">
                        <button
                          className="inline-block px-3 py-4 rounded-lg bg-yellow-500 w-10 h-2 text-gray-700  focus:relative"
                          title="update product"
                        >
                          <div className="-mt-2 ">
                            <FaPenToSquare style={{ color: "white" }} />
                          </div>
                        </button>
                      </td>
                      <th>
                        <span className="inline-flex overflow-hidden rounded-md border bg-red-600 shadow-sm">
                          <button
                            onClick={() => handleDelate(item)}
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
    </div>
  );
};

export default ManageItems;
