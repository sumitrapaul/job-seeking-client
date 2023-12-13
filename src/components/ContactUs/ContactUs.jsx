import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mvn394h",
        "template_tbmd49k",
        e.target,
        "FEy8sxlh3qGL34dud"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Send your Email!!",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(result.text);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-16">
      <h3 className="text-4xl text-cyan-900 text-center font-bold mb-12">
        Contact <span className="text-red-900 text-4xl font-bold">Me</span>
      </h3>
     <div className="flex justify-center">
     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <div className="form-control w-full mb-6">
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="input input-bordered font-bold text-black"
              />
            </div>
            <div className="form-control w-full mb-6">
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="input input-bordered font-bold text-black"
              />
            </div>
            <div className="form-control w-full mb-6">
              <textarea
                type="text"
                name="message"
                placeholder="Write your message"
                className="input input-bordered font-bold text-black"
              />
            </div>
            <div className="form-control w-full mb-6">
              <input
                type="submit"
                value="Send"
                className="btn btn-block bg-red-800 font-bold text-white text-2xl"
              />
            </div>
          </div>
        </form>
      </div>
     </div>
    </div>
  );
};

export default ContactUs;
