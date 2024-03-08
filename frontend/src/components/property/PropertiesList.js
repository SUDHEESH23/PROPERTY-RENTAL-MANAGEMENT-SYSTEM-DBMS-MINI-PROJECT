import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




const PropertiesList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/properties/getproperties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  const handleDeleteProperty = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/properties/deleteproperty/${id}`);
      // Refresh properties list after deletion
      const updatedProperties = properties.filter(property => property.PropertyID !== id);
      setProperties(updatedProperties);
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col">
          <h2>Properties List</h2>
        </div>
        <div className="col-auto">
          <Link to="/create-property" className="btn btn-primary">Create New Property</Link>
        </div>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Property ID</th>
            <th>Address</th>
            <th>Type</th>
            <th>Number of Bedrooms</th>
            <th>Number of Bathrooms</th>
            <th>Rent Amount</th>
            <th>Availability Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.PropertyID}>
              <td>{property.PropertyID}</td>
              <td>{property.Address}</td>
              <td>{property.Type}</td>
              <td>{property.NumberOfBedrooms}</td>
              <td>{property.NumberOfBathrooms}</td>
              <td>{property.RentAmount}</td>
              <td>{property.AvailabilityStatus}</td>
              <td>
                {/* Update button */}
                <Link to={`/update-property/${property.PropertyID}`} className="btn btn-info mr-2">Update</Link>
                {/* Delete button */}
                <button className="btn btn-danger" onClick={() => handleDeleteProperty(property.PropertyID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertiesList;
