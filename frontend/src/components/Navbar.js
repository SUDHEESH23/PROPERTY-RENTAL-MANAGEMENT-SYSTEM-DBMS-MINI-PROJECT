import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './Navbar.css'; // Custom CSS file for Navbar styling

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Property Rental Management</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/properties">Properties</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tenants">Tenants</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/maintenance-requests">Maintenance Requests</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Leaseagreement">Lease Agreements</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/PropertyownerList">Property Owners</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
