/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
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
    <div
    className="mb-16"
    style={{
      backgroundImage: `url('https://i.ibb.co/xL35K73/image.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "30px",
    }}
  >
    <Helmet>
      <title>JobVista | Login</title>
    </Helmet>
    <div className="card flex-shrink-0 w-[400px] md:w-[500px] mx-auto shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold my-2 text-center">
            Login now!
          </h1>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="input input-bordered border-emerald-600 text-black font-bold"
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
            className="input input-bordered border-emerald-600 text-black font-bold"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white font-bold text-xl bg-gradient-to-r from-cyan-950 to-emerald-900 w-full">
            Login
          </button>
        </div>
      </form>

      <p className="text-center mb-4">
        Do not have an account? Please{" "}
        <Link to="/register" className="text-emerald-600 font-bold">
          Register
        </Link>
      </p>
      <div className="flex justify-center items-center">
        <button
          onClick={handleGoogle}
          className="btn bg-gradient-to-r from-cyan-950 to-emerald-900 text-white text-xl"
        >
          Google
        </button>
      </div>
    </div>
    <Toaster />
  </div>
  );
};

export default Login;
