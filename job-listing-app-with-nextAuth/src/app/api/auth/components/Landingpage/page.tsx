'use client';
import { useGetAllJobsQuery } from '../../../../features/api';
import { useRouter } from 'next/navigation'; 
import JobList from '../JobList';
import { JobPosting } from '../JobList';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

function LandingPage() {
  const router = useRouter(); 
  const { data, error, isError, isLoading } = useGetAllJobsQuery(null);
  const jobList = data?.data;
  const {data:session} = useSession()

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
          <div className="flex justify-center items-center fixed top-5 left-95 right-5 rounded-md w-auto h-10 back-brand-color text-white ml-5">
          <div className="flex justify-end items-center w-full mb-4">
        <button 
          className="text-blue-950" 
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Logout
        </button>
      </div>
          </div>

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
