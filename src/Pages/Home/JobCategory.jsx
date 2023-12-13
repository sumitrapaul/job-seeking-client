/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllJobCard from "./AllJobCard";
import OnsiteJobCard from "./OnsiteJobCard";
import RemoteJobCard from "./RemoteJobCard";
import PartTimeJobCard from "./PartTimeJobCard";
import HybridJobCard from "./HybridJobCard";
import { AuthContext } from "../../provider/AuthProvider";

const JobCategory = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [jobs, setJobs] = useState([]);
  // console.log(jobs);

  useEffect(() => {
    fetch("https://job-seeking-server-virid.vercel.app/allJobs")
      .then((res) => res.json())

      .then((data) => setJobs(data));
  }, []);

  const onSiteJobs = jobs.filter((job) => job.category === "on-site");
  const remoteJobs = jobs.filter((job) => job.category === "remote");
  const partTimeJobs = jobs.filter((job) => job.category === "part-time");
  const hybridJobs = jobs.filter((job) => job.category === "hybrid");

  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <h3 className="text-4xl text-cyan-900 text-center font-bold mb-12">
        Job By <span className="text-red-900 text-4xl font-bold">Category</span>
      </h3>
      <Tabs>
        <TabList>
          <Tab>All Jobs</Tab>
          <Tab>On Site</Tab>
          <Tab>Remote</Tab>
          <Tab>Part Time</Tab>
          <Tab>Hybrid</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {jobs.map((job) => (
              <AllJobCard key={job._id} job={job}></AllJobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {onSiteJobs.map((job) => (
              <OnsiteJobCard key={job._id} job={job}></OnsiteJobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {remoteJobs.map((job) => (
              <RemoteJobCard key={job._id} job={job}></RemoteJobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {partTimeJobs.map((job) => (
              <PartTimeJobCard key={job._id} job={job}></PartTimeJobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hybridJobs.map((job) => (
              <HybridJobCard key={job._id} job={job}></HybridJobCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCategory;
