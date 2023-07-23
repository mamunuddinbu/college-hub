import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
  const college = useLoaderData();

  if (!college) {
    return <div>Loading...</div>;
  }

  const {
    name,
    image,
    admissionDates,
    events,
    researchHistory,
    sports,
    admissionProcess,
    eventDetails,
    researchWorks,
    sportsCategories,
  } = college;

  return (
    <div className="container mx-auto py-8">
      <div className="mb-4">
        <img src={image} alt={name} className="w-full h-[500px] object-cover rounded-lg" />
        <h2 className="text-3xl font-bold mt-4">{name}</h2>
        <div className="mt-2">
          <p className="font-semibold">Admission Dates:</p>
          <ul className="list-disc pl-6">
            {admissionDates.map((date) => (
              <li key={date}>{date}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Events:</h3>
        <ul className="list-disc pl-6">
          {events.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Research History:</h3>
        <p>{researchHistory}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Sports:</h3>
        <ul className="list-disc pl-6">
          {sports.map((sport) => (
            <li key={sport}>{sport}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Admission Process:</h3>
        <p>{admissionProcess}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Event Details:</h3>
        <ul className="list-disc pl-6">
          {Object.entries(eventDetails).map(([eventName, eventInfo]) => (
            <li key={eventName}>
              <span className="font-semibold">{eventName}: </span>
              {eventInfo}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Research Works:</h3>
        <ul className="list-disc pl-6">
          {researchWorks.map((work) => (
            <li key={work.title}>
              <span className="font-semibold">{work.title}</span> - {work.authors} ({work.publishedYear})
              <a href={work.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 underline">
                Read Paper
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Sports Categories:</h3>
        <ul className="list-disc pl-6">
          {Object.entries(sportsCategories).map(([sportName, sportInfo]) => (
            <li key={sportName}>
              <span className="font-semibold">{sportName}: </span>
              {sportInfo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollegeDetails;
