/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, handleProfileUpdate } = useContext(AuthContext);
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

  return (
    <div className="mt-16">
      <Helmet>
        <title>JobVista | Register</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/6nLfV4k/image.png)",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="card flex-shrink-0 shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-3xl font-bold text-center text-black">
                Register now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  className="input input-bordered text-black"
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your photo"
                  name="image"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-gradient-to-r from-cyan-950 to-emerald-900 text-white"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-center my-2 text-black">
              Already have an account?{" "}
              <Link className="text-emerald-900 font-bold" to="/login">
                Login
              </Link>
            </p>
            <div className="flex">
              <button className="btn bg-gradient-to-r from-cyan-950 to-emerald-900 text-white w-full">
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

export default Register;
