// import React from 'react'

export interface JobPosting {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  location: string[]; // Array to handle multiple locations
  whenAndWhere: string;
  status: string;
  isRolling: boolean;
  datePosted: string; // ISO 8601 date string
  deadline: string; // ISO 8601 date string
  startDate: string; // ISO 8601 date string
  endDate: string; // ISO 8601 date string
  applicantsCount: number;
  viewsCount: number;
  average_rating: number;
  total_reviews: number;
  categories: string[]; // Array to handle multiple categories
  logoUrl: string;
  opType: string; // e.g., "inPerson"
  orgID: string;
  orgName: string;
  orgEmail: string;
  orgPrimaryPhone: string;
  isBookmarked: boolean;
  perksAndBenefits: string | null; // Assuming perks and benefits might be nullable
  questions: string | null; // Assuming questions might be nullable
  requiredSkills: string[]; // Array to handle multiple required skills
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
}


const JobList = (props:JobPosting) => {
  
  return (
    <div className="flex m-5 container rounded-3xl font-">
      <div className="jobp">
        <img src={props.logoUrl} alt="img" />
      </div>
      <div className="pl-3 text">
        <h2 className="text-[20px] font-semibold">{props.title}</h2>
        <p className="capitalize text-background pt-1 pb-1 company font-extralight">{props.orgName} &#183; {props.location}</p>
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
