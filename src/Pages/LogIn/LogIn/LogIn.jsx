import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import authImage from "../../../assets/others/authentication.png";
import authSiteImage from "../../../assets/others/authentication2.png";
import SocialLogin from "../../../component/SocialLogin/SocialLogin";

const LogIn = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = event.target;
    const email = formData.email.value;
    const password = formData.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;

        if (user?.uid) {
          formData.reset();
          Swal.fire({
            title: "User Login successfully",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Login failed",
          text: error.message,
          icon: "error",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
        });
      });
  };

  const handleValueCaptcha = (event) => {
    const userCaptchaValue = event.target.value;

    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
      alert("Captcha Matched");
    } else {
      setDisabled(true);
      alert("Captcha Does Not Match");
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${authImage})` }}
      className=" relative flex flex-wrap lg:h-[800px] lg:items-center lg:mt-20 shadow-2xl"
    >
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
        </div>

        <form
          onSubmit={handleFormSubmit}
          action="#"
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full border rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full border rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="captcha" className="">
              <LoadCanvasTemplate />
            </label>

            <div className="relative">
              <input
                type="text"
                name="captcha"
                onBlur={handleValueCaptcha}
                className="w-full border rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            disabled={disabled}
            type="submit"
            className={
              disabled === true
                ? "inline-block rounded-lg bg-slate-500 px-5 py-3 text-sm font-medium text-white w-full"
                : "inline-block rounded-lg bg-[#D1A054] px-5 py-3 text-sm font-medium text-white  w-full"
            }
          >
            Sign in
          </button>
          <div className="text-center font-semibold">
            <p className="text-sm text-[#D1A054] ">
              New Here?
              <Link to="/signUp" className="underline ml-2">
                Create A New Account
              </Link>
            </p>
          </div>
        </form>
        <div className="flex flex-col items-center gap-2 mt-6">
          <p className="text-center font-semibold text-lg">or sign is with </p>
          <SocialLogin />
        </div>
      </div>

      <div className="relative z-10 h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt=""
          src={authSiteImage}
          className="absolute  inset-0 h-full w-full object-contain"
        />
      </div>
    </section>
  );
};

export default LogIn;
