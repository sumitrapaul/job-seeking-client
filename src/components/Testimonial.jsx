import { useEffect, useState } from "react";
import Test from "./Test";


const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);
  // console.log(testimonials);

  useEffect(() => {
    fetch("https://job-seeking-server-virid.vercel.app/testimonials")
      .then((res) => res.json())

      .then((data) => setTestimonials(data));
  }, []);

    return (
        <div className="mt-16 max-w-7xl mx-auto">
             <h3 className="text-4xl text-cyan-900 text-center font-bold mb-12">
        All <span className="text-red-900 text-4xl font-bold">Testimonials</span>
      </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <Test key={t._id} t={t}></Test>
            ))}
          </div> 
        </div>
    );
};

export default Testimonial;