import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";

const UpdateJobs = () => {
  const { _id } = useParams();
  const { user } = useContext(AuthContext);

  const { email, displayName } = user || "";
  const { register, handleSubmit } = useForm();
  const currentDate = new Date();
  const [selectedDeadline, setSelectedDeadline] = useState(new Date());
  const navigate = useNavigate();

  const onSubmit = (data) => {
    data.userEmail = email;
    data.userName = displayName;

    data.deadline = selectedDeadline.toLocaleDateString();
    fetch(`http://localhost:5000/updateJobs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())

      .then((result) => {
        if (result.modifiedCount > 0) {
          toast.success("Job updated successfully");
          navigate("/");
        }
      });
  };

  const handleDeadline = (date) => {
    setSelectedDeadline(date);
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <Helmet>
        <title>JobVista | Update A Job</title>
      </Helmet>
      <h2 className=" text-center text-4xl font-bold text-emerald-900 pt-8 pb-8">
        Update A Job
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
          placeholder="Logged In User Name"
          readOnly
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
            className="text-input bg-gray-300 px-5 py-2 rounded w-full"
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
          className="text-input bg-gray-300 px-5 py-2 rounded"
        />

        <input
          type="submit"
          value="Update Job"
          className="btn btn-block bg-gradient-to-r from-cyan-950 to-emerald-900 text-white"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateJobs;
