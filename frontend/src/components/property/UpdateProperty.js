import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProperty = () => {
  const { id } = useParams(); // Get property ID from URL parameters
  const [property, setProperty] = useState({
    propertyID: id,
    address: '',
    type: '',
    bedrooms: '',
    bathrooms: '',
    rentAmount: '',
    availabilityStatus: ''
  });

  // Function to fetch property details based on ID
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/properties/getproperty/${id}`); // Assuming '/api/properties/:id' is the endpoint to fetch property details
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [id]);

  // Function to handle form submission and update property details
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/properties/updateproperty/${id}`, property); // Assuming '/api/properties/:id' is the endpoint to update property details
      // Redirect or show success message
      window.location.reload();
      
    } catch (error) {
      console.error('Error updating property:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="container mt-5">
      <h2>Update Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={property.address} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Type</label>
          <input type="text" name="type" value={property.type} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Number of Bedrooms</label>
          <input type="number" name="bedrooms" value={property.bedrooms} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Number of Bathrooms</label>
          <input type="number" name="bathrooms" value={property.bathrooms} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Rent Amount</label>
          <input type="number" name="rentAmount" value={property.rentAmount} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Availability Status</label>
          <input type="text" name="availabilityStatus" value={property.availabilityStatus} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Update Property</button>
      </form>
    </div>
  );
};

export default UpdateProperty;
