/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, handleProfileUpdate,googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    // console.log(name, email, password, image);
    createUser(email, password)
      .then((res) => {
        handleProfileUpdate(name, image).then((res) => {
          navigate("/");
        });
        toast.success("User created successfully");
        e.target.reset("");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        toast.success("Users logged in successfully!!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div
    className="mb-8 h-auto"
    style={{
      backgroundImage: `url('https://i.ibb.co/rMcnvbJ/image.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "700px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "30px",
    }}
  >
    <Helmet>
      <title>JobVista | Register</title>
    </Helmet>
    <div className="card flex-shrink-0 w-[400px] md:w-[500px] mx-auto shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold my-2 text-center">
            Register now!
          </h1>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="input input-bordered border-emerald-600 text-black font-bold"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="input input-bordered text-black font-bold border-emerald-600"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            placeholder="Enter your photo"
            name="image"
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
            Register
          </button>
        </div>
      </form>
      <p className="text-center">
        Already have an account? Please{" "}
        <Link to="/login" className="text-emerald-600 font-bold">
          Login
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

export default Register;
