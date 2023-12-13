/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import AppliedJob from "./AppliedJob";
// import { toast } from "react-toastify";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AppliedJobs = () => {
  const { user, loading } = useContext(AuthContext);

  const [appliedJobs, setAppliedJobs] = useState([]);
  // console.log(appliedJobs);
  const [type, setType] = useState("all_jobs");
  // console.log(type);
  const secureData = useAxiosSecure();

  const url = `/applied?email=${user?.email}`;
  // const url = `/applied?email=supriya11@gmail.com`;

  useEffect(() => {
    secureData.get(url).then((res) => setAppliedJobs(res.data));
  }, [url, secureData]);

  const jobtype = appliedJobs.filter(
    (appliedJob) => appliedJob.category === type
  );

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>JobVista | Applied Jobs</title>
      </Helmet>
      <div className="mt-16 flex justify-center">
        <h1 className="text-3xl font-bold mr-6">Category</h1>
        <select
          onChange={handleChange}
          className="text-input bg-gray-300 px-5 py-2 rounded"
        >
          <option value="all_jobs">all_jobs</option>
          <option value="hybrid">hybrid</option>
          <option value="remote">remote</option>
          <option value="part-time">part-time</option>
          <option value="on-site">on-site</option>
        </select>
      </div>

      <div className="overflow-x-auto mt-16">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Salary</th>
              <th>Category</th>
              <th>title</th>
              <th>Action</th>
            </tr>
          </thead>

          {type === "all_jobs" ? (
            <tbody>
              {appliedJobs.map((appliedJob) => (
                <AppliedJob
                  key={appliedJob._id}
                  appliedJob={appliedJob}
                ></AppliedJob>
              ))}
            </tbody>
          ) : (
            <tbody>
              {jobtype.map((appliedJob) => (
                <AppliedJob
                  key={appliedJob._id}
                  appliedJob={appliedJob}
                ></AppliedJob>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
