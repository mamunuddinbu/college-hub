import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Admission = () => {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [candidateName, setCandidateName] = useState("");
  const [subject, setSubject] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/colleges")
      .then((response) => {
        setColleges(response.data);
      })
      .catch((error) => {
        console.error("Error fetching colleges:", error);
      });
  }, []);

  const handleCollegeClick = (college) => {
    setSelectedCollege(college.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      candidateName,
      subject,
      candidateEmail,
      candidatePhone,
      address,
      dateOfBirth,
      selectedCollege,
    };

    // Perform form submission here
    // You can send the data to the server or store it in the local state, depending on your implementation
    // For this example, we are just logging the data to the console
    console.log(formData);

    axios
      .post("http://localhost:5000/selected-college", formData)
      .then((response) => {
        console.log("College Added");
        Swal.fire("Data added successfully");

        // Clear form fields
        setCandidateName("");
        setSubject("");
        setCandidateEmail("");
        setCandidatePhone("");
        setAddress("");
        setDateOfBirth("");
        setSelectedCollege(null);
      })
      .catch((error) => {
        console.error("Failed to add toy:", error);
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold my-4">Colleges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {colleges.map((college) => (
          <div key={college._id}>
            <Link to="#" onClick={() => handleCollegeClick(college)}>
              <p className="cursor-pointer">{college.name}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Show Admission Form if a college is selected */}
      {selectedCollege && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Admission Form for {selectedCollege}
          </h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
              <label className="block text-sm font-medium mr-6 text-gray-700 w-1/12">
                Candidate Name
              </label>
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                className="mt-1 p-2 border rounded-md w-3/4"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block text-sm font-medium mr-6 text-gray-700 w-1/12">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 p-2 border rounded-md w-3/4"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block text-sm font-medium mr-6 text-gray-700 w-1/12">
                Email
              </label>
              <input
                type="text"
                value={candidateEmail}
                onChange={(e) => setCandidateEmail(e.target.value)}
                className="mt-1 p-2 border rounded-md w-3/4"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block text-sm font-medium mr-6 text-gray-700 w-1/12">
                Phone
              </label>
              <input
                type="text"
                value={candidatePhone}
                onChange={(e) => setCandidatePhone(e.target.value)}
                className="mt-1 p-2 border rounded-md w-3/4"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block text-sm font-medium mr-6 text-gray-700 w-1/12">
                Candidate Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 p-2 border rounded-md w-3/4"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block text-sm font-medium mr-6 text-gray-700 w-1/12">
                Candidate Address
              </label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="mt-1 p-2 border rounded-md w-3/4"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block text-sm font-medium mr-6 text-gray-700 w-1/12">
                Selected College
              </label>
              <input
                type="text"
                value={selectedCollege}
                defaultValue={selectedCollege}
                className="mt-1 p-2 border rounded-md w-3/4"
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admission;
