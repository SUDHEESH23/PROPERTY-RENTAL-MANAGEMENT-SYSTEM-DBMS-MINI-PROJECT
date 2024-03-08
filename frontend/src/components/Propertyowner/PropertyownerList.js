import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PropertyOwnersList = () => {
  const [propertyOwners, setPropertyOwners] = useState([]);

  useEffect(() => {
    const fetchPropertyOwners = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/propertyowners/getowners'); // Assuming '/api/property-owners' is the endpoint to fetch property owners
        setPropertyOwners(response.data);
      } catch (error) {
        console.error('Error fetching property owners:', error);
      }
    };

    fetchPropertyOwners();
  }, []);

  const handleDeletePropertyOwner = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/propertyowners/deleteowner/${id}`); // Assuming '/api/property-owners/:id' is the endpoint to delete property owner
      // Refresh property owners list after deletion
      const updatedPropertyOwners = propertyOwners.filter(owner => owner.OwnerID !== id);
      setPropertyOwners(updatedPropertyOwners);
    } catch (error) {
      console.error('Error deleting property owner:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col">
          <h2>Property Owners List</h2>
        </div>
        <div className="col-auto">
          <Link to="/create-property-owner" className="btn btn-primary">Create New Property Owner</Link>
        </div>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Owner ID</th>
            <th>Name</th>
            <th>Contact Information</th>
            <th>Ownership Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {propertyOwners.map(owner => (
            <tr key={owner.OwnerID}>
              <td>{owner.OwnerID}</td>
              <td>{owner.Name}</td>
              <td>{owner.ContactInformation}</td>
              <td>{owner.PropertyOwnershipDetails}</td>
              <td>
                {/* Update button */}
                <Link to={`/update-property-owner/${owner.OwnerID}`} className="btn btn-info mr-2">Update</Link>
                {/* Delete button */}
                <button className="btn btn-danger" onClick={() => handleDeletePropertyOwner(owner.OwnerID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyOwnersList;
