/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  // const location = useLocation()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        toast.success('Users logged in successfully')
        e.target.reset("");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogle = () => {
    googleLogin().then((result) => {
      toast.success("Google logged in successfully");
      navigate("/");
    });
  };
  return (
    <div className="mt-16">
      <Helmet>
        <title>JobVista | Login</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/NpZb9br/image.png)" }}
      >
        <div className="hero-content text-center">
          <div className="card flex-shrink-0 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold text-center text-black">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-gradient-to-r from-cyan-950 to-emerald-900 text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center my-4 text-black">
              New to this website?{" "}
              <Link className="text-emerald-900 font-bold" to="/register">
                Register
              </Link>
            </p>
            <div className="flex">
              <button
                onClick={handleGoogle}
                className="btn bg-gradient-to-r from-cyan-950 to-emerald-900 text-white w-full"
              >
                <FcGoogle className="text-3xl"></FcGoogle> Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
