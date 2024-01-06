import { Link, NavLink, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allJobs">All Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/addTestimonial">Add Testimonial</NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <NavLink to="/applied">Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/addAJob">Add A Job</NavLink>
          </li>
          <li>
            <NavLink to="/myJobs">My Jobs</NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <li>
        <NavLink to="/blog">Blogs</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMouseHover = () => {
    setIsHover(true);
  };
  const handleMouseHoverOut = () => {
    setIsHover(false);
  };

  return (
    <div className="navbar bg-gradient-to-r from-cyan-950 to-emerald-900 mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn bg-base-100 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black font-bold lg:text-xl rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img
            className="h-10 w-16"
            src="https://i.ibb.co/LQSXk15/image.png"
            alt=""
          />
          <h3 className="text-4xl text-white">
            Job<span className="text-red-900 text-4xl font-bold">Vista</span>
          </h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black font-bold lg:text-xl">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div
            onMouseOver={handleMouseHover}
            onMouseOut={handleMouseHoverOut}
            className="relative"
          >
            <img
              className="w-10 h-10 rounded-full cursor-pointer"
              src={user.photoURL || ""}
              alt=""
            />
            {isHover && (
              <div className="absolute top-10 right-0 bg-white p-2 rounded shadow">
                <p>{user?.displayName}</p>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-red-800 text-white">Login</button>
          </Link>
        )}
        {user?.email && (
          <button onClick={handleLogOut} className="btn bg-red-800 text-white">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
