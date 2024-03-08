import React, { useState } from 'react';
import axios from 'axios';

const CreateProperty = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    address: '',
    type: '',
    bedrooms: '',
    bathrooms: '',
    rentAmount: '',
    availabilityStatus: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      // Send form data to the backend
      await axios.post('http://localhost:5000/api/properties/createproperty', formData);
      // Redirect or show success message
      window.location.reload();
    } catch (error) {
      console.error('Error creating property:', error);
      // Handle error
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create New Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <input type="text" name="type" value={formData.type} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Number of Bedrooms:</label>
          <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Number of Bathrooms:</label>
          <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Rent Amount:</label>
          <input type="number" name="rentAmount" value={formData.rentAmount} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Availability Status:</label>
          <input type="text" name="availabilityStatus" value={formData.availabilityStatus} onChange={handleInputChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateProperty;
