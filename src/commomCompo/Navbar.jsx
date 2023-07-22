import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo or Brand */}
          <div className="text-white font-bold text-lg">CollegeBooking</div>

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <Link to={'/'} className="text-white hover:text-gray-200">Home</Link>
            </li>
            <li>
              <Link to={'/collages'} className="text-white hover:text-gray-200">Collages</Link>
            </li>
            <li>
              <Link to={'/admission'} className="text-white hover:text-gray-200">Admission</Link>
            </li>
            <li>
              <Link to={'/mycollege'} className="text-white hover:text-gray-200">MyCollage</Link>
            </li>
          </ul>

          {/* Optional user profile button */}
          {/* Replace this with actual user authentication logic */}
          <div>
            <button className="bg-white text-blue-500 rounded px-4 py-2">
              Profile Name
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
