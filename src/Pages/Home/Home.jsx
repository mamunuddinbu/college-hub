import React, { useState, useEffect } from "react";
import axios from "axios";
import CollegeCard from "./CollegeCard";
import CollegeSearch from "../../commomCompo/CollegeSearch";
import CollegeImageGallery from "./CollegeImageGallery ";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // Fetch college data from the API endpoint
    axios
      .get("http://localhost:5000/api/colleges")
      .then((response) => {
        setColleges(response.data);
      })
      .catch((error) => {
        console.error("Error fetching colleges:", error);
      });
  }, []);

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleDetailsClick = (collegeId) => {
    console.log(collegeId);
    window.location.href = `/college/${collegeId}`;
  };

  return (
    <div>
      {/* Search field in the navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <CollegeSearch onSearch={handleSearchChange} />
        </div>
      </nav>

      {/* Display college cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {filteredColleges.length < 1 ? (
          <p className="text-3xl text-red-700">No College FOUND</p>
        ) : (
          filteredColleges.slice(0, 3).map((college) => (
            <CollegeCard
              key={college._id}
              college={college}
              handleDetailsClick={handleDetailsClick}
            />
          ))
        )}
      </div>

      <CollegeImageGallery />

      {/* Display research works */}
      <p className="text-4xl bg-green-600 text-white p-10">Research Works of All College</p>
      <div className="p-4 ">
        {filteredColleges.map((college, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600 md:grid-cols-2">Research Works for {college.name}</h2>
            {college.researchWorks.map((work, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-medium">{work.title}</h3>
                <p>Authors: {work.authors}</p>
                <p>Published Year: {work.publishedYear}</p>
                <a
                  href={work.link}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
