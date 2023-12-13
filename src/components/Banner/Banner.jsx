import { BsSearch } from "react-icons/bs";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/yyX66s8/image.png)" }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              Explore Diverse Job Opportunities
            </h1>
            <p className="mb-5 text-2xl">
              Explore diverse job options tailored to your work style at{" "}
              <h3 className="text-4xl text-white font-bold">
                Job
                <span className="text-red-900 text-4xl font-bold">Vista</span>
              </h3>
              Discover on-site, remote, hybrid, and part-time roles, offering
              the flexibility and variety you seek.
            </p>
            <div className="form-control">
              <div className="input-group flex justify-center">
                <input
                  type="text"
                  placeholder="Category…"
                  className="input input-bordered md:w-[400px]"
                />
                <button className="btn btn-square">
                  <BsSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
