import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CollegeImageGallery = () => {
  const [collegeImages, setCollegeImages] = useState([]);

  useEffect(() => {
    // Fetch college graduate group pictures data from the backend API
    axios.get('http://localhost:5000/api/graduateIMG')
      .then((response) => {
        setCollegeImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching college images:', error);
      });
  }, []);

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-4">College Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {collegeImages.map((image) => (
          <img
            key={image._id}
            src={image.imageUrl}
            alt={image.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default CollegeImageGallery;
