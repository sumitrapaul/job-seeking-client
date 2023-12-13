/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import MyJobRow from "./MyJobRow";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import axios from "axios";

const MyJobs = () => {
  const { user, loading } = useContext(AuthContext);
  // console.log(user);

  const [myJobs, setMyjobs] = useState([]);
  const secureData = useAxiosSecure();

  const url = `/myJobs?email=${user?.email}`;
  useEffect(() => {
    secureData.get(url).then((res) => setMyjobs(res.data));
  }, [url, secureData]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://job-seeking-server-virid.vercel.app/deleteJob/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire("Your job has been deleted.", "success");

              const remaining = myJobs.filter((job) => job._id !== _id);
              setMyjobs(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mt-16">
      <Helmet>
        <title>JobVista | My Jobs</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Posting</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myJobs.map((myJob) => (
              <MyJobRow
                key={myJob._id}
                myJob={myJob}
                handleDelete={handleDelete}
              ></MyJobRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
