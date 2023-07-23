import React, { useState } from "react";

const AdmissionForm = ({ collegeName }) => {
  const [candidateName, setCandidateName] = useState("");
  const [subject, setSubject] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  // Add state for image field if required

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission here
    // You can send the data to the server or store it in the local state, depending on your implementation
    // For this example, we are just logging the data to the console
    console.log({
      candidateName,
      subject,
      candidateEmail,
      candidatePhone,
      address,
      dateOfBirth,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">
        Admission Form for {collegeName}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Candidate Name
          </label>
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        {/* Add other input fields for subject, email, phone, address, and date of birth here */}
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
  );
};

export default AdmissionForm;
