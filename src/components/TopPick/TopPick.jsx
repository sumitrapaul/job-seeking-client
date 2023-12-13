import ReactPlayer from "react-player/youtube";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const TopPick = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-16">
      <h3 className="text-4xl text-cyan-900 text-center font-bold mb-12">
        Video Job Ads: <span className="text-red-900 text-4xl font-bold">Our Top Pick</span>
      </h3>
   
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div
              data-aos="flip-right"
              data-aos-offset="500"
              data-aos-duration="800"
              className="lg:w-1/2 relative"
            >
              <ReactPlayer
                className="w-3/4 rounded-lg"
                url="https://www.youtube.com/watch?v=ounEm5BTLCs&ab_channel=AlokKeshri"
              />
            </div>
            <div
              data-aos="flip-right"
              data-aos-offset="500"
              data-aos-duration="800"
              className="lg:w-1/2 text-black ml-16"
            >
              <p className="mb-5">
                Revolutionize Hiring with Our Top Video Job Ads! Engage,
                Connect, Target - Elevate Your Recruitment Game!!
              </p>
              <li className="font-bold">Free Resume Assessments</li>
              <li className="font-bold">Job Fit Scoring</li>
              <li className="font-bold">Unlimited Jobs Post</li>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default TopPick;
