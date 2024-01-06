/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import AddAJob from "../Pages/AddAJob/AddAJob";
import MyJobs from "../Pages/MyJobs/MyJobs";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateJobs from "../Pages/UpdateJobs";
import MainLayout from "../Layout/MainLayout";
import AddTestimonial from "../Pages/AddTestimonial/AddTestimonial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/job/:_id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          `http://localhost:5000/jobdetails/${params._id}`,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/addAJob",
        element: (
          <PrivateRoute>
            <AddAJob></AddAJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/addTestimonial",
        element: <AddTestimonial></AddTestimonial>
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/applied",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateJobs/:_id",
        element: (
          <PrivateRoute>
            <UpdateJobs></UpdateJobs>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          `http://localhost:5000/allJobs/${params._id}`,
      },
    ],
  },
]);

export default router;
