/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { usePDF } from "react-to-pdf";

const AppliedJob = ({ appliedJob }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, email, title, salary, category } = appliedJob;
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" })

  return (
    <tr ref={targetRef} className="text-xl">
      <td>{appliedJob?.name}</td>
      <td>{appliedJob?.salary}</td>
      <td>{appliedJob?.category}</td>
      <td>{appliedJob?.title}</td>

      <td>
        <button
          onClick={() => toPDF()}
          className="btn bg-gradient-to-r from-cyan-950 to-emerald-900 text-white"
        >
          Summary
        </button>
      </td>
    </tr>
  );
};

export default AppliedJob;
