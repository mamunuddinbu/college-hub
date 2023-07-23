// CollegeCard.jsx
import React from 'react';

const CollegeCard = ({ college, handleDetailsClick }) => {
  console.log();
  return (
    <div className="border rounded p-4 mb-4">
      <img src={college.image} alt={college.name} className="w-24 h-24 mx-auto mb-4 rounded-full" />
      <h3 className="text-lg font-bold mb-2">{college.name}</h3>
      <p>Admission Dates: {college.admissionDates.join(", ")}</p>
      <p>Events: {college.events.join(", ")}</p>
      <p>Research History: {college.researchHistory}</p>
      <p>Sports: {college.sports.join(", ")}</p>
      <button
        className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
        onClick={() => handleDetailsClick(college._id)}
      >
        Details
      </button>
    </div>
  );
};

export default CollegeCard;
