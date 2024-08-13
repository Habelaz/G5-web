// import React from 'react'

interface JobPosting {
    title?: string;
    description?: string;
    responsibilities?: string[];
    ideal_candidate?: {
      age?: string;
      gender?: string;
      traits?: string[];
    };
    when_where?: string;
    about?: {
      posted_on?: string;
      deadline?: string;
      location?: string;
      start_date?: string;
      end_date?: string;
      categories?: string[];
      required_skills?: string[];
    };
    company?: string;
    image?: string;
  }

const JobList = (props:JobPosting) => {
  return (
    <div className="flex m-5 container rounded-3xl font-">
      <div className="jobp">
        <img src={props.image} alt="img" />
      </div>
      <div className="pl-3 text">
        <h2 className="text-[20px] font-semibold">{props.title}</h2>
        <p className="capitalize text-background pt-1 pb-1">{props.company}</p>
        <p>{props.description}</p>
        <div className="flex pt-8 gap-3">
            <button className="one px-3 h-7 rounded-3xl">In Person</button>
            <span className="line"></span>
            <button className="two px-3 h-7 rounded-3xl " > education</button>
            <button className="three px-6 h-7 rounded-3xl">IT</button>
        </div>
      </div>
    </div>
  )
}

export default JobList
