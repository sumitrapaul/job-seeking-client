import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-16">
      <footer className="footer p-10 bg-gray-500 text-base-content">
        <aside>
          <div className="flex gap-3">
            <img
              className="h-8 w-12"
              src="https://i.ibb.co/LQSXk15/image.png"
              alt=""
            />
            <h3 className="text-4xl text-white">
              Job<span className="text-red-900 text-4xl font-bold">Vista</span>
            </h3>
          </div>
          <p className="text-lg text-white">
            <span className="text-3xl font-bold text-red-900">JobVariety</span>{" "}
            Industries Ltd,Dhaka
          </p>
        </aside>
        <nav>
          <header className="footer-title text-white">Services</header>
          <a className="link link-hover text-white">Design</a>
          <a className="link link-hover text-white">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Company</header>
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a className="text-2xl text-blue-800">
              <FaFacebook />
            </a>
            <a className="text-2xl text-blue-800">
              <FaTwitter />
            </a>
            <a className="text-2xl text-black">
              <FaGithub />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
