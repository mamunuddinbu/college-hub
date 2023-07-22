// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollegeCard from './CollegeCard';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/colleges')
      .then(response => {
        setColleges(response.data);
      })
      .catch(error => {
        console.error('Error fetching colleges:', error);
      });
  }, []);

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDetailsClick = (collegeId) => {
    // Redirect to the detailed route with the selected college ID
    // You can use react-router-dom's useHistory hook or Link component for this
    // For this example, we are just logging the college ID to the console
    console.log('Selected college ID:', collegeId);
  };

  return (
    <div>
      {/* Search field */}
      <input
        type="text"
        placeholder="Search for a college name..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border p-2 mb-4"
      />

      {/* Display college cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredColleges.slice(0, 3).map((college) => (
          <CollegeCard key={college._id} college={college} handleDetailsClick={handleDetailsClick} />
        ))}
      </div>
    </div>
  );
};

export default Home;
