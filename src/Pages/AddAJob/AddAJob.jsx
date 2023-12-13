/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../../provider/AuthProvider";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const AddAJob = () => {
  const { user, loading } = useContext(AuthContext);
  // console.log(user, loading);
  const { email, displayName } = user || "";

  const { register, handleSubmit } = useForm();
  const currentDate = new Date();
  const [selectedDeadline, setSelectedDeadline] = useState(new Date());
  const navigate = useNavigate();
  // console.log(selectedDeadline)
  const onSubmit = (data) => {
    data.userEmail = email;
    data.userName = displayName;

    data.deadline = selectedDeadline;
    // console.log(data.deadline)

    fetch("https://job-seeking-server-virid.vercel.app/addajobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())

      .then((result) => {
      
        toast.success("successfully job added");
        // console.log(result);
        navigate("/");
        
      });
  };

  const handleDeadline = (date) => {
    setSelectedDeadline(date);
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <Helmet>
        <title>JobVista | Add A Job</title>
      </Helmet>
      <h2 className=" text-center text-4xl font-bold text-emerald-900 pt-8 pb-8">
        Add A Job
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Banner
        </label>
        <input
          type="text"
          {...register("banner")}
          placeholder="Banner URL"
          required
          className="bg-gray-300 px-5 py-2 rounded"
        />

        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Job Title
        </label>

        <input
          type="text"
          {...register("title")}
          placeholder="Job Title"
          required
          className="bg-gray-300 px-5 py-2 rounded"
        />

        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Name
        </label>

        <input
          type="text"
          defaultValue={displayName}
          {...register("name")}
          readOnly
          placeholder="Logged In User Name"
          className="bg-gray-300 px-5 py-2 rounded"
        />

        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Job Category
        </label>

        <select
          className="text-input bg-gray-300 px-5 py-2 rounded"
          {...register("category")}
        >
          <option value="part-time">part-time</option>
          <option value="remote">remote</option>
          <option value="hybrid">hybrid</option>
          <option value="on-site">on-site</option>
        </select>

        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Salary
        </label>

        <input
          type="text"
          {...register("salary")}
          placeholder="Salary Range"
          required
          className="text-input bg-gray-300 px-5 py-2 rounded"
        />

        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Description
        </label>

        <input
          type="text"
          {...register("description")}
          placeholder="Job Description"
          required
          className="text-input bg-gray-300 px-5 py-2 rounded"
        />

        <label htmlFor="" className="text-md font-semibold text-gray-800 px-1 ">
          Deadline
        </label>

        <div className="w-full">
          <DatePicker
            selected={selectedDeadline}
            onChange={handleDeadline}
            dateFormat="yyyy/MM/dd"
            className="input input-bordered text-input bg-gray-300 px-5 py-2 rounded w-full max-w-xs"
            minDate={currentDate}
          />
        </div>

        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Logo
        </label>

        <input
          type="text"
          {...register("logo")}
          placeholder="Company Logo"
          required
          className="text-input bg-gray-300 px-5 py-2 rounded"
        />

        <input
          type="submit"
          value="Add Job"
          className="btn btn-block bg-gradient-to-r from-cyan-950 to-emerald-900 text-white"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddAJob;
