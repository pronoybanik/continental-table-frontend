import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <section>
      <div>
        <p className="text-3xl text-center my-20 font-semibold uppercase">
          hi , Welcome Back
        </p>
      </div>

      <div className="flex justify-center">
        <div className="bg-[#FFEDD5] py-32 w-[600px]">
          <div className="avatar flex flex-col items-center">
            <div className="w-32 rounded-full border-2">
              <img src={user?.photoURL} alt="User Avatar" />
            </div>
            <p className="text-3xl text-center font-serif mt-8">
              {user?.displayName}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserHome;
