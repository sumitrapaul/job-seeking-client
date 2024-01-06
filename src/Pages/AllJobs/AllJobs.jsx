/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";

import { AuthContext } from "../../provider/AuthProvider";
import AllJobRow from "./AllJobRow";

const AllJobs = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [jobs, setJobs] = useState([]);
  const [loaded, setLoaded] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchJob = () => {
      fetch("https://job-seeking-server-virid.vercel.app/allJobs")
        .then((res) => res.json())
        .then((data) => {
          setLoaded(data);
          setJobs(data);
        });
    };
    fetchJob();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTitle = e.target.search.value.toLowerCase();
    const searchedJob = loaded.filter((job) =>
      job.title.toLowerCase().includes(searchTitle)
    );
    setJobs(searchedJob);
    setSearch("");
  };
  return (
    <div>
      <Helmet>
        <title>JobVista | All Jobs</title>
      </Helmet>
      <form onSubmit={handleSearch} className="flex justify-center mt-12">
        <input
          type="text"
          name="search"
          placeholder="Search…"
          className="border-3 border-[#006fdh] bg-gray-200 px-5 py-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="submit"
          className="bg-gradient-to-r from-cyan-950 to-emerald-900 text-white py-2 px-2 mx-4 rounded font-semibold"
          value="Search"
        />
      </form>
      <div className="overflow-x-auto mt-8">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>User</th>
              <th>Job Title</th>
              <th>Posting</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, i) => (
              <AllJobRow key={job._id} job={job} i={i + 1}></AllJobRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
