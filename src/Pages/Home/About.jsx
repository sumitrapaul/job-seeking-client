import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-16">
      <h3 className="text-4xl text-cyan-900 text-center font-bold mb-12">
        About <span className="text-red-900 text-4xl font-bold">Us</span>
      </h3>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/XV65fvb/image.png)",
        }}
      >
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div
              data-aos="flip-right"
              data-aos-offset="500"
              data-aos-duration="800"
              className="lg:w-1/2 relative"
            >
              <img
                className="w-3/4 rounded-lg"
                src="https://i.ibb.co/5W2ZyzJ/image.png"
                alt=""
              />
              <img
                className="absolute h-24 lg:w-32 top-1/4 mt-8 ml-32 left-24 md:left-64 rounded-2xl border-4 border-emerald-800"
                src="https://i.ibb.co/SnmHjCX/image.png"
                alt=""
              />
            </div>
            <div
              data-aos="flip-right"
              data-aos-offset="500"
              data-aos-duration="800"
              className="lg:w-1/2 text-white"
            >
              <h1 className="mb-5 text-5xl font-bold">Empowering Careers</h1>
              <p className="mb-5">
                Transparency, diversity, and user-centric design drive our
                platform. We prioritize user satisfaction and inclusivity,
                ensuring that everyone can find their ideal work arrangement
              </p>
              <button className="btn bg-red-800 text-white">
                About Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
