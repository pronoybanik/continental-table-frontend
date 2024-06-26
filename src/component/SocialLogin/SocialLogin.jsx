import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSing = () => {
    googleSignIn().then(() => navigate("/"));
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
