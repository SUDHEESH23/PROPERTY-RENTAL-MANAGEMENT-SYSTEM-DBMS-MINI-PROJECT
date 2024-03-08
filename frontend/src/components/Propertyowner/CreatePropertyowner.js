import React, { useState } from 'react';
import axios from 'axios';

const CreatePropertyOwner = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    contactInformation: '',
    propertyOwnershipDetails: ''
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
      await axios.post('http://localhost:5000/api/propertyowners/createowner', formData);
      // Redirect or show success message
      window.location.reload();
    } catch (error) {
      console.error('Error creating property owner:', error);
      // Handle error
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create New Property Owner</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Contact Information:</label>
          <input type="text" name="contactInformation" value={formData.contactInformation} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Property Ownership Details:</label>
          <input type="text" name="propertyOwnershipDetails" value={formData.propertyOwnershipDetails} onChange={handleInputChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreatePropertyOwner;
