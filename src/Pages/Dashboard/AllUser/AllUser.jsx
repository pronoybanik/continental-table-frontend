import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { GrUserAdmin } from "react-icons/gr";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user?.name} is Admin Now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDelateUser = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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
    <div>
      <SectionTitle heading="Manage all user" subHeading=" How many" />

      <div className="bg-white shadow w-4/5 mx-auto">
        <div className="flex gap-2 justify-between items-center px-10 py-4">
          {/* <p className="text-2xl font-semibold uppercase">All User:</p> */}
          <p className="text-2xl font-semibold uppercase">
            Total User: {users?.length}
          </p>
        </div>

        <div>
          <div className="overflow-x-auto mt-4">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-[#D1A054] text-white">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {users?.map((user, index) => (
                  <tr key={user._id}>
                    <td className="flex items-center  h-full mt-2 font-semibold text-lg">
                      <p>{index + 1} .</p>
                      <p> {user?.name}</p>
                    </td>
                    <td className="font-semibold text-sm">{user?.email}</td>
                    {user?.role !== "admin" ? (
                      <td onClick={() => handleMakeAdmin(user)}>
                        <GrUserAdmin style={{ fontSize: "25px" }} />
                      </td>
                    ) : (
                      <p className="text-white w-full text-center font-semibold bg-slate-950 px-2 py-1 rounded-sm">Admin</p>
                    )}
                    <th>
                      {/* <button className="btn btn-ghost btn-xs bg-red-500 ">
                        <MdDeleteOutline style={{ fontSize: "25px" }} />
                      </button> */}

                      <span className="inline-flex overflow-hidden rounded-md border bg-red-600 shadow-sm">
                        <button
                          onClick={() => handleDelateUser(user?._id)}
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
    </div>
  );
};

export default AllUser;
