import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const secureData = axios.create({
  baseURL: "https://job-seeking-server-virid.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    secureData.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.error("interceptors", error.response);

        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              Navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    );
  }, []);
  return secureData;
};

export default useAxiosSecure;
