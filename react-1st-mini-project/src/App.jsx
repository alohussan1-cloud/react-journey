import React from 'react'
import Card from './components/card'


const App = () => {
  const jobs = [
  {
    company: "Amazon",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbcR-jcRAiC6MtUlPIuF_ggDeO_gqC7uHW-szVbF__g&s=10",
    postedTime: "5 days ago",
    title: "Senior UI/UX Designer",
    jobType: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "San Francisco, CA",
  },

  {
    company: "Google",
    logo: "google-logo.png",
    postedTime: "2 days ago",
    title: "Frontend Developer",
    jobType: "Full Time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Mountain View, CA",
  },

  {
    company: "Microsoft",
    logo: "microsoft-logo.png",
    postedTime: "1 day ago",
    title: "React Developer",
    jobType: "Full Time",
    level: "Junior Level",
    salary: "$80/hr",
    location: "Seattle, WA",
  },

  {
    company: "Netflix",
    logo: "netflix-logo.png",
    postedTime: "3 days ago",
    title: "Product Designer",
    jobType: "Part Time",
    level: "Senior Level",
    salary: "$110/hr",
    location: "Los Angeles, CA",
  },

  {
    company: "Meta",
    logo: "meta-logo.png",
    postedTime: "6 days ago",
    title: "UI Designer",
    jobType: "Full Time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Menlo Park, CA",
  },

  {
    company: "Apple",
    logo: "apple-logo.png",
    postedTime: "4 days ago",
    title: "Frontend Engineer",
    jobType: "Full Time",
    level: "Senior Level",
    salary: "$125/hr",
    location: "Cupertino, CA",
  },
];

return(
  <div>
    <div className="container">
  {jobs.map(function(elem){
    console.log(elem)
    
    return (
    <Card company={elem.company} logo={elem.logo} postedTime={elem.postedTime} title={elem.title}
    jobType={elem.jobType} level={elem.level} salary={elem.salary} location={elem.location} />
  )
  })}
  </div>
  </div>
)
}


export default App

