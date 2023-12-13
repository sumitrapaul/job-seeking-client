/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const AllJobRow = ({ job, i }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const { _id, userName, title, date, deadline, salary } = job;
  return (
    <tr>
      <td>{userName}</td>
      <td>{title}</td>
      <td>{date}</td>
      <td>{deadline}</td>
      <td>{salary}</td>
      <td>
        <Link to={`/job/${_id}`}>
          <button className="btn bg-gradient-to-r from-cyan-950 to-emerald-900 text-white">
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllJobRow;
