import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import About from "./About";
import Gallery from "./Gallery";
import JobCategory from "./JobCategory";
import TopPick from "../../components/TopPick/TopPick";
import ContactUs from "../../components/ContactUs/ContactUs";
import Testimonial from "../../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>JobVista | Home</title>
      </Helmet>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <Gallery></Gallery>
      <TopPick></TopPick>
      <About></About>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
