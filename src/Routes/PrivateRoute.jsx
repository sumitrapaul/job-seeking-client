/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import loaddata from "../../public/image/load.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return ( <>
    <img src={loaddata} alt="" />
    <ToastContainer/>
    </>) 
  }
  if (user?.email) {
    
    return (
      <>
      {children}
      <ToastContainer/>
      </>
    ) 
  }
  toast.error('You have to log in first to view details')
  return ( <>
  <Navigate to="/login"></Navigate>
  <ToastContainer/>
  </>
  )
    
    
};

export default PrivateRoute;
