import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faLocationDot, faCirclePlus, faFire, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const jobData = location.state?.jobData; // Access the job data passed via state

  return (
    <div className='flex dashboard p-6 gap-10'>
      <div className="description">
        <p className='pt-10 pb-3 font-extrabold text-xl'>Description</p>
        <p>{jobData?.description}</p>
        
        <p className='pt-10 pb-3 font-extrabold text-xl'>Responsibilities</p>
        <ul>
          {jobData?.responsibilities?.map((responsibility:any, index:any) => (
            <li className="list-disc ml-6" key={index}>{responsibility}</li>
          ))}
        </ul>

        <p className='pt-10 pb-3 font-extrabold text-xl'>Ideal Candidate We Want</p>
        <p># Age - {jobData?.ideal_candidate?.age}</p>
        <p># Gender - {jobData?.ideal_candidate?.gender}</p>
        <p># Traits: {jobData?.ideal_candidate?.traits?.join(', ')}</p>

        <p className='pt-10 pb-3 font-extrabold text-xl'>When & Where</p>
        <p className='flex items-center gap-2'>
          <FontAwesomeIcon className="p-2 icon-blue border rounded-full" icon={faLocationDot} />
          {jobData?.when_where}
        </p>
      </div>

      <div>
        <p className='font-extrabold text-xl pb-3'>About</p>
        <div className='flex items-center gap-2 pb-2'>
          <FontAwesomeIcon className="p-2 icon-blue border rounded-full" icon={faCirclePlus} />
          <div>
            <p className='p-color'>Posted on</p>
            <p>{jobData?.about?.posted_on}</p>
          </div>
        </div>

        <div className='flex items-center gap-2 pb-2'>
          <FontAwesomeIcon className="p-2 icon-blue border rounded-full" icon={faFire} />
          <div>
            <p className='p-color'>Deadline</p>
            <p>{jobData?.about?.deadline}</p>
          </div>
        </div>

        <div className='flex items-center gap-2 pb-2'>
          <FontAwesomeIcon className="p-2 icon-blue border rounded-full" icon={faLocationDot} />
          <div>
            <p className='p-color'>Location</p>
            <p>{jobData?.about?.location}</p>
          </div>
        </div>

        <div className='flex items-center gap-2 pb-2'>
          <FontAwesomeIcon className="p-2 icon-blue border rounded-full" icon={faCalendar} />
          <div>
            <p className='p-color'>Start Date</p>
            <p>{jobData?.about?.start_date}</p>
          </div>
        </div>

        <div className='flex items-center gap-2 pb-4'>
          <FontAwesomeIcon className="p-2 icon-blue border rounded-full" icon={faCalendar} />
          <div>
            <p className='p-color'>End Date</p>
            <p>{jobData?.about?.end_date}</p>
          </div>
        </div>

        <div className="border-b-2 w-64 gray-bottom"></div>

        <p className='font-extrabold text-xl pb-3'>Categories</p>
        <div>
          {jobData?.about?.categories?.map((category:any, index:any) => (
            <button
              key={index}
              className="three social px-6 h-7 rounded-3xl mr-4 mb-2"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="border-b-2 w-64 gray-bottom py-2"></div>

        <p className='font-extrabold text-xl py-3'>Required Skills</p>
        <div>
          {jobData?.about?.required_skills?.map((skill:any, index:any) => (
            <button
              key={index}
              className="three social px-6 h-7 rounded-3xl mr-4 mb-2"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;