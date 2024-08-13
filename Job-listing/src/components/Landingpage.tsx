import JobList from "./JobList";
import jobs from '../jobs.json';
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const jobList = jobs.job_postings;
  const navigate = useNavigate();

  const handleClick = (jobData:any) => {
    navigate('/dashboard', { state: { jobData } });
  };

  return (
    <div className="pl-3 m-6 flex flex-col w-[70%]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl opp font-extrabold">Opportunities</h1>
          <p className="p-color">showing 5 results</p>
        </div>
        <div>
          <label htmlFor="select">sort by: </label>
          <select className="border rounded-lg" name="select" id="select">
            <option value="most-relevant">Most relevant</option>
            <option value="alphabet">Alphabet</option>
          </select>
        </div>
      </div>
      <div>
        {jobList.map((job, index) => (
          <div key={index} onClick={() => handleClick(job)} className="cursor-pointer">
            <JobList {...job} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
