import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSing = () => {
    googleSignIn().then((res) => console.log(res));
  };
  
  return (
    <div>
      <div className="flex gap-14 mt-4">
        <CiFacebook style={{ fontSize: "25px" }} />
        <button onClick={handleGoogleSing}>
          <FaGoogle style={{ fontSize: "25px" }} />
        </button>
        <FaGithub style={{ fontSize: "25px" }} />
      </div>
    </div>
  );
};

export default SocialLogin;
