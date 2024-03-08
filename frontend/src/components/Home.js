import React from 'react';
import img from '../assets/home.jpg'

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Welcome to Property Rental Management</h1>
          <p className="lead">Manage your properties, tenants, maintenance requests, and more with ease.</p>
        </div>
        <div className="col-md-6">
          <img src={img} alt="Property Rental Management" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Home;
