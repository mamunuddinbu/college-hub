// CollegeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SingleCollege = ({ college }) => {
  console.log();
  return (
    <div className="border rounded p-4 mb-4">
      <img src={college.image} alt={college.name} className="w-48 h-48 mx-auto mb-4 rounded " />
      <h3 className="text-lg font-bold mb-2">{college.name}</h3>
      <p>Admission Dates: {college.admissionDates.join(", ")}</p>
      <p>Number of research: {college.researchWorks.length}</p>
      <p>Research History: {college.researchHistory}</p>
      <p>Ratings: {college.ratings}</p>

    <Link to={`/college/${college._id}`}>
      <button className='bg-cyan-500 p-2 rounded-xl mt-4 border-2 '>Details</button>
    </Link>
    </div>
  );
};

export default SingleCollege;
