const db = require('../database');

// Controller methods to handle CRUD operations
exports.getProperties = (req, res) => {
    let sql = 'SELECT * FROM Property'; // Change 'Property' to your table name
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching properties:', err);
        res.status(500).send('Error fetching properties');
        return;
      }
      res.json(result);
    });
  };

  exports.getPropertyById = (req, res) => {
    const propertyId = req.params.id;
    const sql = 'SELECT * FROM Property WHERE PropertyID = ?';
    db.query(sql, propertyId, (err, result) => {
        if (err) {
            console.error('Error fetching property by ID:', err);
            res.status(500).send('Error fetching property by ID');
            return;
        }
        if (result.length === 0) {
            res.status(404).send('Property not found');
            return;
        }
        res.json(result[0]);
    });
};


exports.createProperty = (req, res) => {
    const { address, type, bedrooms, bathrooms, rentAmount, availabilityStatus } = req.body;
  
    // Check if required fields are missing
    if (!address || !type || !bedrooms || !bathrooms || !rentAmount || !availabilityStatus) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    const query = 'INSERT INTO Property (Address, Type, NumberOfBedrooms, NumberOfBathrooms, RentAmount, AvailabilityStatus) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [address, type, bedrooms, bathrooms, rentAmount, availabilityStatus], (err, results) => {
      if (err) {
        console.error('Error creating property:', err);
        return res.status(500).json({ error: "Error creating property" });
      }
      res.send('Property created successfully');
    });
  };

exports.updateProperty = async (req, res) => {
  const propertyId = req.params.id;
  const { address, type, bedrooms, bathrooms, rentAmount, availabilityStatus } = req.body;
  try {
    await db.query('UPDATE Property SET Address = ?, Type = ?, NumberOfBedrooms = ?, NumberOfBathrooms = ?, RentAmount = ?, AvailabilityStatus = ? WHERE PropertyID = ?', 
    [address, type, bedrooms, bathrooms, rentAmount, availabilityStatus, propertyId]);
    res.send('Property updated successfully');
  } catch (error) {
    console.error('Error updating property:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.deleteProperty = async (req, res) => {
  const propertyId = req.params.id;
  try {
    await db.query('DELETE FROM Property WHERE PropertyID = ?', [propertyId]);
    res.send('Property deleted successfully');
  } catch (error) {
    console.error('Error deleting property:', error);
    res.status(500).send('Internal Server Error');
  }
};
