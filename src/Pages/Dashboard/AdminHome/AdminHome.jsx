import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AiFillProduct } from "react-icons/ai";
import { FaUsersGear } from "react-icons/fa6";

const AdminHome = () => {
  const axiosPublic = useAxiosPublic();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosPublic.get("/admin-stats");
      return res.data;
    },
  });
  
  return (
    <section>
      <div>
        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Admin Home Page
              </h2>
            </div>

            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col rounded-lg  bg-[#f5b540]  px-4 py-8 text-center">
                  <dt className="order-last text-xl font-medium text-white">
                    Customers
                  </dt>

                  <dd className="flex justify-center text-white gap-2 text-4xl font-extrabold  md:text-5xl">
                    <FaUsersGear />
                    {stats?.users}
                  </dd>
                </div>

                <div className="flex flex-col rounded-lg bg-[#49e2f7] px-4 py-8 text-center">
                  <dt className="order-last text-xl font-medium text-white">
                    Products
                  </dt>

                  <dd className="text-4xl flex justify-center gap-2 font-extrabold text-white md:text-5xl">
                    <AiFillProduct />
                    {stats?.menuItem}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AdminHome;
