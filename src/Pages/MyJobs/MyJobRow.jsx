/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyJobRow = ({ myJob, handleDelete }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const { _id, userName, title, date, deadline, salary } = myJob;
  return (
    <tr>
      <td>{userName}</td>
      <td>{title}</td>
      <td>{date}</td>
      <td>{deadline}</td>
      <td>{salary}</td>
      <td>
        <Link to={`/updateJobs/${_id}`}>
          <button className="btn bg-gradient-to-r from-cyan-950 to-emerald-900 text-white">
            Update
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-gradient-to-r from-cyan-950 to-emerald-900 text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyJobRow;
