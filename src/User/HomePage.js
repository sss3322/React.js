// Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Home() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Welcome to Home Page</h1>
          <Link to="/profile" className="btn btn-primary mb-3">Profile</Link> {/* Link to Profile page */}
          <button className="btn btn-primary mb-3">Update</button>
          <button className="btn btn-danger mb-3">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

