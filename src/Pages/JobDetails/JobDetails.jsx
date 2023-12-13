/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const JobDetails = () => {
  const { _id } = useParams();

  const { user, loading } = useContext(AuthContext);
  const [job, setJob] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const { email, displayName } = user || "";
  const { category, salary, logo } = job || "";
  const { register, handleSubmit } = useForm();
  const currentDate = new Date();
  const [selectedDeadline, setSelectedDeadline] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://job-seeking-server-virid.vercel.app/jobdetails/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
      });
  }, [_id]);

  const handleApply = (_id) => {
    const currentDateTime = Date.now();
    const deadlineDateTime = new Date(job?.deadline).getTime();

    const applicantMail = user?.email;
    const jobOwnerMail = job?.userEmail;
    if (currentDateTime > deadlineDateTime) {
      toast.error("Job application deadline is passed!");
    } else if (jobOwnerMail === applicantMail) {
      toast.error("Job posted users cannot apply for their own job!");
    } else {
      document.getElementById("my_modal_1").showModal();
    }
  };

  const onSubmit = (result) => {
    result.category = category;
    result.salary = salary;
    // result.logo = logo;
    result.jobId = _id;

    job.applicants = 1;
    fetch("https://job-seeking-server-virid.vercel.app/applied", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        // if (data.insertedId) {
        toast.success("Job applied successfully");
        navigate("/");
      });
  };

  return (
    <div>
      <Helmet>
        <title>JobVista | JobDetails</title>
      </Helmet>
      <div className="mt-4 lg:mt-16">
        <img
          className="w-full lg:max-w-7xl h-[700px] mx-auto mb-8"
          src={job?.banner}
          alt=""
        />
      </div>

      <div className="card card-compact bg-slate-200 glass shadow-xl w-full max-w-7xl mx-auto">
        <div className="flex items-start px-4 pt-4">
          <figure>
            <img className="w-12 h-8" src={job?.logo} alt="Shoes" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{job?.title}</h2>
          <div className="flex">
            <h4 className="font-bold mr-7">Salary: {job?.salary}</h4>
            <h4 className="font-bold">Applicants: {job?.applicants}</h4>
          </div>
          <p>{job?.description}</p>
          <div className="card-actions justify-end">
            <button
              className="btn bg-gradient-to-r from-cyan-950 to-emerald-900 text-white"
              onClick={() => handleApply()}
            >
              Apply
            </button>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-3"
                >
                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Job Title
                  </label>

                  <input
                    type="text"
                    defaultValue={job?.title}
                    {...register("title")}
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
                    defaultValue={user?.displayName}
                    {...register("name")}
                    readOnly
                    className="bg-gray-300 px-5 py-2 rounded"
                  />
                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Email
                  </label>

                  <input
                    type="text"
                    defaultValue={user?.email}
                    {...register("email")}
                    readOnly
                    className="bg-gray-300 px-5 py-2 rounded"
                  />

                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Job Category
                  </label>

                  <input
                    type="text"
                    defaultValue={job?.category}
                    {...register("category")}
                    className="text-input bg-gray-300 px-5 py-2 rounded"
                  />

                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Salary
                  </label>

                  <input
                    type="text"
                    defaultValue={job?.salary}
                    {...register("salary")}
                    className="text-input bg-gray-300 px-5 py-2 rounded"
                  />

                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Resume
                  </label>
                  <input
                    {...register("resume")}
                    type="text"
                    placeholder="resume link"
                    className="bg-gray-300 px-5 py-2 rounded"
                  />

                  <input
                    type="submit"
                    value="Submit Application"
                    className="btn btn-block bg-gradient-to-r from-cyan-950 to-emerald-900 text-white"
                  />
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
