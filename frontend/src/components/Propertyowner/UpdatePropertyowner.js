import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdatePropertyOwner = () => {
  const { id } = useParams(); 
  const [owner, setOwner] = useState({
    ownerID: id,
    name: '',
    contactInformation: '',
    propertyOwnershipDetails: ''
  });

  // Function to fetch owner details based on ID
  useEffect(() => {
    const fetchOwner = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/propertyowners/getowner/${id}`); // Assuming '/api/owners/:id' is the endpoint to fetch owner details
        setOwner(response.data);
      } catch (error) {
        console.error('Error fetching owner:', error);
      }
    };

    fetchOwner();
  }, [id]);

  // Function to handle form submission and update owner details
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/propertyowners/updateowner/${id}`, owner); // Assuming '/api/owners/:id' is the endpoint to update owner details
      // Redirect or show success message
      window.location.reload();
      
    } catch (error) {
      console.error('Error updating owner:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOwner(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="container mt-5">
      <h2>Update Property Owner</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={owner.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Contact Information</label>
          <input type="text" name="contactInformation" value={owner.contactInformation} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Property Ownership Details</label>
          <input type="text" name="propertyOwnershipDetails" value={owner.propertyOwnershipDetails} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Update Owner</button>
      </form>
    </div>
  );
};

export default UpdatePropertyOwner;
