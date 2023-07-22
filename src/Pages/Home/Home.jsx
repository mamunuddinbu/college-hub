// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollegeCard from './CollegeCard';
import CollegeSearch from '../../commomCompo/CollegeSearch';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // Fetch college data from the API endpoint
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

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleDetailsClick = (collegeId) => {
    // Redirect to the detailed route with the selected college ID
    // You can use react-router-dom's useHistory hook or Link component for this
    // For this example, we are just logging the college ID to the console
    console.log('Selected college ID:', collegeId);
  };

  return (
    <div className=''>
      {/* Search field in the navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <CollegeSearch onSearch={handleSearchChange} />
        </div>
      </nav>

      {/* Display college cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {filteredColleges.slice(0, 3).map((college) => (
          <CollegeCard key={college._id} college={college} handleDetailsClick={handleDetailsClick} />
        ))}
      </div>
    </div>
  );
};

export default Home;
