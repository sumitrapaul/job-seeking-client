/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
const PartTimeJobCard = ({ job }) => {
  const user = useContext(AuthContext);
  const {
    _id,
    name,
    title,
    date,
    deadline,
    salary,
    applicants,
    category,
    banner,
    logo,
    description,
  } = job;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-8">
      <div
        data-aos="flip-right"
        data-aos-offset="200"
        data-aos-duration="300"
        className="card card-compact bg-slate-200 shadow-xl glass m-2"
      >
        <div className="card-body">
          <h2 className="card-title font-bold">Title: {job.title}</h2>
          <div className="flex">
            <p>
              <span className="font-bold text-lg">Posting: </span>
              {job.date}
            </p>
            <p>
              <span className="font-bold text-lg">Deadline: </span>
              {job.deadline}
            </p>
          </div>
          <div className="flex">
            <p>
              <span className="font-bold text-lg">Salary: </span>
              {job.salary}
            </p>
            <p>
              <span className="font-bold text-lg">Applicants:</span>{" "}
              {job.applicants}
            </p>
          </div>
          <div className="flex">
            <p>
              <span className="font-bold text-lg">Name: </span>
              {job.name}
            </p>
            <p>
              <span className="font-bold text-lg">Type: </span>
              {job.category}
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/job/${_id}`}>
              <button className="btn bg-gradient-to-r from-cyan-950 to-emerald-900 text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartTimeJobCard;
