'use client';
import { useGetAllJobsQuery } from '../features/api';
import { useRouter } from 'next/navigation'; 
import JobList from './JobList';
import { JobPosting } from './JobList';

function LandingPage() {
  const router = useRouter(); 
  const { data, error, isError, isLoading } = useGetAllJobsQuery();
  const jobList = data?.data;

  // Handling click event to navigate to Dashboard
  const handleClick = (jobData: JobPosting) => {
    const jobDataString = encodeURIComponent(JSON.stringify(jobData));
    router.push(`/dashboard?jobData=${jobDataString}`);
  };

  if (isLoading) {
    return <div className='text-center pt-[25%] text-3xl'>Loading...</div>;
  }

  if (isError) {
    return <div className='text-center pt-[25%] text-3xl'>Error: {error.message || 'Failed to fetch job data.'}</div>;
  }

  return (
    <div className="pl-3 m-6 flex flex-col w-[70%]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl opp font-extrabold">Opportunities</h1>
          <p className="p-color">showing {jobList?.length || 0} results</p>
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
        {jobList?.map((job: JobPosting) => (
          <div 
            key={job.id} 
            onClick={() => handleClick(job)} 
            className="cursor-pointer"
          >
            <JobList {...job} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
