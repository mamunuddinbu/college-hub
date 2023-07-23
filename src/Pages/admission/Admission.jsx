import React, { useState, useEffect } from "react";
import axios from "axios";
import AdmissionForm from "./AdmissionForm";

const Admission = () => {
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

  return (
    <div>
      <h1 className="text-3xl font-semibold my-4">Colleges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {colleges.map((college) => (
            <p>{college.name}</p>
            // <AdmissionForm key={college._id} college={college.name} ></AdmissionForm>
        ))}
      </div>
    </div>
  );
};

export default Admission;
